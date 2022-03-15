require("./db/connection");
const exspress = require("express");
const cors = require("cors");
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");
const app = exspress();
const port = 5000;

app.use(exspress.json());
app.use(cors());
app.use(movieRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
