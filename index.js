const http = require('node:http');
const { pedagogicalAdvice } = require('./src/pedagogicalAdvice');

const PORT = process.env.PORT ?? 4321;

const processReq = async (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    const data = {};

    await pedagogicalAdvice().then(res => {
        console.log(res);
        data.advice = res;
    }).catch(e => console.error)

    return res.end(JSON.stringify(data));
}

const server = http.createServer(processReq);

server.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})
