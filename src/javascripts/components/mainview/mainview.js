import utilities from '../../helpers/utilities';
import data from '../../helpers/data/planets';
import './mainview.scss';

const printMainCard = () => {
  const planets = data.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `
    <div class="card all" id="${planets[i].name.toLowerCase()}">
      <div class="card-body">
        <h5 class="card-title">${planets[i].name}</h5>
        <img class="d-none all-pics" src="${planets[i].imageUrl}"></img>
      </div>
    </div>
    `;
  }
  utilities.printToDom('mainview', domString);
};

export default { printMainCard };
