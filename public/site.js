function darkMode() {
  // toggle to dark mode
  const dkButton = document.querySelector('nav > button');
  document.body.classList.toggle('dark');

  // change dark mode button
  if (body.classList.contains('dark')) {
    dkButton.innerHTML = '☀️';
  } else {
    dkButton.innerHTML = '🌙';
  }
}
