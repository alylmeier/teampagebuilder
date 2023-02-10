const fs = require("fs");
let teamHTML = "";

const Build = function buildHTML() {
  fs.writeFile(
    "./dist/output.html",
    `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Profile</title>
  </head>
  <body>
    <header class="p-3 text-center bg-info text-light">
        <h1>Our Team Page</h1>
    </header>
    <main class="d-flex flex-wrap justify-content-center">
        ${teamHTML}
    </main>
  </body>
  </html>
    `,
    (err) => (err ? console.error(err) : console.log("Team HTML created"))
  );
};

module.exports = Build;
