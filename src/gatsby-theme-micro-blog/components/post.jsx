/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment"
import NumberBadge from "../../components/shared/number-badge"

export default ({ date, body, tags }) => {
  const dateMoment = moment(date, "MMMM Do YYYY")
  const dateMonth = dateMoment.format("MMMM YYYY")
  const dateDay = dateMoment.format("D")
  return (
    <article
      sx={{
        borderRadius: 1,
        marginTop: 2,
        bg: "background",
        color: "text",
      }}
    >
      <header sx={{ mb: 4 }}>
        <Styled.h3 sx={{ mb: 3, display: "flex" }}>
          <NumberBadge
            number={dateDay}
            size={[26, 35]}
            fontSize={["16px", "20px"]}
          />{" "}
          <span sx={{ ml: 2 }}>{dateMonth}</span>
        </Styled.h3>
        <div
          sx={{
            marginRight: 2,
            marginBottom: 1,
          }}
        >
          <span>Tagged with: </span>
          <span>
            <i>{tags.join(", ")}</i>
          </span>
        </div>
      </header>
      <MDXRenderer>{body}</MDXRenderer>
    </article>
  )
}
