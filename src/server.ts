import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';

import sharp from 'sharp';

const server = express();

server.use(express.static('public'));

server.get('/index.html', (req, res)=>{
    res.send('../public/index.html');
})

const port = process.env.PORT || 3003;

server.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});
