import { marked } from "marked";
import React, { useState } from "react";

import "./App.css";

// When my markdown previewer first loads,
// the default text in the #editor field should contain valid markdown that represents
// at least one of each of the following elements: a heading element (H1 size),
// a sub heading element (H2 size), a link, inline code, a code block, a list item,
// a blockquote, an image, and bolded text.

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [markdown, setMarkdown] = useState(`
  # React Markdown Previewer!

  ## This is a sub-heading...
      
  Or... wait for it... **_both!_**
    
  And feel free to go crazy ~~crossing stuff out~~.
        
  There's also [links](https://ashusingh.me), and
  > Block Quotes!
       
    
      `);

  return (
    <div className="App">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => {
          setMarkdown(e.target.value);
        }}
      ></textarea>
      <div id="preview">
        <div
          dangerouslySetInnerHTML={{
            __html: marked(markdown),
          }}
        ></div>
      </div>
    </div>
  );
};
