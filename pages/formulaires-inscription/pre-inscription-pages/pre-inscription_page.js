

const form = document.querySelector('.form-pre-inscription');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const adherent = document.querySelector('input[name="adherent"]:checked').value;
  const majeur = document.querySelector('input[name="majeur"]:checked').value;

  // Afficher les résultats dans la console
  console.log('Étiez-vous adhérent à la saison dernière ?', adherent);
  console.log('Avez-vous plus de 18 ans ?', majeur);

  if(adherent === 'non' && majeur === 'non') {
    window.location.href = '../pages/formulaires-inscription/formulaire-de-test/formulaire-test.html';
    console.log("Affiche formulaire de test");
  }
  else if (adherent === 'oui' && majeur === 'non'){
    window.location.href = '../pages/formulaires-inscription/formulaire-inscription-mineur/inscription-mineur-page.html';
    console.log("Affiche formulaire inscription jeune");
  }
  else {
    window.location.href = '../formulaire-inscription-majeur/inscription-majeur-page.html';
    console.log("Affiche formulaire inscription adultes");
  }
 
});
