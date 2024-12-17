import json
from channels.generic.websocket import AsyncWebsocketConsumer
from django.utils import timezone


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope["user"]
        self.id = self.scope["url_route"]["kwargs"]["course_id"]
        self.room_group_name = f"chat_{self.id}"

        # Проверка авторизации пользователя
        if self.user.is_authenticated:
            # Присоединиться к группе чат-комнаты
            await self.channel_layer.group_add(
                self.room_group_name, self.channel_name
            )
            # Принять соединение
            await self.accept()
        else:
            # Отклонить соединение, если пользователь не авторизован
            await self.close()

    async def disconnect(self, close_code):
        # Покинуть группу чат-комнаты
        if self.user.is_authenticated:
            await self.channel_layer.group_discard(
                self.room_group_name, self.channel_name
            )

    # Получить сообщение из группы чат-комнаты
    async def chat_message(self, event):
        # Отправить сообщение в веб-сокет
        await self.send(text_data=json.dumps(event))

    async def receive(self, text_data):
        # Загрузить данные из сообщения
        try:
            text_data_json = json.loads(text_data)
            message = text_data_json["message"]
        except (json.JSONDecodeError, KeyError):
            # Обработать ошибку, если формат неверный
            await self.send(text_data=json.dumps({"error": "Invalid message format"}))
            return

        now = timezone.now()

        # Проверка авторизации пользователя
        if self.user.is_authenticated:
            # Отправить сообщение в группу чат-комнаты
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    "type": "chat_message",
                    "message": message,
                    "user": self.user.username,
                    "datetime": now.isoformat(),
                },
            )
        else:
            # Сообщение об ошибке для неавторизованных пользователей
            await self.send(
                text_data=json.dumps({"error": "You must be logged in to send messages"})
            )
