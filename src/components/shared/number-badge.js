/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ number, size, fontSize }) => {
  const sx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "primary",
    color: "background",
    width: size.map(size => `${size}px`),
    height: size.map(size => `${size}px`),
    borderRadius: size.map(size => `${size / 2}px`),
  }
  if (fontSize) {
    sx["fontSize"] = fontSize
  }
  return <span sx={sx}>{number}</span>
}
