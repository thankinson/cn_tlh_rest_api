require("./db/connection");
const exspress = require("express");
const app = exspress();
const port = 5000;

app.use(exspress.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
