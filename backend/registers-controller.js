// Get the client
import { validateRegister } from './schemas.js';
import { RegistersService } from './services.js';



export class RegistersController {
    static async createRegister(req, res) {
        const validation = validateRegister(req.body);
        if (validation.success) {
            const result = await RegistersService.post(validation.data);
            res.status(200).json(result)
        } 
        else { 
            console.log({ error: validation.error.issues })
            res.status(400).json({ success: validation.success });
        } 
    }
    static async getAverageBmiByAge(req, res) {
        const result = await RegistersService.getAverageBmiAdults();
        res.status(200).json(result)
    }
    static async getAverageBmiByProgram(req, res) {
        const result = await RegistersService.getAverageBimByProgram();
        res.status(200).json(result)
    }   
    static async getAverageBmiByGender(req, res) {
        const result = await RegistersService.getAverageBmiByGender();
        res.status(200).json(result)
    }
    static async getGenders(req, res) {
        const result = await RegistersService.getGenders();
        res.status(200).json(result)
    }
    static async getAcademicPrograms(req, res) {
        const result = await RegistersService.getAcademicPrograms();
        res.status(200).json(result)
    }
}