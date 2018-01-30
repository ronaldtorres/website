import * as React from "react";
import { Comment } from "comment-component"
import CommentsList from "./comments-list"

interface CommentsContainerState {
  comments: Comment[]
}

interface CommentsContainerProps {
  issueNumber: number
}

export default class CommentsContainer extends React.Component<CommentsContainerProps, CommentsContainerState> {

  constructor(props: CommentsContainerProps) {
    super(props)
    this.state = { comments: [] }
  }

  componentDidMount() {
    const url = `https://ppinera-comments.herokuapp.com/repos/pepibumur/pepibumur.github.io/issues/${this.props.issueNumber}/comments`
    fetch(url).then((response) => {
      return response.json()
    }).then((comments: any[]) => {
      const newState = {
        comments: comments.map((comment) => ({
          authorUsername: comment.user.login,
          authorAvatarUrl: comment.user.avatar_url,
          bodyMarkdown: comment.body,
          createdAt: new Date(comment.created_at),
          updatedAt: new Date(comment.updated_at),
          reactions: comment.reactions
        }))
      }
      this.setState(newState)
    })
  }

  render() {
    return <CommentsList comments={this.state.comments}/>
  }

}
