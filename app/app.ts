// lib/app.ts
import express from "express";

const PORT = process.env.PORT || 3000;

// Create a new express application instance
const app: express.Application = express();

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
