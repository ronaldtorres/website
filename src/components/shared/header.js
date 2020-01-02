/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import { useEffect, useRef } from "react"
import { useCookie } from "@use-hook/use-cookie"

const SectionButton = ({ title, url, path, index }) => {
  let button = (
    <Location>
      {({ location }) => {
        let selected = false
        if (path === "/" && path === location.pathname) {
          selected = true
        } else if (path != "/" && location.pathname.includes(path)) {
          selected = true
        }
        return (
          <div
            sx={{
              userSelect: "none",
              color: selected ? `gradient${index}` : "background",
              bg: selected ? "background" : `gradient${index}`,
              px: 3,
              py: 1,
            }}
          >
            {title}
          </div>
        )
      }}
    </Location>
  )
  const linkSx = {
    flex: "0 0 auto",
    minWidth: 0,
    ":hover": { textDecorationColor: `gradient${index}` },
  }
  if (url) {
    return (
      <a href={url} target="__blank" sx={linkSx}>
        {button}
      </a>
    )
  } else {
    return (
      <Link to={path} sx={linkSx}>
        {button}
      </Link>
    )
  }
}
const Sections = () => {
  const ref = useRef(null)
  const [navigationScrollLeft, setNavigationScrollLeft] = useCookie(
    "navigation-scroll-left",
    0
  )

  const scrollToBottom = () => {
    ref.current.scrollLeft = navigationScrollLeft
  }

  useEffect(scrollToBottom, [])
  return (
    <div
      ref={ref}
      onScroll={element => {
        setNavigationScrollLeft(element.target.scrollLeft, { expires: 1 })
      }}
      sx={{
        mt: 3,
        display: "flex",
        flexWrap: "no-wrap",
        justifyContent: ["flex-start", "flex-start", "flex-start", "center"],
        flexDirection: "row",
        overflow: ["scroll", "scroll", "scroll", "visible"],
        "&::WebkitOverflowScrolling": "touch",
        "&::WebkitScrollbar": {
          display: "none",
        },
        bg: theme => theme.colors.primary,
      }}
    >
      <SectionButton title="Home 🏚" path="/" index={0} />
      <SectionButton title="Journal 📝" path="/journal" index={0} />
      <SectionButton
        title="Newsletter 📬"
        url="https://tinyletter.com/pepibumur"
      />
      <SectionButton title="About 👨‍💻" path="/about" index={1} />
      <SectionButton title="Speaking 🎤" path="/speaking" index={2} />
      <SectionButton title="Photos 📸" path="/photos" index={3} />
      <SectionButton title="Open Source 🐙" path="/open-source" index={4} />
      <SectionButton title="Lens 🔍" path="/lens" index={5} />
      <SectionButton title="Wiki 📝" path="/wiki" index={6} />
      <SectionButton title="Books 📚" path="/books" index={7} />
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
      </div>
      <Sections />
    </header>
  )
}

export default Header
