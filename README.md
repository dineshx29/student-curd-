# employee_crud


#-- 1. Create the database
CREATE DATABASE employee_crud;

$-- 2. Use the new database
USE employee_crud;

#-- 3. Create the employees table with your specified fields
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contact_no VARCHAR(20),
    city VARCHAR(100),
    state VARCHAR(100),
    pin_code VARCHAR(10),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


#Settings for a local XAMPP (phpMyAdmin/MySQL) setup. 
#Hostname: localhost
#Database: employee_crud
#Username: root
#Password: (leave empty by default in XAMPP, unless you set one)
#Driver: MySQL (or mysqli for PHP)
#Port: 3306


