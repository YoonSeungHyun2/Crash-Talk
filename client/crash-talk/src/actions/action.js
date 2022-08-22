import dispatcherManager from "../dispatcher/dispatcher-manager";

const action = (function () {
  // 각 액션에 맞는 액션 객체를 생성하고 반환함
  const toRegister = { type: "REGISTER", data: undefined };
  const toJoinRoom = { type: "JOIN_ROOM", data: undefined };
  const toLogin = { type: "LOGIN", data: undefined };
  const toLogout = { type: "LOGOUT", data: undefined };
  let actionObj = undefined;

  return {
    callRegisterAction: (data) => {
      actionObj = { ...toRegister, data: data };
    },
    callLoginAction: (data) => {
      actionObj = { ...toLogin, data: data };
    },
    callJoinRoomAction: (data) => {
      actionObj = { ...toJoinRoom, data: data };
    },
    callLogoutAction: (data) => {
      actionObj = { ...toLogout, data: data };
    },
    dispatch: (data) => {
      // 액션 객체를 가지고 디스패치 함수 실행
      return dispatcherManager(data || actionObj);
    },
  };
})();

export default action;
