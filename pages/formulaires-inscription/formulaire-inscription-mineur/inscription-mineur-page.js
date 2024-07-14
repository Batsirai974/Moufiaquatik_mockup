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
const boxChoix = document.querySelector('.choix-activites');


toggleListChoix.addEventListener('click', function(){
    multiSelect.classList.toggle('hidden');
});


// Sélectionner un seul choix pour le type sexe

// const sexeOption = document.querySelectorAll("#sex-option");

// sexeOption.forEach(checkOption => {
//     checkOption.addEventListener('change', () => {
//         sexeOption.forEach(otherOption => {
//             if (otherOption != checkOption) {
//                 otherOption.checked= false;
//             }
//         })
//     });
// })

// Sélectionner une seule activitée

// const options = document.querySelectorAll("#option1");

// options.forEach(option => {
//     option.addEventListener('change', () => {
//         options.forEach(otherOption => {
//             if (otherOption != option) {
//                 otherOption.checked= false;
//             }
//         })
//     });
// })

