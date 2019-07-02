// lib/app.ts
import express from "express";
import expressSession from "express-session";
import dotenv from "dotenv";

/** Optional Session storage options */

// import MongoStore from "connect-mongo";
// new MongoStore({ url: process.env.DBConnectionString, }) used in the store property of express.session

// import SQLiteStore from "connect-sqlite3";
// new SQLiteStore() used in the store property of express.session

// import MySQLStore from "connect-mysql";
// new MySQLStore({ config: process.env.DBConnectionString, }) used in the store property of express.session

const PORT = process.env.PORT || 3000;

// Create a new express application instance
const app: express.Application = express();

app.use(
	expressSession({
		secret: process.env.SECRET || "ServerSessionSecret",
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

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
