/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment"

export default ({ date, body, tags }) => {
  const dateMoment = moment(date, "MMMM Do YYYY")
  const dateMonth = dateMoment.format("MMMM YYYY")
  const dateDay = dateMoment.format("DD")
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
        <Styled.h3 sx={{ mb: 3 }}>
          <span
            sx={{
              bg: "primary",
              color: "background",
              pl: "4px",
              pr: "6px",
              borderRadius: "26px",
            }}
          >
            {dateDay}
          </span>{" "}
          {dateMonth}
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
      <footer sx={{ display: "flex", flexWrap: "wrap" }}></footer>
    </article>
  )
}
