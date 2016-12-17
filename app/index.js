import koa from "koa";
const app = new koa()
console.log(app)
const a = async (ctx,next) => {
    await next();
}