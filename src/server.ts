import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 4500;

app.use(bodyParser());
app.use(cors({ origin: "*" }));
app.use(logger());

router.get("/", async (ctx, next) => {
    try {
        ctx.body = {
            status: "success"
        }
    } catch (e) {
        console.error(e);
    }
});

app.use(router.routes());

const server = app.listen(PORT, async () => {
    console.log(`Server listening on Port: ${PORT}`);
}).on("error", (err) => {
    console.error(err);
});

export default server;