import React from "react";

const Article = (props) => {
  return (
    <div>
      <h2> {props.title} </h2>
      <input
        type="checkbox"
        checked={props.isPublished}
        onChange={() => {
          props.togglePublished();
        }}
      ></input>
    </div>
  );
};

export default Article;
