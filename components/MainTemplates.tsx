import React from "react";
import MyExperience from "./MyExperience";
import MyPage from "./MyPage";
import MyProject from "./MyProject";
import { counterSlice } from "../pages/_app";
import { useSelector, useDispatch } from "react-redux";

interface MainTemplateProps {
  page: any;
  handlePage: (key: number, title: string) => void;
}

const MainTemplates = ({ page, handlePage }: MainTemplateProps) => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row">
      <div className="flex flex-col bg-blue-100 h-screen">
        {BOX.map((info, index) => (
          <button
            key={index}
            className={`${
              page.key === index ? "bg-red-300" : "bg-blue-200"
            } w-4 h-[100%] cursor-pointer`}
            onClick={() => {
              handlePage(index, info);
              dispatch(counterSlice.actions.up(2));
            }}
          >
            {count}
          </button>
        ))}
      </div>
      <div>
        {page.key === 0 && <MyPage />}
        {page.key === 1 && <MyExperience />}
        {page.key === 2 && <MyProject />}
        {page.key === 3 && <MyProject />}
      </div>
    </div>
  );
};

const BOX = ["포트폴리오 홈", "내 경험", "프로젝트 1", "프로젝트 2"];

export default MainTemplates;
