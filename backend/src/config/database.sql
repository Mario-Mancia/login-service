-- A basic database for login-app, specially developed for MySQL;

DROP DATABASE IF EXISTS login-app;

CREATE DATABASE login-app;

USE login-app;

CREATE TABLE `users` (
    `id` INT AUTO_INCREMENT,
    `username` VARCHAR (40) NOT NULL UNIQUE,
    `email` VARCHAR (100) NOT NULL UNIQUE,
    `passwordHash` VARCHAR (128) NOT NULL,
    `birthDate` DATE NOT NULL,
    `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY(`id`)
);