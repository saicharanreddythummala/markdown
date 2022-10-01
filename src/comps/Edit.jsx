import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdContext } from "../context/MarkdownContext";
import "../styles/Edit.css";

export default function Edit() {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <>
      <MdContext.Consumer>
        {(context) => (
          <div className="col-10" id="edit">
            <div className="container-fluid ps-5 pt-2" id="title_container">
              <input
                type="text"
                placeholder={context.title}
                id="title"
                value={context.title}
                onInput={(e) => {
                  context.updateTitle(e.target.value);
                }}
              />
            </div>
            <textarea
              value={context.initial}
              onChange={(e) => context.updated(e.target.value)}
              id="area"
            ></textarea>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate(`/preview/${params.id}`)}
            >
              Preview
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                context.saveEdit(params.id);
              }}
            >
              Save
            </button>
          </div>
        )}
      </MdContext.Consumer>
    </>
  );
}
