"use client";
import "./global.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// next14 버젼의 서버 컴포넌트와 클라이언트 컴포넌트
// 서버 컴포넌트 - 화면에 보이기전에 실행되는 컴포넌트
// 클라이언트 컴포넌트 = 화면에 보인 후 실행되는 컴포넌트

// 이미지 최적화
//
// 폰트 최적화
const MainPage = () => {
  const router = useRouter();

  const onClickHandler = () => {
    // router.push("/login");
    // router.refresh();
    router.replace("./login");
  };
  return (
    <>
      <h1 className="font-thin">Main component</h1>
      {/* <a href="/login">로그인</a> */}
      {/* <Link href="/login">로그인</Link> */}
      <button onClick={onClickHandler}>로그인</button>
    </>
  );
};

export default MainPage;
