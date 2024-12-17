import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./static/css/style.css";
import Left from "./chat/components/left.jsx";
import Right from "./chat/components/right.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="blok">
                  <Left />
                  <Right />
                </div>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
