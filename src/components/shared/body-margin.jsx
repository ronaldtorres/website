/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ children }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div sx={{ width: ["90%", "90%", "90%", "52em"] }}>{children}</div>
    </div>
  )
}
