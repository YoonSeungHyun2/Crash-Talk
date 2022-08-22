import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./view/pages/Login";
import Register from "./view/pages/Register";
import Home from "./view/pages/Home";
import Chat from "./view/pages/Chat";
import "./App.css";
import { AuthContextProvider } from "./stores/auth-context";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/chat"} element={<Chat />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
