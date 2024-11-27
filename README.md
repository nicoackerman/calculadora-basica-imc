# Calculadora Imc
![FireShot Capture 004 - calculadora imc - localhost](https://github.com/user-attachments/assets/79542b78-2339-4285-8f6b-8f3b4d7afc6d)
![FireShot Capture 006 - calculadora imc - localhost](https://github.com/user-attachments/assets/dfa1b79b-e9ab-466e-a913-9e1d2d9b93fe)

CalculadoraImc is a web open-source application for calculating Body Mass Index (BMI) and storing user records. The application is designed for university students, allowing registration of information such as date of birth, gender, academic program, weight, and height.

## Key Features
- Body Mass Index (BMI) calculation
- User data registration using MySQL database (acadmic program, gender and birth date)
- Global Data Visualization by acadmic program, gender and birth date

## Prerequisites
- Node.js (version 18 or higher)
- Angular CLI (version 18.1.4)
- MySQL Server

## Database used
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

## Contact Us
[nicoackerman](https://github.com/nicoackerman)
[zabaladuran](https://github.com/zabaladuran)
[RonaldFNova](https://github.com/RonaldFNova)
[jeferMLG](https://github.com/jeferMLG)
