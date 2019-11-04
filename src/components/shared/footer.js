/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import BodyMargin from "./body-margin"
import Avatar from "../shared/avatar"

export default () => {
  return (
    <footer sx={{ bg: "muted", pb: 3 }}>
      <BodyMargin>
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            alignItems: "center",
          }}
        >
          <div>
            <Styled.h2>A bit about me</Styled.h2>
            <p>
              Hola 👋! I'm Pedro Piñera, a Spanish software developer living in
              Berlin. I work as an engineer manager of the mobile tooling team
              at{" "}
              <a href="https://shopify.com" target="__blank">
                Shopify
              </a>
              . I'm a highly passionate for open source, being{" "}
              <a href="https://tuist.io" target="__blank">
                Tuist
              </a>{" "}
              and{" "}
              <a href="https://github.com/tuist/xcodeproj" target="__blank">
                XcodeProj
              </a>{" "}
              the crafts that I'm most proud of. When I'm not coding or dumping
              my thoughts and learnings on this little corner in the Internet, I
              like to travel ✈️ and spend time with the family and friends.
            </p>
          </div>
          <div sx={{ m: 3 }}>
            <Avatar />
          </div>
        </div>
        <small>Copyright © Pedro Piñera, 2019</small>
      </BodyMargin>
    </footer>
  )
}
