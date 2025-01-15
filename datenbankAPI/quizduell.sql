drop database if EXISTS ZeiterfassungDB;
CREATE DATABASE ZeiterfassungDB;
use ZeiterfassungDB;

drop TABLE if EXISTS user;
CREATE TABLE user(

    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    vorname varchar(50),
    nachname varchar(50),    
    email varchar(50),
    abteilung varchar(50)
);

insert into user (vorname, nachname, email, abteilung) values ('Max', 'Mustermann', 'max@musterman', 'IT');
