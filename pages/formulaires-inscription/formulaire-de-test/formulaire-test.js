// anime champ formulaire ---------------------

const inputs = document.querySelectorAll('.field-anime');

for (let i = 0; i < inputs.length; i++) {
    
    let field = inputs[i];
    console.log(field);

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


toggleListChoix.addEventListener('click', function(){
    multiSelect.classList.toggle('hidden');
});

