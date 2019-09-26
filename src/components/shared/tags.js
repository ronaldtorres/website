/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ tags }) => {
  const tagStyle = {
    "-webkit-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",
    mr: 2,
    px: 2,
    my: 2,
    bg: "primary",
    color: "white",
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
