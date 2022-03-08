require("./db/connection");
const exspress = require("express");
const movieRouter = require("./movie/movieRoutes");
const app = exspress();
const port = 5000;

app.use(exspress.json());
app.use(movieRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
