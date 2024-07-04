const Joi = require("joi");
const express = require("express");
const router = express.Router();

const students = [
  { id: 1, name: "Sachin" },
  { id: 2, name: "Virat" },
  { id: 3, name: "Pratyush" },
  { id: 4, name: "Rohit" },
  { id: 5, name: "Ravindra" },
];

// Validation schema
const studentSchema = Joi.object({
  name: Joi.string().min(3).required(),
});

// GET all students
router.get("/", (req, res) => {
  res.send(students);
});

// GET student by ID
router.get("/:id", (req, res) => {
  const student = students.find((c) => c.id == req.params.id);
  if (!student) return res.status(404).send(`ID: ${req.params.id} not found!`);
  res.send(student);
});

// POST new student
router.post("/", (req, res) => {
  const { error } = studentSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const student = { id: students.length + 1, name: req.body.name };
  students.push(student);
  res.send(student);
});

// PUT update student by ID
router.put("/:id", (req, res) => {
  const student = students.find((c) => c.id == req.params.id);
  if (!student) return res.status(404).send(`ID: ${req.params.id} not found!`);

  const { error } = studentSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  student.name = req.body.name;
  res.send(student);
});

// PATCH partial update student by ID
router.patch("/:id", (req, res) => {
  const student = students.find((c) => c.id == req.params.id);
  if (!student) return res.status(404).send(`ID: ${req.params.id} not found!`);

  const schema = Joi.object({
    name: Joi.string().min(2), // partial patch allows length of 2
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (req.body.name) student.name = req.body.name;
  res.send(student);
});

// DELETE student by ID
router.delete("/:id", (req, res) => {
  const student = students.find((c) => c.id == req.params.id);
  if (!student) return res.status(404).send(`ID: ${req.params.id} not found!`);

  const index = students.indexOf(student);
  students.splice(index, 1);
  res.send(student);
});

module.exports = router;

//npm init -y
//npm i express joi
//node index.js