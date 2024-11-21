import mysql from 'mysql2/promise';
import 'dotenv/config'
import { ErrorTracker } from './error-tracker.js';
// Create the connection to database
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ADMIN_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

export class RegistersService {
    static async post({fecha_nacimiento, genero_id, programa_id, peso_kg, altura_m, imc_kg_m2}) {
        try { 
            const [data, fields] = await connection.query(
                'INSERT INTO registros_imc (fecha_nacimiento, genero_id, programa_id, peso_kg, altura_m, imc_kg_m2, fecha) VALUES (?, ?, ?, ?, ?, ?, NOW())',
                [fecha_nacimiento, genero_id, programa_id, peso_kg, altura_m, imc_kg_m2]
            );
            return {id: data.insertId, fecha_nacimiento, genero_id, programa_id, peso_kg, altura_m, imc_kg_m2}
        }
        catch (error) {
            ErrorTracker.Log(error, 'RegistersService.post');
            return {}
        }
    }
    static async getAverageBmiAdults() {
        try { 
            const [data, fields] = await connection.query('SELECT * FROM vista_imc_promedio_por_adultos');
            return data
        }
        catch (error) {
            ErrorTracker.Log(error, 'RegistersService.get');
            return {}
        }
    }
    static async getAverageBmiByGender() {
        try { 
            const [data, fields] = await connection.query('SELECT * FROM vista_imc_promedio_por_genero');
            return data
        }
        catch (error) {
            ErrorTracker.Log(error, 'getAverageBmiByGender.get');
            return {}
        }
    }
    static async getAverageBimByProgram() {
        try { 
            const [data, fields] = await connection.query('SELECT * FROM vista_imc_promedio_por_programa');
            return data
        }
        catch (error) {
            ErrorTracker.Log(error, 'getAverageBimByProgram.get');
            return {}
        }
    }
    static async getGenders() {
        try { 
            const [data, fields] = await connection.query('SELECT genero FROM generos');
            return data
        }
        catch (error) {
            ErrorTracker.Log(error, 'getGenders.get');
            return {}
        }
    }
    static async getAcademicPrograms () {
        try { 
            const [data, fields] = await connection.query('SELECT programa FROM programas');
            return data
        }
        catch (error) {
            ErrorTracker.Log(error, 'getAcademicPrograms.get');
            return {}
        }
    }
        static async getProgramID (programName) {
        try { 
            const [data, fields] = await connection.query('SELECT id FROM programas where programa = ?',[programName]);
            return data
        }
        catch (error) {
            ErrorTracker.Log(error, 'getProgramID.get');
            return {}
        }
    }
    static async getGenderID (genderName) {
        console.log(genderName)
        try { 
            const [data, fields] = await connection.query('SELECT id FROM generos where genero = ?',[genderName]);
            return data
        }
        catch (error) {
            ErrorTracker.Log(error, 'getGenderID.get');
            return {}
        }
    }
}