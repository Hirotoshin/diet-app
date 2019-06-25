import * as React from "react";

interface ISideMenuState {
  isClick: boolean;
}
class SideMenu extends React.Component<{}, ISideMenuState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isClick: false
    };
    this.onclickMeal = this.onclickMeal.bind(this);
  }
  public onclickMeal() {
    this.setState({
      isClick: !this.state.isClick
    });
    console.log(this.state.isClick);
  }
  public render() {
    return (
      <div className="tabs">
        <button
          className={
            "tab_item " + (this.state.isClick ? "tab_item_onlick" : "")
          }
          onClick={this.onclickMeal}
        >
          食事登録
        </button>
        <button className="tab_item">体重登録</button>
        <button className="tab_item">体重カレンダー</button>
      </div>
    );
  }
}

export default SideMenu;
