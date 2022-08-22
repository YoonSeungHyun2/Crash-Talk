import React, { createContext, useEffect, useState } from "react";
import GV from "./CONSTANTS/global_variables";

const defaultContext = {
  // 컨텍스트 훅 사용을 위한 스탠다드 객체 탬플릿
  isLoggedIn: undefined,
  loginUserStatus: {},
  loginStatusHandler: () => {},
};

export let dataTransferred = undefined;

const defaultUser = GV.getDefaultUserForm();

export const AuthContext = createContext(defaultContext);
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const [loginUserStatus, setLoginUserStatus] = useState(defaultUser); // 유저 정보에 대한 상태

  const loginStatusHandler = (res) => {
    // 프로미스 객체로 상태 핸들링
    res.then((res) => {
      console.log(res);
      setIsLoggedIn(true);
      setLoginUserStatus(res);
    });
  };

  useEffect(() => {
    // 상태 변경 확인을 위한 코드
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const dynamicContext = {
    isLoggedIn: isLoggedIn,
    loginUserStatus: loginUserStatus,
    loginStatusHandler: loginStatusHandler,
  };

  return (
    <AuthContext.Provider value={dynamicContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
