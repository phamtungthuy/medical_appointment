import express from "express";
import { getHomePage, getAboutPage, getCRUD } from "../controllers/homeController";
let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', getHomePage);
    router.get('/about', getAboutPage);
    router.get('/crud', getCRUD);

    return app.use("/", router);
}

module.exports = initWebRouters;