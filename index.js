// Seleciona o botão de "Alterar Cores"
const botao = document.querySelector('#alterar-cores');
// Adiciona um listener de evento para quando o botão for clicado
botao.addEventListener('click', function() {
  // Seleciona todos os elementos que você deseja alterar a cor
  const body = document.querySelector('body');
  const p = document.querySelector('p');
  const looking = document.querySelector('#looking')
  const about = document.querySelector('#About');
  const portfolio = document.querySelector('#Portfolio');
  const contact = document.querySelector('#Contact');
  const walking = document.querySelector('#walking');
  const home = document.querySelector('#home');
  const banner = document.querySelector('#welcome');
  const pc = document.querySelector('#pc');

  // Altera as cores dos elementos
  body.style.backgroundColor = 'white';
  p.style.color = 'black';
  looking.classList.remove('hidden');
  about.classList.remove('hidden');
  portfolio.classList.remove('hidden');
  contact.classList.remove('hidden');
  walking.classList.add('hidden');
  botao.style.color = 'transparent';
  botao.style.backgroundColor = 'transparent';
  botao.style.borderColor = 'transparent';
  home.classList.add('hidden');
banner.classList.remove('hidden');
pc.classList.remove('hidden');
});
function changeTheme() {
}
