import React from "react";
import { useSelector } from "react-redux";

const MyPage = () => {
  const count = useSelector((state: any) => state.counter.value);
  return <div>MyPage</div>;
};

export default MyPage;
