import koa from "koa";
import router from "koa-frouter";
import path from "path";
const app = new koa();
app.use(router(app,{
    root: path.join(__dirname,"./router"),
    wildcard: "_"
}));
app.listen(3000);