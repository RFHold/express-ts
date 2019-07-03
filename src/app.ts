// lib/app.ts
import express from "express";
import expressSession from "express-session";
import path from "path";

import dotenv from "dotenv";
import router from "./routes/router";

/** Optional Session storage options */

// import MongoStore from "connect-mongo";
// new MongoStore({ url: process.env.DBConnectionString, }) used in the store property of express.session

// import SQLiteStore from "connect-sqlite3";
// new SQLiteStore() used in the store property of express.session

// import MySQLStore from "connect-mysql";
// new MySQLStore({ config: process.env.DBConnectionString, }) used in the store property of express.session

// environment config
dotenv.config();
const PORT = process.env.PORT || 3000;
const SECRET = process.env.SECRET || "ServerSessionSecret";
const VIEW_PATH = process.env.VIEW_PATH || "./react/build";

// Create a new express application instance
const app: express.Application = express();

app.use(
	expressSession({
		secret: SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			httpOnly: false,
			secure: false,
			maxAge: 1000 * 60 * 60 * 24 * 3,
		},
	}),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.resolve(VIEW_PATH)));
app.use("/api/", router);
app.get("*", (req, res) => {
	res.sendFile(path.resolve(VIEW_PATH, "./index.html"));
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
