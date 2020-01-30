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

router.get('/:letter', async (req, res) => {
  const { letter } = req.params;

  if (letter.length > 1) res.send('Only one letter');

  try {
    const skills = Skill.find({
      title: { $regex: '^' + letter },
      $options: 'i'
    });
    res.render('skillsList', { skills });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
