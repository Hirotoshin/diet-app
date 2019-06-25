import * as React from "react";
import "../App.css";
import Header from "./Header/Header";
import SideMenu from "./SideMenu/SideMenu";

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="header_container">
          <Header />
        </div>
        <div className="sidemenu_container">
          <SideMenu />
        </div>
        <div className="main_container" />
      </div>
    );
  }
}

export default App;
