const http = require('node:http');
const { pedagogicalAdvice, chat } = require('./src/advices');

const PORT = process.env.PORT ?? 4321;

const processReq = async (req, res) => {
    const { url } = req;
    const [ URL, DATA ] = url.split('?');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const data = {};
    const params = {};

    DATA.split('&').forEach(prop => {
        const sep = prop.split('=');
        params[`${sep[0]}`] = sep[1];
    });
    
    if (URL === '/pedagogical') {
        await pedagogicalAdvice(params).then(res => {
            data.advice = res;
        }).catch(e => console.error)
    } else if (URL === '/chat') {
        await chat(params.prompt).then(res => {
            data.response = res;
        }).catch(e => console.error);
    }

    return res.end(JSON.stringify(data));
}

const server = http.createServer(processReq);

server.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})
