import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
import { NextFunction } from 'express-serve-static-core';
import { promises as fsPromises } from 'fs';
import sharp from 'sharp';

const server = express();

const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});
