/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"

export default ({ id }) => {
  return (
    <iframe
      sx={{
        width: ["100%", 560],
        height: 315,
      }}
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}
