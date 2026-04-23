// A small Express app containing intentional vulnerabilities for CodeQL to find.
// This simulates code written by a junior developer in a rush.

const express = require('express');
const mysql = require('mysql');
const app = express();

// Hardcoded Secret (CodeQL: js/hardcoded-credentials)
const dbPassword = "super_secret_password_123!"; 
const gitHubToken = "ghp_1234567890abcdefghijklmnopqrstuvwxyz"; // Fake token for Secret Scanning

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: dbPassword,
  database: 'ecommerce'
});

app.get('/api/user', (req, res) => {
  const userId = req.query.id;
  
  // SQL Injection (CodeQL: js/sql-injection)
  const query = "SELECT * FROM users WHERE id = " + userId;
  
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/api/calculator', (req, res) => {
  const expression = req.query.expr;
  
  // Insecure eval usage (CodeQL: js/insecure-eval)
  try {
    const result = eval(expression); 
    res.send(`Result: ${result}`);
  } catch (err) {
    res.status(500).send("Invalid expression");
  }
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
