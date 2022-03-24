import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express  from 'express';

const app = express();
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`);
});