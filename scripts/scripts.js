const aboutMebtn = document.querySelector('.me');
const aboutMe = document.querySelector('.main_info1');
const mainInfo = document.querySelector('.main_info');
const priceBtn = document.querySelector('.prices');
const price = document.querySelector('.price');
const connectBtn = document.querySelector('.contacts');
const connect = document.querySelector('.connect');
const rewiewBtn = document.querySelector('.responses');
const rewiew = document.querySelector('.rewiew');


function openAboutMe(main_info1, main_info, price, connect, rewiew) {
  main_info1.classList.add('opened');
  price.classList.remove('opened');
  main_info.classList.add('closed');
  connect.classList.remove('opened');
  rewiew.classList.remove('opened');
}

function openPrices(price, main_info, main_info1, connect, rewiew) {
  price.classList.add('opened');
  main_info.classList.add('closed');
  main_info1.classList.remove('opened');
  connect.classList.remove('opened');
  rewiew.classList.remove('opened');
}

function openContacts(connect, price, main_info, main_info1, rewiew) {
  connect.classList.add('opened');
  price.classList.remove('opened');
  main_info.classList.add('closed');
  main_info1.classList.remove('opened');
  rewiew.classList.remove('opened');
}

function openResponses(rewiew, connect, price, main_info, main_info1) {
  rewiew.classList.add('opened');
  connect.classList.remove('opened');
  price.classList.remove('opened');
  main_info.classList.add('closed');
  main_info1.classList.remove('opened');
}

aboutMebtn.addEventListener('click', () => openAboutMe(aboutMe, mainInfo, price, connect, rewiew));
priceBtn.addEventListener('click', () => openPrices(price, mainInfo, aboutMe, connect, rewiew));
connectBtn.addEventListener('click', () => openContacts(connect, price, mainInfo, aboutMe, rewiew));
rewiewBtn.addEventListener('click', () => openResponses(rewiew, connect, price, mainInfo, aboutMe));