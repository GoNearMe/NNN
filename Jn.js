const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = form.elements.name.value;
  const age = form.elements.age.value;
  const email = form.elements.email.value;
  const interests = form.elements.interests.value;

  console.log("Імя:" + name)
  console.log("Вік:" + age)
  console.log("Пошта:" + email)
  console.log("Інтереси:" + interests)
});