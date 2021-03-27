const express = require("express");
const app = express();
const cors = require("cors");
const scoreBookRouter = require("./router/scorebook");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: "mongodb://localhost:27017",
  databaseName: "cricket",
  collection: "session",
});

const whitelist = ["http://localhost:3000", "http://localhost:3002"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "123",
    saveUninitialized: false,
    resave: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  })
);

app.use(scoreBookRouter);

app.listen(3001, () => {
  console.log("Server is running");
});
