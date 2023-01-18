// import { SiTailwindcss } from "react-icons/si";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main className="flex items-center justify-center h-[calc(100vh-96px)] ">
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
          <Route path="/project">
            <Project />
          </Route>
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
