CREATE DATABASE SysFactura;
USE SysFactura;

CREATE TABLE Usuarios(
userID INT AUTO_INCREMENT PRIMARY KEY NOT NULL, 
nombre VARCHAR(100),
apellido VARCHAR(150),
correo NVARCHAR(150) NOT NULL,
clave NVARCHAR(100) NOT NULL,
edad INT,
direccion VARCHAR(200) NOT NULL, 
provincia VARCHAR(80) NOT NULL,
ciudad VARCHAR(100) 
);

CREATE TABLE Sucursales(
sucursalID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombre VARCHAR(100),
direccion VARCHAR(200),
provincia VARCHAR(80),
ciudad VARCHAR(100),
pais VARCHAR(70)
);

CREATE TABLE Productos(
productoID INT AUTO_INCREMENT PRIMARY KEY, 
sucursalID INT,
nombre VARCHAR(150),
precio DOUBLE, 
descripcion VARCHAR(100), 
CONSTRAINT FK_Sucursal FOREIGN KEY (sucursalID) REFERENCES Sucursales(sucursalID)
);


CREATE TABLE Factura(
facturaID INT AUTO_INCREMENT PRIMARY KEY,
productoID INT,
direccion VARCHAR(200),
fecha NVARCHAR(80),
iva DOUBLE,
totalNeto DOUBLE,
total DOUBLE,
CONSTRAINT FK_Productos FOREIGN KEY (productoID) REFERENCES Productos(productoID)
);

SELECT * FROM Usuarios;
SELECT * FROM Sucursales;
SELECT * FROM Productos;
SELECT * FROM Factura;

