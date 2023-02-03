import { scanerRouter } from "../components";

const listRoutes = [
  ["start-reading", scanerRouter],
];

const router = (app: any) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(`/${path}`, controller);
  });
};

export default router;