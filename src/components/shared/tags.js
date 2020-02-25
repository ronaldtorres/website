/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ tags }) => {
  const tagStyle = {
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    mr: 2,
    px: 2,
    my: 2,
    bg: "primary",
    color: "background",
    fontSize: 1,
    borderRadius: "4px",
  }
  return (
    <div sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {tags.map((tag, index) => {
        return (
          <div sx={tagStyle} key={index}>
            {tag}
          </div>
        )
      })}
    </div>
  )
}
