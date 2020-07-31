import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Article
          title={"タイトル"}
          order={3}
          ispublished={true}
          author={"cline"}
        />
      </>
    );
  }
}

export default Blog;
