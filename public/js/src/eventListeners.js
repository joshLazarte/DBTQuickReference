import ui from './uiElements';
import { toggleModal, writeModal, showNextSkill, showPrevSkill } from './modal';

const loadEventListners = () => {
  ui.showSkillsBtn.forEach(btn => {
    const { skillslist } = btn.dataset;
    btn.addEventListener('click', e => {
      e.preventDefault();
      toggleModal();
      writeModal(skillslist);
    });
  });

  ui.backdrop.addEventListener('click', () => toggleModal());

  ui.modalPrevArrow.addEventListener('click', () => showPrevSkill());

  ui.modalNextArrow.addEventListener('click', () => showNextSkill());
};

export default loadEventListners;
