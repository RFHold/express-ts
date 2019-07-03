import { Router, Request, Response } from "express";

export default (router: Router) => {
	const authenticate = (req: Request, res: Response, next: Function) =>{
		return next()
	}

	router.all("*", authenticate);
}
