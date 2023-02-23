import { marked } from "marked";
import React, { useState } from "react";

import "./App.css";

// When my markdown previewer first loads,
// the default text in the #editor field should contain valid markdown that represents
// at least one of each of the following elements:   a list item,
// a blockquote, an image, and bolded text.

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [markdown, setMarkdown] = useState(`
  # hej!

  ## This is a markdown previewer!
 
Try typing some **_markdown_**.
    Type some \`code\` or try a 
    
    \`\`\`js
    // code block.
    \`\`\`.
    
  Feel free to ~~cross stuff out~~.
  - Make a list! 
        
 [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer) is pretty cool.
  
 > You should check it out!

 Gif time!
 ![](https://media.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-downsized.gif)
      `);

  return (
    <div className="App">
      <div className="input">
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
        ></textarea>
      </div>

      <div className="output">
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(markdown),
          }}
        ></div>
      </div>
    </div>
  );
};
