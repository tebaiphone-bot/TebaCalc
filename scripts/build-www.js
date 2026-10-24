// Wraps app.html (published as-is as the web preview) in a full HTML document for the APK.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const body = fs.readFileSync(path.join(root, "app.html"), "utf8");
const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0f1311">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}</style>
</head>
<body>
${body}
</body>
</html>
`;
fs.mkdirSync(path.join(root, "www"), { recursive: true });
fs.writeFileSync(path.join(root, "www", "index.html"), html);
console.log("www/index.html written");
