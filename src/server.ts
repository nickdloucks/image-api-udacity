import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
import { NextFunction } from 'express-serve-static-core';
import { promises as fsPromises } from 'fs';
import sharp from 'sharp';

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});

const resize = async function(req: express.Request, res: express.Response, next: NextFunction): Promise<void> {
    // res.send(resizePic());
    await fsPromises.writeFile(req.path, resizePic(req.path));
    next();
}
// const resizePic = async ()=>{
//     try{
//         const smallerPic = await fsPromises.rename('./images/fjord.jpg', './images/fjord.jpg?width=200&height=200');
//         return smallerPic;
//     }catch(err){
//         console.log(err);
//     }
// }
const resizePic = async (imgPath: string) => {
    let imgInfo;
    await sharp(imgPath)
    .resize(300,200)
    .toFile(`${imgPath}?width=300&height=200`, function(err, info){ 
        if (err){console.log(err);}
        imgInfo = info;
    });
    return imgInfo;
}

app.get('/images/fjord.jpg', resize, (req, res)=> {
    resize(req, res, res.send);
})