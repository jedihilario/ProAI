const http = require('node:http');
const { pedagogicalAdvice, chat, vocationalGuidance } = require('./src/advices');

const PORT = process.env.PORT ?? 4321;

const processReq = async (req, res) => {
    const { url } = req;
    const [ URL, DATA ] = url.split('?');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    const data = {};
    const params = {};

    try {
        DATA.split('&').forEach(prop => {
            const sep = prop.split('=');
            params[`${sep[0]}`] = sep[1];
        });
    } catch {
        res.writeHead(404);
        return res.end(JSON.stringify({ err: "URL ERROR" }));
    }
    
    if (URL === '/pedagogical') {
        await pedagogicalAdvice(params).then(res => {
            data.advice = res;
        }).catch(e => console.error)
    } else if (URL === '/chat') {
        await chat(params.prompt).then(res => {
            data.response = res;
        }).catch(e => console.error);
    } else if (URL == '/vocational') {
        await vocationalGuidance(params).then(res => {
            data.advice = res;
        }).catch(e => console.error)
    }

    return res.end(JSON.stringify(data));
}

const server = http.createServer(processReq);

server.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})
