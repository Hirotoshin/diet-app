import * as React from "react";

class SideMenu extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="tabs">
        <button className="tab_item">食事登録</button>
        <button className="tab_item">体重登録</button>
        <button className="tab_item">体重カレンダー</button>
      </div>
    );
  }
}

export default SideMenu;
