const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = 'tasks.json';

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/tasks', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(DATA_FILE));
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    completed: false
  };
  tasks.push(newTask);
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
  res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
  let tasks = JSON.parse(fs.readFileSync(DATA_FILE));
  tasks = tasks.filter(t => t.id != req.params.id);
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
  res.redirect('/');
});

app.get('/toggle/:id', (req, res) => {
  let tasks = JSON.parse(fs.readFileSync(DATA_FILE));
  tasks = tasks.map(t => {
    if (t.id == req.params.id) t.completed = !t.completed;
    return t;
  });
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
