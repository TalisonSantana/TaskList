import React, { useContext } from "react";
import { CgPlayListCheck, CgPlayListRemove, CgPlayList } from "react-icons/cg";
import MyContext from "../../../../context";

function Header() {
  const { inputSearch, statusSearch } = useContext(MyContext);

  return (
    <div className="shadow-container items-center xxs:justify-between sm:justify-around to-black flex w-screen h-20 xxs:pr-4 xxs:pl-4 sm:pr-0 sm:pl-0">
      <div>
        <div className="font-semibold xxs:text-2xl xs:text-4xl">To do list</div>
      </div>
      <div className="flex xxs:flex-col sm:flex-row xxs:text-xm md:text-base xxs:pt-2 md:pt-0">
        <div className="sm:mr-12">
          <div>
            <label htmlFor="name">Name: </label>
            <input
              className="w-38 border-solid border-1"
              id="name"
              type="text"
              onChange={(e) => inputSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="flex xxs:mt-1 sm:mt-0 items-center">
          <div>Status: </div>
          <div className="flex">
            <div
              className="ml-2 cursor-pointer"
              onClick={() => statusSearch(true)}
            >
              <CgPlayListCheck fontSize="24px" color="green" />
            </div>
            <div
              className="ml-2 cursor-pointer"
              onClick={() => statusSearch(false)}
            >
              <CgPlayListRemove fontSize="24px" color="red" />
            </div>
            <div
              className="ml-2 cursor-pointer"
              onClick={() => statusSearch(null)}
            >
              <CgPlayList fontSize="24px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
