import React from "react";

const Article = (props) => {
  return (
    <div>
      <h2> {props.title} </h2>
      <p>順番は{props.order}です。</p>
      <p>著者: {props.author}</p>
    </div>
  );
};

export default Article;
