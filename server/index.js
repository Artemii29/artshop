import express from "express";
import mongoose from 'mongoose'
import router from "./router.js";
import fileupload from "express-fileupload"
import cors from 'cors';

let dbConnection = 'mongodb+srv://Artemii:Artemii@cluster0.ouxb6.mongodb.net/?retryWrites=true&w=majority'
//Вызываем функцию которая создает приложения
const app = express();
//подключаем модули
app.use(express.json());
app.use(cors());
app.use(fileupload({}))
app.use(express.static('static'));

//подключил свой роутер
app.use('/router',router)
app.get('/', (req, res) => {
    res.status(200).json('express working')
})
//postman - программа для отправки http запросов
//postman не свыязан с базой дпнных

async function startApp() {
    try {
        await mongoose.connect(dbConnection)
        app.listen(5100, () => console.log('Сервер запустился на порту 5100'))
    } catch (e) {
        console.log(e)
    }
}

startApp();