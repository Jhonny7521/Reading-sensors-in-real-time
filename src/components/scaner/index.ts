import {Router} from "express";
import * as Controller from "./controller";

const scanerRouter = Router();

scanerRouter.get("/", Controller.startReading);
// readingRouter.get("/otro", Controller.otraruta);

export default scanerRouter;