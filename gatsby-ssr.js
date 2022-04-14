// Import React so that you can use JSX in HeadComponents
const React = require("react")

const HtmlAttributes = {
  lang: "en",
  style: {
    overflow: "hidden",
    backgroundColor: "#33343b",
  },
}

exports.onRenderBody = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes(HtmlAttributes)
}