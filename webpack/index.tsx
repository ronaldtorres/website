import * as React from "react";
import * as ReactDOM from "react-dom";
import CommentsContainer from "./comments/comments-container"

document.addEventListener("DOMContentLoaded", (event) => {
  const commentsSection = document.getElementById("comments-section")
  if (commentsSection) {
    const issueNumber = Number(commentsSection.getAttribute("issue-number"))
    ReactDOM.render(<CommentsContainer issueNumber={issueNumber}/>, commentsSection)
  }
})

