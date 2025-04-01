const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',        // replace with your MySQL username
  password: 'password',    // replace with your MySQL password
  database: 'database_name'// replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// Route to display all products
app.get('/', (req, res) => {
  connection.query('SELECT id, name, price FROM products', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    let html = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Products List</title>
      </head>
      <body>
          <h1>Products</h1>
          <table border="1" cellpadding="10" cellspacing="0">
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
              </tr>
    `;
    
    results.forEach((product) => {
      html += `
              <tr>
                  <td>${product.id}</td>
                  <td>${product.name}</td>
                  <td>${product.price}</td>
                  <td>
                      <a href="/delete/${product.id}" onclick="return confirm('Are you sure you want to delete this product?');">
                          Delete
                      </a>
                  </td>
              </tr>
      `;
    });
    
    html += `
          </table>
      </body>
      </html>
    `;
    res.send(html);
  });
});

// Delete route to remove a product
app.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    // After deletion, redirect back to the home page
    res.redirect('/');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
