const fs = require('fs');

const handleRequest = (req, res) => {
    let fileName = '';

    switch (req.url) {
        case '/':
            fileName = './index.html'
            break;
        case '/about':
            fileName = './about.html'
            break;
        case '/contact':
            fileName = './contact.html'
            break;
        case '/error':
            fileName = './error.html'
            break;
        default:
           fileName = './404.html'
            break;
    }

    fs.readFile(fileName,(err,result)=>{
        if(!err)
        {
            res.end(result);
        }
    })

}
module.exports = handleRequest;