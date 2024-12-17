import Send_Message from '../../static/images/seng_message.svg'

const Right = () => {
  return (
    <>
      <main className="main">
        <div className="container_main">
          <div className="main_items">
            <div className="blok_chat">
              <div className="blok_send_message">
                <textarea className="send_message" />
                <button type="button">
                    <img src={Send_Message} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Right;
