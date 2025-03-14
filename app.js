const express = require('express');
const app = express();
const port = 3000;

const homeRouter = require('./home');
const studentsRouter = require('./students');
const coursesRouter = require('./courses');


app.use('/', homeRouter);
app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);


app.use((req, res, next) => {
  res.status(404).send("Page not found");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
