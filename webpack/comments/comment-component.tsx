import * as React from "react"
import { CSSProperties } from "react"
import { Markdown } from "react-showdown"
import timeago from 'timeago.js'

export interface Comment {
  authorUsername: string,
  authorAvatarUrl: string | null,
  bodyMarkdown: string,
  createdAt: Date,
  updatedAt: Date | null,
  reactions: Reactions | null
}

export interface Reactions {
  "+1": number,
  "-1": number,
  laugh: number,
  hooray: number,
  confused: number,
  heart: number
  [index:string] : number
}

interface CommentComponentProps {
  comment: Comment
}

export default class CommentComponent extends React.Component<CommentComponentProps> {

  commentStyle = {
    display: "flex",
    flex: 1,
    flexDirection: "row" as "row",
    justifyContent: "flex-start" as "flex-start",
    alignItems: "stretch" as "stretch"
  }

  boxStyle = {
    backgroundColor: "white",
    borderRadius: "2px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#C3D3E9",
    flex: 1
  }

  headerStyle = {
    backgroundColor: "#F2F8FE",
    padding: "10px"
  }

  bodyStyle = {
    padding: "5px"
  }

  reactionsStyle = {
    borderStyle: "solid",
    borderWidth: "1px 0px 0px 0px",
    borderColor: "#C3D3E9",
    flex: 1,
    display: "flex",
    flexDirection: "row" as "row"
  }

  reactionStyle = {
    borderStyle: "solid",
    borderWidth: "0px 1px 0px 0px",
    borderColor: "#C3D3E9",
    padding: "5px 10px 5px 10px",
    flex: "0 0 30px",
    display: "flex",
    color: "#2768CF"
  }

  reactions() {
    let filtered: { [index: string]: number } = {}
    return ["+1", "-1", "laugh", "hooray", "confused", "heart"].reduce((acc, next) => {
      if (this.props.comment.reactions[next] != 0) {
        acc[next] = this.props.comment.reactions[next]
      }
      return acc
    }, filtered)
  }

  renderReaction(name: string, count: number) {
    const emojis: { [index: string]: string } = {
      "+1": "👍",
      "-1": "👎",
      "laugh": "😊",
      "hooray": "🎉",
      "confused": "😕",
      "heart": "❤️"
    }
    return <div style={this.reactionStyle}>
      {emojis[name]} {count}
    </div>
  }

  renderReactions() {
    const reactions = this.reactions()
    return <div style={this.reactionsStyle}>
      {Object.keys(reactions).map((reaction) => {
        return this.renderReaction(reaction, reactions[reaction])
      })}
    </div>
  }

  render() {
    const authorUrl = "https://github.com/" + this.props.comment.authorUsername
    let timeAgoString: string | null
    if (this.props.comment.updatedAt) {
      timeAgoString = timeago().format(this.props.comment.updatedAt)
    } else {
      timeAgoString = timeago().format(this.props.comment.createdAt)
    }
    return <div style={this.commentStyle}>
      <div style={{display: "flex", flex: "0 0 40px"}}>
        <img style={{height: "40px", width: "40px"}} src={this.props.comment.authorAvatarUrl}/>
      </div>
      <div style={{flex: "0 0 10px"}}/>
      <div style={this.boxStyle}>
        <div style={this.headerStyle}>
          <b><a target="blank" href={authorUrl}>@{this.props.comment.authorUsername}</a></b> {timeAgoString} <br/>
        </div>
        <div style={this.bodyStyle}>
          <Markdown markup={this.props.comment.bodyMarkdown}/>
        </div>
        {(Object.keys(this.reactions()).length != 0) && (
          <div>
            {this.renderReactions()}
          </div>
        )}
      </div>
    </div>
  }
}