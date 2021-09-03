// const express = require('express');
// const helmet = require('helmet');
// const morgan = require('morgan');
import express from 'express';
import morgan from 'morgan';
import userroute from './routes/userrouter';

const app = express();

app.use(express.json());
app.use("/api/users",userroute);

if(app.get('env') === 'dev')
{
  app.use(morgan('tiny'));

}

app.listen(8000, () => { console.log(`Server is listening on port 8000`) });