
import Home from "./components/Route/Home";
import Blog from "./components/Route/Blog";
import FreeThemes from "./components/Route/FreeThemes";
import WpThemes from "./components/Route/WpThemes";
import WebsiteTemplate from "./components/Route/WebsiteTemplate";
import Support from "./components/Route/Support";
import MyAccount from "./components/Route/MyAccount";
import Navigation from "./components/Navbar/Navigation";
import NotFound from "./components/Route/NotFound";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";




function App() {
  return (
      <Fragment>
        <Routes>
        <Route path="/" element={<Navigation/>} >
          <Route index element={<Home/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/FreeThemes" element={<FreeThemes/>} />
          <Route path="/WpThemes" element={<WpThemes/>} />
          <Route path="/WebsiteTemplate" element={<WebsiteTemplate/>} />
          <Route path="/Support" element={<Support/>} />
          <Route path="/MyAccount" element={<MyAccount/>} />
          <Route path="*" element={<NotFound/>} />
          </Route>
      </Routes>
      </Fragment>
  );
}

export default App;
