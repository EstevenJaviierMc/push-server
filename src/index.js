import express from 'express';
import consign from 'consign'
import 'dotenv/config'

const app = express();

consign({ cwd: __dirname })
    .include('config/db.js')
    .then('config/app.js')
    .then('middlewares')
    .then('controllers')
    .then('routes')
    .into(app);