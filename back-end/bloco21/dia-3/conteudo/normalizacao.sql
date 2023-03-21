-- EXERCÍCIO DE FIXAÇÃO

CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE funcionario (
  funcionario_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nome VARCHAR(50) NOT NULL,
  sobrenome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  telefone VARCHAR(15),
  data_cadastro DATETIME NOT NULL
);

CREATE TABLE setor (
	setor_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE funcionario_setor (
	setor_id INT NOT NULL,
    funcionario_id INT NOT NULL,
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id),
    FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id)
);

INSERT INTO funcionario(nome, sobrenome, email, telefone, data_cadastro) VALUES
('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO setor (nome) VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO funcionario_setor(setor_id, funcionario_id) VALUES 
(1, 12),
(2, 12),
(3, 13),
(4, 14),
(2, 14),
(5, 15);

-- Deu esse erro abaixo! Acredito que porque eu coloquei as chaves primarias como AUTO_INCREMENT
-- PERGUNTAR DEPOIS!

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`normalization`.`funcionario_setor`, CONSTRAINT `funcionario_setor_ibfk_2` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario` (`funcionario_id`))

SELECT * FROM funcionario_setor;
