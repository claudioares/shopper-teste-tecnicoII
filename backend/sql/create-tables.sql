-- Criando a tabela Driver
CREATE TABLE Driver (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    avalicao TEXT,
    car VARCHAR(255),
    rating NUMERIC(3, 2),
    ratePerKm NUMERIC(10, 2) NOT NULL,
    minKm INT NOT NULL
);

-- Criando a tabela Ride
CREATE TABLE Ride (
    id SERIAL PRIMARY KEY,
    customer_id VARCHAR(255) NOT NULL,
    origin VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    distance NUMERIC(10, 2) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    value NUMERIC(10, 2) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    driver_id INT NOT NULL,
    CONSTRAINT fk_driver FOREIGN KEY (driver_id) REFERENCES Driver (id)
);

-- Inserindo dados iniciais na tabela Driver
INSERT INTO Driver (id, name, description, avalicao, car, rating, ratePerKm, minKm) VALUES
(1, 'Homer Simpson', 'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).', 'Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.', 'Plymouth Valiant 1973 rosa e enferrujado', 2.0, 2.5, 1),
(2, 'Dominic Toretto', 'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.', 'Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!', 'Dodge Charger R/T 1970 modificado', 4.0, 5.0, 5),
(3, 'James Bond', 'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.', 'Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.', 'Aston Martin DB5 clássico', 5.0, 10.0, 10);
