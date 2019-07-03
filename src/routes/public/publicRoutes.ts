import { Router } from "express";

export default (router: Router) => {
	router.get("/ping", (req, res) => {
        res.send("pong");
    })
};
