import { React} from "react";
import "../styles/Markdown.css";
import { MdContext } from "../context/MarkdownContext";
import { useNavigate } from "react-router-dom";

export default function Markdown() {
  const navigate = useNavigate();

  return (
    <>
      <MdContext.Consumer>
        {(context) => (
          <div className="col-10" id="editor">
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
              onInput={(e) => context.updated(e.target.value)}
              id="area"
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/preview")}
            >
              Preview
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                context.save();
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
