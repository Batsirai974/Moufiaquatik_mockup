// 

const activiteA = document.querySelector('.activite-A');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const tarifElement = document.getElementById('tarif-value');

activiteA.addEventListener('click', (e) => {
  if (e.target.type === 'checkbox' && e.target.id !== 'option5') {
    const checkboxes = activiteA.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox !== e.target) {
        checkbox.checked = false;
      }
    });
  }
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    let tarif = 0;
    let selectedCheckboxes = [];
    let activiteACount = 0;
    let activiteBCount = 0;
    let option5Selected = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedCheckboxes.push(checkbox);
        if (checkbox.parentNode.parentNode.classList.contains('activite-A')) {
          activiteACount++;
        } else {
          activiteBCount++;
        }
        if (checkbox.id === 'option5') {
          option5Selected = true;
        }
      }
    });

    const totalSelected = selectedCheckboxes.length;

    if (totalSelected === 1) {
      tarif = parseInt(selectedCheckboxes[0].dataset.tarif);
    } else if (totalSelected === 2) {
      if (option5Selected) {
        tarif = selectedCheckboxes.reduce((sum, checkbox) => sum + parseInt(checkbox.dataset.tarif), 0);
      } else {
        tarif = 350;
      }
    } else if (totalSelected === 3) {
      if (option5Selected) {
        tarif = 480;
      } else {
        tarif = 580;
      }
    } else if (totalSelected === 4 && activiteACount === 1 && activiteBCount === 3) {
      tarif = 710;
    }

    tarifElement.textContent = `${tarif} €`;
  });
});
