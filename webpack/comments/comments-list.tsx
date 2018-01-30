import * as React from "react"
import CommentComponent, { Comment } from "./comment-component"

interface CommentsListProps {
  comments: Comment[]
}

export default class CommentsList extends React.Component<CommentsListProps> {
  render() {
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
      </div>
    }
  }
}