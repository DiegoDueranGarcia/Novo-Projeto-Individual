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
  trilha_preferida VARCHAR(45) ,
  grau_de_importancia VARCHAR(45),
  equipamento_mais_importante VARCHAR(100)
);
SELECT grau_de_importancia, COUNT(*) AS quantidade
FROM Questionário
GROUP BY Questionário.grau_de_importancia ORDER BY quantidade;
insert into Questionário values 
(default,'Iniciante',' Leve e fácil',' Alta Importância','Capacete'),
(default,'Intermediário',' Moderada',' Média Importância','Luvas'),
(default,'Avançado','Desafiadora',' Baixa Importância',' Joelheiras e cotoveleiras'),
(default,'Iniciante','Desafiadora',' Alta Importância','Botas');


SELECT grau_de_importancia, COUNT(*) AS quantidade_importancia
FROM Questionário
GROUP BY grau_de_importancia;

SELECT experiencia, COUNT(*) AS quantidade
FROM Questionário
GROUP BY experiencia;

	



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
INSERT INTO usuario (nome, email, senha, fkMarca) VALUES ('Diego', 'diego.garcia@sptech.school', '12345', 2);
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

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);