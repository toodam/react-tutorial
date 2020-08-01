import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
    };
  }

  // 公開状態を反転
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };

  render() {
    return (
      <>
        <Article
          title={"タイトル"}
          ispublished={this.state.ispublished}
          togglePublished={() => this.togglePublished()}
        />
      </>
    );
  }
}

export default Blog;
