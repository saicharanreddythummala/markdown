import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MdContext = React.createContext();

export default function MarkdownContext(props) {
  const notify = () => toast("Saved");
  const deleted = () => toast("Deleted successfully");

  const URL = `https://md-back-end.herokuapp.com/`;

  const navigate = useNavigate();

  const [markdown, setMarkdown] = useState(`
  # H1
  ## H2
  ### H3
  **bold text**
  *italicized text*
  > blockquote
  1. First item
2. Second item
3. Third item
- First item
- Second item
- Third item
---
[title](https://www.example.com)`);

  const [title, setTitle] = useState("title");

  async function call() {
    const res = await axios.get(`${URL}files`);
    setData(res.data);
  }

  //navigate to home
  const goHome = () => {
    setMarkdown(`
  # H1
  ## H2
  ### H3
  **bold text**
  *italicized text*
  > blockquote
  1. First item
2. Second item
3. Third item
- First item
- Second item
- Third item
---
[title](https://www.example.com)`);
    setTitle("Title");
    navigate("/");
  };

  //save markdown
  const saveFile = async () => {
    await axios.post(`${URL}files`, { file: markdown, title: title });
    notify();
    await call();
    goHome();
  };

  //delete markdown
  const deleteHandler = async (id) => {
    await axios.delete(`${URL}files/${id}`);
    deleted();
    call();
  };

  //edit markdown
  const editHandler = async (id) => {
    const res = await axios.get(`${URL}files/${id}`);
    setMarkdown(res.data.file);
    setTitle(res.data.title);
    navigate(`/edit/${id}`);
    // console.log(res.data);
  };

  //save edited text
  const saveEditHandler = async (id) => {
    const data = { title: title, file: markdown };
    await axios.put(`${URL}files/${id}`, data);
    notify();
    call();
    goHome();
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    call();
  }, [data]);

  return (
    <>
      <MdContext.Provider
        value={{
          initial: markdown,
          updated: (e) => {
            setMarkdown(e);
          },
          save: () => {
            saveFile();
          },
          data: data,
          title: title,
          updateTitle: setTitle,
          delete: deleteHandler,
          edit: editHandler,
          saveEdit: (id) => saveEditHandler(id),
          home: () => goHome(),
        }}
      >
        {props.children}
      </MdContext.Provider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
