import { routerApp } from './routers/route';
import express from 'express';
const app = express();
const router = express.Router();
const port = 4200;

// middleware that is specific to this router
router.use(app)
routerApp(app);

app.listen(port)
