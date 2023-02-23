import React, { useState } from "react";

import "./App.css";

// When my markdown previewer first loads,
// the default text in the #editor field should contain valid markdown that represents
// at least one of each of the following elements: a heading element (H1 size),
// a sub heading element (H2 size), a link, inline code, a code block, a list item,
// a blockquote, an image, and bolded text.

export const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <textarea id="editor"></textarea>
      <div id="preview"></div>
    </div>
  );
};
