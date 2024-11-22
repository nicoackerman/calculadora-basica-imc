import { Router } from "express";
import { RegistersController } from "./registers-controller.js";

export const registersRouter = Router()
registersRouter.post('/', RegistersController.createRegister)
registersRouter.get('/genders/id', RegistersController.getGenderID)
registersRouter.get('/programs/id', RegistersController.getProgramID)
registersRouter.get('/genders', RegistersController.getGenders)
registersRouter.get('/programs', RegistersController.getAcademicPrograms)
registersRouter.get('/bmi/average/adults', RegistersController.getAverageBmiByAge)
registersRouter.get('/bmi/average/programs', RegistersController.getAverageBmiByProgram)
registersRouter.get('/bmi/average/genders', RegistersController.getAverageBmiByGender)