const submit = document.getElementById('submit');
const thankYou = document.getElementById('thank-you');
const rate = document.getElementById('rate');
const buttons = document.querySelectorAll('.btn');
const rating = document.getElementById('rating');

submit.addEventListener('click', () => {
  thankYou.classList.remove('hidden');
  rate.classList.add('hidden');
});

buttons.forEach((btn) => {
  btn.addEventListener('click', () => (rating.textContent = btn.textContent));
});
