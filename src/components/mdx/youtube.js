/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ id }) => {
  return (
    <iframe
      title={id}
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
