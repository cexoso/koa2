const Koa = require('koa');
const multer = require('koa-multer');
const Router = require('koa-router');
const router = new Router();
const app = new Koa();
const upload = multer({ dest: 'uploads/' });

router.post('/uploads', upload.fields([{ name: 'file', maxCount: 1 }]), function (ctx, next) {
    ctx.body = ctx.req.files.file[0].filename
});

const port = 3000;
app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(require('koa-static-server')({
    rootDir: "uploads",
}))
app.listen(port);
console.log(`start at ${port}`)