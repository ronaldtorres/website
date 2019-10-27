/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

export default ({ style }) => {
  const [colorMode, setColorMode] = useColorMode()
  const otherColorMode = colorMode === "default" ? "dark" : "default"
  const otherColorModeTitle = colorMode === "default" ? "dark" : "light"
  return (
    <div
      sx={{
        ...style,
        borderWidth: "1px",
        borderColor: "text",
        borderStyle: "solid",
        padding: 2,
        borderRadius: 2,
        color: "text",
        cursor: "pointer",
      }}
      tabIndex="0"
      alt={`Change theme to ${otherColorModeTitle}`}
      onClick={() => setColorMode(otherColorMode)}
      onKeyDown={() => setColorMode(otherColorMode)}
    >
      {`Toggle ${otherColorModeTitle}`}
    </div>
  )
}
