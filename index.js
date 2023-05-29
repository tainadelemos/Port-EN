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
  const intro = document.querySelector('#intro');

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


function changeTheme() {
}
  // Define a função que será chamada após 7 segundos
  const hideIntro = function() {
    intro.style.display = 'none';
  };

  // Chama a função após 7 segundos
  setTimeout(hideIntro, 7000);
});