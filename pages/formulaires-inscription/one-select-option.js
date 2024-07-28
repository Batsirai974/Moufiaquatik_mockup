// Sélectionner un seul choix pour le type sexe
const sexeOption = document.querySelectorAll(".sex-option");
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

// Sélectionner une seule date

document.addEventListener('DOMContentLoaded', () => {
    const checkboxesDate = document.querySelectorAll('.date-option');

    checkboxesDate.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                checkboxesDate.forEach((otherCheckbox) => {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
});


// Afficher montant cotisation

// const multiSelect2 = document.querySelector('.multi-select');
// const checkboxes = multiSelect2.querySelectorAll('input[type="checkbox"]');
// let tarifElement = document.getElementById('tarif-value');

// Tarifs pour chaque case à cocher
// const tarifs = {
//     option1: 230,
//     option2: 230,
//     option3: 230,
//     option5: 130  //option spécial Aqua-Bike
// };

// Tarifs pour les combinaisons de case a  cocher
// const comboTarifs = {
    // 2: 350,  //Tarif si deux case a cocher hors aqua-bike sont cocher
    // 3: 580   // Tarif si les trois case a cocher sont sélectionner
// };

// checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', () => {
//         let tarif = 0;
//         const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
//         const checkedOptions = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id);

        // Appliquer les tarifs individuels pour chaque case à cocher
    // checkedOptions.forEach(option => {
    //     if (option === 'option4') {
    //       tarif += parseInt(Array.from(checkboxes).find(checkbox => checkbox.id === 'option4').dataset.tarif);
    //     } else {
    //       tarif += tarifs[option];
    //     }
    //   });
  
      // Appliquer les tarifs pour les combinaisons de case à cocher
//       if (checkedCount === 2 && !checkedOptions.includes('option4')) {
//         tarif = comboTarifs[2];
//       } else if (checkedCount === 3 && !checkedOptions.includes('option4')) {
//           tarif = comboTarifs[3];
//         }
        
//         tarifElement.textContent = `${tarif} €`
//     });
// });





// Sélectionner un seul mode paiement 
const optionsPaiement = document.querySelectorAll(".option-paiement");

optionsPaiement.forEach(option => {
    option.addEventListener('change', () => {
        optionsPaiement.forEach(otherOption => {
            if (otherOption != option) {
                otherOption.checked = false;
            }
        });
    });
})








// archive :

// afficher montant cotisation

// Méthode 1  --------------------------------------------------
// const multiSelect2 = document.querySelector('.multi-select');
// const checkboxes = multiSelect2.querySelectorAll('input[type="checkbox"]');
// const tarifElement = document.getElementById('tarif-value');

// checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', () => {
//         const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
//         let tarif = 0;

//         switch (checkedCount) {
//             case 1:
//                 tarif = 230;
//                 break;
//             case 2:
//                 tarif = 350;
//                 break;
//             case 3:
//                 tarif = 580;
//                 break;
//             case 4:
//                 tarif = 700;
//                 break;
//             default:
//                 tarif = 0;
//         }

//         tarifElement.textContent = `${tarif} €`;
//     });
// });

// méthode 2  ---------------------------------------------------
// const multiSelect2 = document.querySelector('.multi-select');
// const checkboxes = multiSelect2.querySelectorAll('input[type="checkbox"]');
// let tarifElement = document.getElementById('tarif-value');

// checkboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', () => {
//         let tarif = 0;
//         checkboxes.forEach(checkbox => {
//             if (checkbox.checked) {
//                 tarif += parseInt(checkbox.getAttribute('data-tarif'));
//             }
//         });
//         tarifElement.textContent = `${tarif} €`;
//     });
// });




 //  Appliquer tarif spécial Aqua-bike si elle est sélectionner
        // if (checkedOptions.includes('option4')) {
        //     tarif += parseInt(checkboxes.find(checkbox => checkbox.id === 'option4').dataset.tarif);
        // } 

        // Appliquer les tarifs pour les combinaisons de case a cocher
        // if (checkedCount === 2) {
        //     tarif += comboTarifs[2];
        // }
        // else if (checkedCount === 3) {
        //     tarif += comboTarifs[3];
        // }
        // else {
            // Appliquer les tarif individuel pour chaque case a cocher
        //     checkedOptions.forEach(option => {
        //         tarif += tarifs[option];
        //     });
        // }