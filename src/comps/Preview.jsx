import { React } from "react";
import { MdContext } from "../context/MarkdownContext";
import "../styles/Preview.css";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Preview() {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <>
      <MdContext.Consumer>
        {(context) => (
          <>
            <div className="col-10" id="preview">
              <div className=" ps-5 pt-2" id="title-holder">
                {context.title}
              </div>
              <div className="cont">
                <ReactMarkdown
                  children={context.initial}
                  remarkPlugins={[remarkGfm]}
                />
              </div>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() =>
                  params.id ? navigate(`/edit/${params.id}`) : navigate(`/`)
                }
              >
                Back
              </button>
            </div>
          </>
        )}
      </MdContext.Consumer>
    </>
  );
}
