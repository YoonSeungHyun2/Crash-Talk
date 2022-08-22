import useDispatchers from "./dispatchers";

const dispatcherManager = (_action) => {
  //액션 객체를 분석하여 적절한 디스패쳐 함수 실행
  const { type: actionType, data: actionData } = _action;

  if (actionType === "REGISTER") {
    return useDispatchers.registerDispatcher(actionData);
  } else if (actionType === "JOIN_ROOM") {
    return useDispatchers.joinRoomDispatcher(actionData);
  } else if (actionType === "LOGIN") {
    return useDispatchers.loginDispatcher(actionData);
  }
};

export default dispatcherManager;
