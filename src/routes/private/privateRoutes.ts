import { Router } from "express";

export default (router: Router) => {
	router.get("/secret", (req, res) => {
		res.send("don't tell anyone");
	});
};
