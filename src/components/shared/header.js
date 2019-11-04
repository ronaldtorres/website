/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Color from "color"

const SectionButton = ({ title, url, path, index }) => {
  const linkStyle = {
    fontFamily: "'Rosario',sans-serif",
    color: "white",
    ":hover, :link, :visited": {
      color: "white",
    },
  }
  let link
  if (url) {
    link = (
      <a href={url} target="__blank" sx={linkStyle}>
        {title}
      </a>
    )
  } else {
    link = (
      <Link to={path} sx={linkStyle}>
        {title}
      </Link>
    )
  }
  return (
    <div
      sx={{
        userSelect: "none",
        bg: `gradient${index}`,
        px: 2,
        py: 1,
      }}
    >
      {link}
    </div>
  )
}
const Sections = () => {
  return (
    <div
      sx={{
        mt: 3,
        display: ["flex"],
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        bg: theme => theme.colors.primary,
      }}
    >
      <SectionButton title="Journal 📝" path="/journal" index={0} />
      <SectionButton title="About 👨‍💻" path="/about" index={1} />
      <SectionButton title="Speaking 🎤" path="/speaking" index={2} />
      <SectionButton title="Open Source 🐙" path="/open-source" index={3} />
      <SectionButton title="Wiki 📝" path="/wiki" index={4} />
      <SectionButton title="Books 📚" path="/books" index={5} />
    </div>
  )
}

const Header = () => {
  return (
    <header
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        bg: "muted",
      }}
    >
      <div
        sx={{
          mb: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          sx={{ color: "text", "&:hover": { textDecoration: "none" } }}
          to="/"
        >
          <Styled.h2
            sx={{
              mt: [2, 2, 4],
              marginBottom: "0px",
              borderBottom: "none",
              textAlign: "center",
            }}
          >
            Pedro Piñera
          </Styled.h2>
        </Link>
      </div>
      <Sections />
    </header>
  )
}

export default Header
