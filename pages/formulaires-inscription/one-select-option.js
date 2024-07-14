// Sélectionner un seul choix pour le type sexe
const sexeOption = document.querySelectorAll("#sex-option");
// console.log(sexeOption);

sexeOption.forEach(checkOption => {
    checkOption.addEventListener('change', () => {
        sexeOption.forEach(otherOption => {
            if (otherOption != checkOption) {
                otherOption.checked= false;
            }
        })
    });
})

// Sélectionner une seule activitée

const options = document.querySelectorAll("#option1");

options.forEach(option => {
    option.addEventListener('change', () => {
        options.forEach(otherOption => {
            if (otherOption != option) {
                otherOption.checked= false;
            }
        })
    });
})