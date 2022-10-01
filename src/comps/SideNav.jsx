import React from "react";
import "../styles/SideNav.css";
import * as Ai from "react-icons/ai";
import { MdContext } from "../context/MarkdownContext";

export default function SideNav() {
  return (
    <>
      <MdContext.Consumer>
        {(value) => (
          <div
            className="d-flex flex-column align-items-center justify-content-around"
            id="SideNav"
          >
            <div id="logo-div" className="text-center">
              <Ai.AiFillFolder className="logo" onClick={()=>value.home()}/>
              Home
            </div>
            <div id="logo-div">
              <Ai.AiFillFolderAdd className="logo" onClick={() => value.home()} />
            </div>
          </div>
        )}
      </MdContext.Consumer>
    </>
  );
}
