# CalculadoraImc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Project Description
CalculadoraImc is a web application for calculating Body Mass Index (BMI) and storing user records. The application is designed for university students, allowing registration of information such as date of birth, gender, academic program, weight, and height.

## Key Features
- Body Mass Index (BMI) calculation
- User data registration
- Support for multiple academic programs
- Gender classification
- MySQL database record storage

## Prerequisites
- Node.js (version 18 or higher)
- Angular CLI (version 18.1.4)
- MySQL Server

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Contributing
Contributions are welcome. Please read the contribution guidelines before submitting a pull request.

## License
