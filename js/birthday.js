
const dateInput = document.querySelector('#date-input');
const pElement = document.querySelector('#p-element');

dateInput.addEventListener('change', () => {
  const birthDate = new Date(dateInput.value);
  const currentDate = new Date();
  const newDate = new Date(currentDate - birthDate);

  const years = newDate.getFullYear() - 1970;
  const months = newDate.getMonth();
  const days = newDate.getDate() - 1;

  pElement.innerHTML = `You are ${years} years, ${months} months and ${days} days old`;
});