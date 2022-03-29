import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import e from 'express';
import express from 'express';
import { promises as fsPromises } from fs;

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});

const resize = function(req: express.Request, res: express.Response, next: Function): void {
    writePic();
    next();
}
const writePic = async ()=>{
    try{
        let smallerPic = await fsPromises.writeFile('./images/fjord.jpg?width=200&height=200')
    }catch(err){
        console.log(err);
    }
}

app.get('/images/fjord.jpg', resize, (req, res)=> {
    resize(req, res, res.send)
})