import Clothes from "./Clothes.js";
import FileService from "./FileService.js";

class ClothesController {
    async create(req, res) {
        try {
            const file = req.files.picture
            let createdFile = FileService.saveFile(file)
            let clothes = { ...req.body,picture:createdFile }
            let createdClothes = await Clothes.create(clothes)
            res.status(201).json(createdClothes)

        } catch (err) {
            console.log(err.message)
            res.status(500).json(err)
        }
    }

    async getAll(req, res) {
        try {
            //Беру из базы данных
            //find - отдает все записи
            let clothes = await Clothes.find()
            res.status(200).json(clothes)

        } catch (err) {
            console.log(err.message)
            res.status(500).json(err)
        }
    }

    async delete(req, res) {
        try {
            //получаем id
            const id = req.params.id
            let clothesDel = await Clothes.findByIdAndDelete(id)
            res.status(200).json(clothesDel)
        } catch (err) {
            console.log(err.message)
            res.status(500).json(err)
        }

    }

    async update(req, res) {
        try {
            const id = req.body._id
            let clothes = await Clothes.findByIdAndUpdate(id, req.body, {new: true})
            res.status(200).json(clothes)
        } catch (err) {
            console.log(err.message)
            res.status(500).json(err)
        }

    }

    async getOne(req, res) {
        try {
            const id = req.params.id
            let getClothes = await Clothes.findById(id)
            res.status(200).json(getClothes)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }

    }

}

export default new ClothesController()
