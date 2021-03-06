import React from "react";
import { Pager } from "react-pager";

import ReactPageScroller from "react-page-scroller";
import FirstComponent from "./pages/FirstComp";
import SecondComponent from "./pages/SecondComp";
import ThirdComponent from "./pages/ThirdComp";

// import "./index.css";

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = (number) => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = (number) => {
    console.log(number);
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pager.Item>
      );
    }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
        >
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
        </ReactPageScroller>
        {/* <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager> */}
      </React.Fragment>
    );
  }
}
