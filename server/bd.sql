create database belleEscrita;
use belleEscrita;
create table usuarios(
	id int auto_increment primary key,
    nome varchar(255) not null,
    apelido varchar(50) not null,
    email varchar(300) not null,
    senha varchar(50) not null
);
create table redacoes(
	idRedacao int auto_increment primary key,
	tema varchar(500) not null,
    introducao varchar(3000) not null,
    desenvolvimento1 varchar(3000) not null,
    desenvolvimento2 varchar(3000) not null,
    conclusao varchar(3000) not null,
    idAutorRedacao int not null,
    statusRed varchar(50), 
    nota int,
    emailAutor varchar(300) not null
);