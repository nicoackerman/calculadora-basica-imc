# Calculadora Imc
![FireShot Capture 004 - calculadora imc - localhost](https://github.com/user-attachments/assets/79542b78-2339-4285-8f6b-8f3b4d7afc6d)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Project Description
CalculadoraImc is a web application for calculating Body Mass Index (BMI) and storing user records. The application is designed for university students, allowing registration of information such as date of birth, gender, academic program, weight, and height.

## Key Features
- Body Mass Index (BMI) calculation
- User data registration using MySQL database (acadmic program, gender and birth date)
- Global Data Visualization by acadmic program, gender and birth date

## Prerequisites
- Node.js (version 18 or higher)
- Angular CLI (version 18.1.4)
- MySQL Server

## Available Scripts

In the project directory, you can run the following scripts:

### Development Server
```bash
ng serve
```
Runs the app in development mode. Open [http://localhost:4200](http://localhost:4200) to view it in the browser. The page will reload if you make edits.

### Build
```bash
ng build
```
Builds the app for production to the `dist/` directory. It correctly bundles Angular in production mode and optimizes the build for the best performance.

### Run Unit Tests
```bash
ng test
```
Launches the test runner in interactive watch mode using [Karma](https://karma-runner.github.io).

### Generate Code
```bash
ng generate component component-name
```
Generates a new component. You can also use:
- `ng generate directive|pipe|service|class|guard|interface|enum|module`

### End-to-End Testing
```bash
ng e2e
```
Runs end-to-end tests. Note: You need to first add a package that implements end-to-end testing capabilities.

### Additional CLI Commands
```bash
ng help
```
Shows all available Angular CLI commands and their usage.

## Database Setup
Create the database using the following SQL script:

```sql
CREATE DATABASE udi_imc;
USE udi_imc;

CREATE TABLE generos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    genero VARCHAR(50) NOT NULL
);

INSERT INTO generos (genero) VALUES ('Masculino'), ('Femenino');

CREATE TABLE programas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    programa VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO programas (programa) VALUES 
    ('Administración de Empresas'),
    ('Comunicación Social'),
    ('Criminalística'),
    ('Derecho'),
    ('Diseño Gráfico'),
    ('Diseño Industrial'),
    ('Ingeniería Civil'),
    ('Ingeniería Electrónica'),
    ('Ingeniería Industrial'),
    ('Ingeniería de Sistemas'),
    ('Negocios Internacionales'),
    ('Psicología'),
    ('Publicidad y Marketing Digital');

CREATE TABLE registros_imc (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_nacimiento DATE NOT NULL,
    genero_id INT NOT NULL,
    programa_id INT NOT NULL,
    peso_kg FLOAT NOT NULL,
    altura_m FLOAT NOT NULL,
    imc_kg_m2 FLOAT NOT NULL,
    fecha DATE NOT NULL,
    FOREIGN KEY (genero_id) REFERENCES generos(id),
    FOREIGN KEY (programa_id) REFERENCES programas(id)
);
```

## Installation

### Clone the Repository
```bash
git clone https://github.com/your-username/CalculadoraImc.git
cd CalculadoraImc
```

### Install Dependencies
```bash
npm install
```

## Configuration
1. Configure database connection in the project settings
2. Ensure MySQL server is running
3. Create the database using the provided SQL script

## Running the Application
```bash
ng start
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

## Contact
[nicoackerman]
[zabaladuran]
[RonaldFNova]
[jeferMLG]
