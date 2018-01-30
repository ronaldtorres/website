import * as React from "react"
import CommentComponent, { Comment } from "./comment-component"

interface CommentsListProps {
  comments: Comment[],
  issueNumber: number
}

export default class CommentsList extends React.Component<CommentsListProps> {
  render() {
    const issuesLink = "https://github.com/pepibumur/pepibumur.github.io/issues/" + this.props.issueNumber
    if (this.props.comments.length == 0) {
      return <div>There are no comments</div>
    } else {
      return <div>
        {this.props.comments.map((comment) => (
          <div>
            <CommentComponent comment={comment}/>
            <div style={{height: "10px"}}/>
          </div>
        ))}
        <div style={{height: "20px"}}/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <div>
            <a target="blank" href={issuesLink}><b style={{color: "#53A351"}}>Leave a comment</b></a>
          </div>
        </div>
      </div>
    }
  }
}