import koa from "koa";
const app = new koa()
function sleep(x) {
    return new Promise((resolve) => {
        setTimout(()=>{
            resolve(x)
        },300)
    })
}
const a = async function () {
    for (let i = 0;i < 10; i++) {
        let x = await sleep(i)
        console.log(x)
    }
}
a();