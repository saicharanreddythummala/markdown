import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Group from "./comps/Group";
import Markdown from "./comps/Markdown";
import SideNav from "./comps/SideNav";
import { Route, Routes } from "react-router-dom";
import Preview from "./comps/Preview";
import Provider from "./context/MarkdownContext";
import Edit from "./comps/Edit";

function App() {
  return (
    <>
      <Provider>
        <div className="container-fluid d-flex">
        {/* Header section */}
          <header>
            <nav>
              <SideNav />
            </nav>
          </header>

          {/* main section */}
          <main>
            <div id="wrapper" className="container-fluid d-flex">
              <Group />
              <Routes>
                <Route path="*" element={<Markdown />} />
                <Route path="/preview" element={<Preview />} />
                <Route path="/preview/:id" element={<Preview />} />
                <Route path="/edit/:id" element={<Edit />} />
              </Routes>
            </div>
          </main>
        </div>
      </Provider>
    </>
  );
}

export default App;
