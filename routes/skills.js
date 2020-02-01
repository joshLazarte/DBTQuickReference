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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const skill = await Skill.findById(id);
    !skill && res.send('No Skill Found');
    res.render('skill', { skill });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
