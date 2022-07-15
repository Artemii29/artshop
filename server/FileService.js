import {v4} from 'uuid'
import path from 'path'

class FileService {
    saveFile(file) {
        try {
            //конкатенация
            let fileName = v4() + '.jpg'
            let filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return fileName;
        } catch (err) {
            console.log(err.message)
        }

    }
}
export default new FileService()