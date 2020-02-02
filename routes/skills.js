const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

router.get('/new', (req, res) => res.render('addSkill'));

router.post('/', async (req, res) => {
  const { skill } = req.body;
  try {
    const newSkill = new Skill(skill);
    await newSkill.save();
    res.redirect('/');
  } catch (err) {
    res.send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.render('skillsList', { skills });
  } catch (err) {
    res.send(err);
  }
});

router.get('/mindfulness', (req, res) => res.render('mindfulness'));
router.get('/emotion', (req, res) => res.render('emotion'));
router.get('/interpersonal', (req, res) => res.render('interpersonal'));
router.get('/distress', (req, res) => res.render('distress'));

module.exports = router;
