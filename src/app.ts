import express, { type Application } from "express";
import router from "./router";

const app: Application = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

router(app);

export default app;