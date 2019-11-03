/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

const SectionButton = ({ title, url, path }) => {
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
        bg: "primary",
        margin: [1, 2],
        px: 2,
        py: 1,
        borderRadius: 1,
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
        display: ["none", "none", "flex"],
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <SectionButton title="Journal 📝" path="/journal" />
      <SectionButton title="About 👨‍💻" path="/about" />
      <SectionButton title="Speaking 🎤" path="/speaking" />
      <SectionButton title="Open Source 🐙" path="/open-source" />
      <SectionButton title="Wiki 📝" path="/wiki" />
      <SectionButton title="Books 📚" path="/books" />
    </div>
  )
}

const Header = () => {
  return (
    <header
      sx={{
        pb: 3,
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
          <Styled.h1
            sx={{
              mt: [2, 2, 4],
              marginBottom: "0px",
              borderBottom: "none",
              textAlign: "center",
            }}
          >
            Pedro Piñera
          </Styled.h1>
        </Link>
      </div>
      <Sections />
    </header>
  )
}

export default Header
