import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  port:'3306',
  user: 'root',
  password: 'Jhonms78951@',
  database: 'sysFactura',
  waitForConnections: true,
  connectionLimit: 10,
});