const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());


app.post('/categorias', async (req, res) => {
  const { nombre, descripcion } = req.body;
  const [result] = await pool.query(
    'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion]
  );
  const [rows] = await pool.query('SELECT * FROM categorias WHERE id = ?', [result.insertId]);
  res.status(201).json(rows[0]);
});

app.get('/categorias', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM categorias');
  res.json(rows);
});

app.get('/categorias/:id', async (req, res) => {
  const { id } = req.params;
  const [categoria] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
  if (categoria.length === 0) {
    return res.status(404).json({ mensaje: 'Categoria no encontrada' });
  }
  const [productos] = await pool.query('SELECT * FROM productos WHERE categoriaId = ?', [id]);
  res.json({ ...categoria[0], productos });
});

app.patch('/categorias/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  await pool.query(
    'UPDATE categorias SET nombre = ?, descripcion = ?, updatedAt = current_timestamp() WHERE id = ?',
    [nombre, descripcion, id]
  );
  const [rows] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
  res.json(rows[0]);
});

app.delete('/categorias/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM productos WHERE categoriaId = ?', [id]);
  await pool.query('DELETE FROM categorias WHERE id = ?', [id]);
  res.json({ mensaje: 'Categoria y sus productos eliminados' });
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
