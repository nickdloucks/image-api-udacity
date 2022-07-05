import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';

import sharp from 'sharp';

const server = express();

server.use(express.static('public'));

server.get('/index.html', (req, res)=>{
    res.send('../public/index.html');
});

server.get('/*.jpg', async (req, res)=>{
    // if thumb/ files contains args[0], return thumbnail version

    // use a REGEX to determine file name: ending in  '*.thumb.jpg' for example
    // fetch(<thumbnail>) // try to fetch the thumbnail
    //     .reject() //if Promise rejects, create the new image with Sharp using the bigger image
    //     .then(smallImg => smallImg)

    const newImg = await sharp('image.jpg')
        .resize(200)
        .toFile('thumb/output.jpg', function(err){
            console.log(err);
        });
    res.send(newImg);
});

const port = process.env.PORT || 3003;

server.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});
