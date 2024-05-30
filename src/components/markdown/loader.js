import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

import {
  mdHeader1,
  mdHeader2,
  mdHeader3,
  mdParagraph,
  mdListItem,
  mdPre,
  mdImg,
} from "../../markdownStyles";

const markdownOptions = {
  overrides: {
    h1: {
      component: mdHeader1,
    },
    h2: {
      component: mdHeader2,
    },
    h3: {
      component: mdHeader3,
    },
    p: {
      component: mdParagraph,
    },
    li: {
      component: mdListItem,
    },
    pre: {
      component: mdPre,
    },
    img: {
      component: mdImg,
    },
  },
};

export function MarkdownLoader(props) {
  const { path } = props;
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  if (content) {
    return <Markdown options={markdownOptions}>{content}</Markdown>;
  }
}
