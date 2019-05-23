const React = require("react");
const ReactDOM = require("react-dom/server");
const { Ring } = require("react-spinners-ci");
const express = require("express");
const PORT = process.env.PORT || 3090;
const app = express();

app.get("*", (req, res) => {
  const el = React.createElement(Ring);
  const html = ReactDOM.renderToString(el);
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Document</title>
  </head>
  <body>
    ${html}
  </body>
  </html>`);
});
app.listen(PORT, () => {
  console.log(`listen on port: ${PORT}`);
});
