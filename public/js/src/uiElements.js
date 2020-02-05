const _ = id => document.getElementById(id);

const ui = Object.freeze({
    showSkillsBtn: document.querySelectorAll('.showSkillsBtn'),
    modal: _('modal'),
    backdrop: _('backdrop'),
    modalTitle: _('modalTitle'),
    modalContent: _('modalContent'),
    modalPrevArrow: _('modalPrev'),
    modalNextArrow: _('modalNext')
});

export default ui;
