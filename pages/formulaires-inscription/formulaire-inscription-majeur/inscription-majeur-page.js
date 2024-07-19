// anime champ formulaire ---------------------

const inputs = document.querySelectorAll('.field-anime');

for (let i = 0; i < inputs.length; i++) {
    
    let field = inputs[i];
    // console.log(field);

    field.addEventListener('input', (e) => {

        if(e.target.value != ""){
            e.target.parentNode.classList.add('animation');
        } else if (e.target.value == "") {
            e.target.parentNode.classList.remove('animation');
        }

    })

}



// Toggle liste choix -------------------------------------

const toggleListChoix = document.querySelector('.toggle-options');
const multiSelect = document.querySelector('.multi-select');
const boxChoix = document.querySelector('.choix-activites');


toggleListChoix.addEventListener('click', function(){
    multiSelect.classList.toggle('hidden');
});



// affichage modale instruction cheque

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const modal = document.getElementById('myModal');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      // Deselect all other checkboxes
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
      // Show modal if .cheque-option is checked
      if (this.classList.contains('cheque-option')) {
        modal.style.display = 'block';
      } else {
        modal.style.display = 'none';
      }
    } else {
      // If the checkbox is unchecked, hide the modal
      modal.style.display = 'none';
    }
  });
});