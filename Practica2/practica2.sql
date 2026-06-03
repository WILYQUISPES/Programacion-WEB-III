CREATE DATABASE IF NOT EXISTS practica2;
USE practica2;

CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(255),
  createdAt DATETIME NOT NULL DEFAULT current_timestamp(),
  updatedAt DATETIME NOT NULL DEFAULT current_timestamp()
);

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2),
  categoriaId INT,
  createdAt DATETIME NOT NULL DEFAULT current_timestamp(),
  updatedAt DATETIME NOT NULL DEFAULT current_timestamp(),
  FOREIGN KEY (categoriaId) REFERENCES categorias(id)
);

INSERT INTO categorias (nombre, descripcion) VALUES
('Electronica', 'Dispositivos electronicos y gadgets'),
('Oficina', 'Material y accesorios de oficina');

INSERT INTO productos (nombre, precio, categoriaId) VALUES
('Teclado', 120.00, 1),
('Mouse', 80.00, 1),
('Cuaderno', 15.00, 2);
