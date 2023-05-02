import React from "react";
import ReactMarkdown from "react-markdown";

function MarkdownRenderer(props) {
  return (
    <div className="markdown">
      <ReactMarkdown source={props.content} />
    </div>
  );
}

export default MarkdownRenderer;
