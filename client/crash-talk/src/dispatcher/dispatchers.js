import requester from "../stores/CONSTANTS/requester";
import GV from "../stores/CONSTANTS/global_variables";
import React from "react";

const useDispatchers = (function () {
  // 디스패쳐 함수들을 관리하는 파일
  const registerDispatcher = async (actionData) => {
    // 회원가입 디스패쳐
    const response = await requester.postUserData(
      GV.getHeaders().register,
      actionData,
      GV.getEndPoint().register
    );
    try {
      if (response.status === 200) {
        console.log("200 OK");
      } else if (response.status === 404) {
        console.log("404 Not Found");
      }
    } catch (error) {
      console.log("Catches error: " + error);
    }
    return response;
  };

  const loginDispatcher = async (actionData) => {
    // 로그인 디스패쳐
    const response = await requester.postUserData(
      GV.getHeaders().login,
      actionData,
      GV.getEndPoint().login
    );
    return response;
  };
  const joinRoomDispatcher = (actionData) => {
    // 채팅방 입장 디스패쳐
    return;
  };

  return {
    registerDispatcher: registerDispatcher,
    loginDispatcher: loginDispatcher,
    joinRoomDispatcher: joinRoomDispatcher,
  };
})();

export default useDispatchers;
