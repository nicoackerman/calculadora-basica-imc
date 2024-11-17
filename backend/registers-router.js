import { Router } from "express";
import { RegistersController } from "./registers-controller.js";

export const registersRouter = Router()
registersRouter.post('/', RegistersController.createRegister)
registersRouter.get('/genders', RegistersController.getGenders)
registersRouter.get('/programs', RegistersController.getAcademicPrograms)
registersRouter.get('/bmi/average/adults', RegistersController.getAverageBmiByAge)
registersRouter.get('/bmi/average/program', RegistersController.getAverageBmiByProgram)
registersRouter.get('/bmi/average/gender', RegistersController.getAverageBmiByGender)