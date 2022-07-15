import {Router} from "express";
import ClothesController from "./ClothesController.js";
//get - получение информации
//post - шифрует данные, обычно используется
//put - запрос, который меняют информацию
//delete - запрос, на удаление
const router = new Router()
router.get('/clothes',ClothesController.getAll)
router.delete('/clothes/:id',ClothesController.delete)
router.put('/clothes',ClothesController.update)
router.post('/clothes', ClothesController.create)
router.get('/clothes/:id',ClothesController.getOne)
//export - функция которая объялвяет переменную открытой для импорта
export default router