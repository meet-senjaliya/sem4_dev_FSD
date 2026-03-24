res.writeHead(200,{'':'application/json'});
const data = {
    subject : "FSD-2",
    lecture : 4
}
res.end(JSON.stringify(data));