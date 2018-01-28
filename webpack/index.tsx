import * as React from "react";
import * as ReactDOM from "react-dom";
import CommentsContainer from "./comments/comments"

document.addEventListener("DOMContentLoaded", (event) => {
  const commentsSection = document.getElementById("comments-section")
  if (commentsSection) {
    const issueNumber = commentsSection.getAttribute("issue-number")
    ReactDOM.render(<CommentsContainer issue-number={issueNumber}/>, commentsSection)
  }
})

