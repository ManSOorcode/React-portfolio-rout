// import { SiTailwindcss } from "react-icons/si";

import { Redirect, Route, Switch, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";

// import ProjectDetails from "./Components/ProjectDetails";

import ProjectDesciption from "./Components/Projects/ProjectDesciption";
// import ProjectDetails from "./Components/ProjectDetails";

const App = () => {
  // const param = useParams();
  return (
    <div>
      <Header />
      <main className="flex items-center justify-center min-h-[100vh-96px] bg-slate-700 ">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path={"/project/:projectId/:projectDescriptionId"} exact>
            <ProjectDesciption />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          {/* <Route path={"/project/:projectId"} exact>
            <ProjectDetails />
          </Route> */}

          {/* <Route path="/project/:projectId">
            <ProjectDetails />
          </Route> */}
          {/* <Switch>
            <Route path="/project/html">
              <HtmlProject to={"/project/html"} />
            </Route>
            <Route path="/project/css">
              <CssProject />
            </Route>
            <Route path="/project/javaScript">
              <JavaScriptProject />
            </Route>
            <Route path="/project/react">
              <ReactProject />
            </Route>
          </Switch> */}

          <Route path="/contacts">
            <Contact />
          </Route>
        </Switch>
        {/* <p className="p-2 text-2xl capitalize bg-red-300">
				use this template for react practice with tailwind
				<SiTailwindcss className="inline mx-1 text-cyan-500" />
			</p> */}
      </main>
    </div>
  );
};

export default App;
