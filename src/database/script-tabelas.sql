-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
drop database SafeTrail;
CREATE DATABASE SafeTrail;

USE SafeTrail;

CREATE TABLE Marca(
idMarca int primary key auto_increment ,
nomeMarca varchar(45)
);

insert into Marca values
(default,'Honda'),
(default,'BMW'),
(default,'KTM'),
(default,'Yamaha'),
(default,'Kawasaki'),
(default,'Suzuki')
;

CREATE TABLE tipo_trilha(
idTrilha INT PRIMARY KEY AUTO_INCREMENT,
Tipos VARCHAR (45)
);
CREATE TABLE experiencia_usuario (
idExperiencia INT PRIMARY KEY AUTO_INCREMENT,
experiencia VARCHAR (45)
);
CREATE TABLE Questionário (
  idQuestionário INT PRIMARY KEY auto_increment,
  experiencia VARCHAR(45) NOT NULL ,
  tipo_de_trilha VARCHAR(45) NOT NULL,
  costume VARCHAR(45)NOT NULL ,
  equipamento_mais_importante VARCHAR(100) NOT NULL
);
select * from Questionário;	

SELECT experiencia, COUNT(*) AS quantidade
FROM Questionário
GROUP BY experiencia;

CREATE TABLE usuario (
id int primary key auto_increment,
nome varchar(30) not null,
email varchar(50) not null,
senha varchar(30) not null,
fkMarca int not null,
constraint fkMarcasUsuario foreign key (fkMarca) references Marca(idMarca),
fkQuestionario int,
constraint fkQuestionario_Usuario foreign key (fkQuestionario) references Questionário(idQuestionário)
);	
INSERT INTO usuario (nome, email, senha, fkMarca) VALUES ('João Silva', 'joao.silva@example.com', 'senha123', 1);
INSERT INTO usuario (nome, email, senha, fkMarca) VALUES ('Maria Oliveira', 'maria.oliveira@example.com', 'senha456', 2);
INSERT INTO usuario (nome, email, senha, fkMarca) VALUES ('Carlos Pereira', 'carlos.pereira@example.com', 'senha789', 3);
INSERT INTO usuario (nome, email, senha, fkMarca) VALUES ('Ana Souza', 'ana.souza@example.com', 'senha321', 4);
INSERT INTO usuario (nome, email, senha, fkMarca) VALUES ('Pedro Lima', 'pedro.lima@example.com', 'senha654', 5);
INSERT INTO usuario (nome, email, senha, fkMarca) VALUES ('Juliana Ferreira', 'juliana.ferreira@example.com', 'senha987', 6);
INSERT INTO usuario (nome, email, senha, fkMarca) VALUES ('Fernanda Rocha', 'fernanda.rocha@example.com', 'senha222', 1);
INSERT INTO usuario (nome, email, senha, fkMarca) VALUES ('Lucas Mendes', 'lucas.mendes@example.com', 'senha333', 2);
INSERT INTO usuario (nome, email, senha, fkMarca) VALUES ('Camila Santos', 'camila.santos@example.com', 'senha444', 3);
select * from usuario;


/* Select para mostrar o grafico de experiencia*/
SELECT experiencia, COUNT(*) AS quantidade
FROM Questionário
GROUP BY experiencia;
/* Select para mostrar o grafico de marcas*/

SELECT Marca.nomeMarca AS Marca, COUNT(*) AS qtd
FROM Usuario
JOIN Marca ON Usuario.fkMarca = Marca.idMarca
GROUP BY Marca.nomeMarca;

select 'Honda' as Marca,count(*) as qtd from Usuario where fkMarca=1
union all
select 'BMW' as Marca,count(*) as qtd from Usuario where fkMarca=2
union all
select 'KTM' as Marca,count(*) as qtd from Usuario where fkMarca=3
union all
select 'Yamaha' as Marca,count(*) as qtd from Usuario where fkMarca=4
union all
select 'Kawasaki' as Marca,count(*) as qtd from Usuario where fkMarca=5
union all
select 'Suzuki' as Marca,count(*) as qtd from Usuario where fkMarca=6;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);


