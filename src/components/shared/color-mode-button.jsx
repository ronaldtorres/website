/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

export default ({ style }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <div
      sx={{
        ...style,
        borderWidth: "1px",
        borderColor: "primary",
        borderStyle: "solid",
        padding: 2,
        borderRadius: 2,
        color: "primary",
        cursor: "pointer",
      }}
      onClick={e => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
    >
      Toggle {colorMode === "default" ? "Dark" : "Light"}
    </div>
  )
}
