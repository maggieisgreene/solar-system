import $ from 'jquery';
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/planets';
import './mainview.scss';

const printMainCard = () => {
  const planets = data.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${planets[i].name}</h5>
      </div>
    </div>
    `;
  }
  utilities.printToDom('mainview', domString);
};

const printImage = () => {
  const planetsTwo = data.getPlanets();
  // if (planetsTwo[j] === $(document).event.target) {
  const domStringTwo = `    
  <div class="card">
    <div class="card-body">
      <img>${planetsTwo.imageUrl}</img>
    </div>
  </div>`;
  // } else {

  // }
  utilities.printToDom('mainview', domStringTwo);
};

const attachEvents = () => {
  $(document).on('click', 'h5', printImage);
};

export default { printMainCard, attachEvents };
