import React from "react";
import Article from "./Article";

const Blog = () => {
  // componentDidMount() {
  //   document
  //     .getElementById("counter")
  //     .addEventListener("click", () => this.countUp());
  // }

  // componentDidUpdate() {
  //   if (this.state.count > 10) {
  //     this.setState({ count: 0 });
  //   }
  // }

  // componentWillUnmount() {
  //   document
  //     .getElementById("counter")
  //     .removeEventListener("click", () => this.countUp());
  // }

  return (
    <>
      <Article
        title={"タイトル"}
        // count={this.state.count}
      />
    </>
  );
};

export default Blog;
