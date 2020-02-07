import ui from './uiElements';
import masterSkillsList from './skills';
import _gs from './globalState';

const toggleModal = () => {
  ui.modal.classList.toggle('modal--open');
  ui.backdrop.classList.toggle('backdrop--open');
  ui.modalTitle.textContent = '';
  ui.modalContent.innerHTML = '';
  _gs.currentSkillsList = '';
  _gs.currentSkillIndex = 0;
};

const writeModal = skills => {
  _gs.currentSkillsList = skills;
  _gs.currentSkillIndex = 0;
  const list = masterSkillsList[skills];
  ui.modalTitle.textContent = list[_gs.currentSkillIndex].title;
  ui.modalContent.innerHTML = list[_gs.currentSkillIndex].content;
};

const showNextSkill = () => {
  const list = masterSkillsList[_gs.currentSkillsList];

  if (_gs.currentSkillIndex === list.length - 1) {
    _gs.currentSkillIndex = 0;
  } else {
    _gs.currentSkillIndex += 1;
  }

  ui.modalTitle.textContent = list[_gs.currentSkillIndex].title;
  ui.modalContent.innerHTML = list[_gs.currentSkillIndex].content;
};

const showPrevSkill = () => {
  const list = masterSkillsList[_gs.currentSkillsList];

  if (_gs.currentSkillIndex === 0) {
    _gs.currentSkillIndex = list.length - 1;
  } else {
    _gs.currentSkillIndex -= 1;
  }

  ui.modalTitle.textContent = list[_gs.currentSkillIndex].title;
  ui.modalContent.innerHTML = list[_gs.currentSkillIndex].content;
};

export { toggleModal, writeModal, showNextSkill, showPrevSkill };
