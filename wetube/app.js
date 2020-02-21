//require : node module을 어딘가에서 가져옴 = express import 
// 1순위 : express 폴더를 찾고 
// 2순위 : node_modules 사이에서 찾음 
//const express = require('express');

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router";

// app변수 안에 express를 실행해서 담음
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended : true}));
app.use(helmet());
app.use(morgan("dev"));

app.use("/user", userRouter);

export default app;

