import express from "express";
import sessionRoutes from "./sessionRoutes";
import privateRoutes from "./private/privateRoutes";
import publicRoutes from "./public/publicRoutes";

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// routes that do not require authentication go here
publicRoutes(router);

// session routes everything after gets authenticated
sessionRoutes(router);

// routes that do require authentication go here
privateRoutes(router);

export default router