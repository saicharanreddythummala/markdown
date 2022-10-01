import React from "react";
import "../styles/Group.css";
import { MdContext } from "../context/MarkdownContext";
import * as Ri from "react-icons/ri";

export default function Group() {

  return (
    <>
      <div className="col-2 d-flex flex-column" id="folder">
        <div className="item fs-4" id="item-head">
          Saved markdowns
        </div>
        <MdContext.Consumer>
          {(context) => (
            <>
              {context.data.map((e) => (
                <div className="item d-flex flex-column" key={e._id}>
                  <p
                    className="text-justify fs-4 col"
                    id="folder__item--title"
                    onClick={()=>context.edit(e._id)}
                  >
                    {e.title}
                  </p>
                  <div className="d-flex justify-content-around">
                    <Ri.RiEditBoxFill
                      className="fs-5 logo"
                      onClick={() => {
                        context.edit(e._id);
                      }}
                    />
                    <Ri.RiDeleteBin6Fill
                      className="fs-5 logo"
                      onClick={() => {
                        context.delete(e._id);
                      }}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </MdContext.Consumer>
      </div>
    </>
  );
}
