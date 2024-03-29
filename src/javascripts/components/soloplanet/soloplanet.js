import $ from 'jquery';
import './soloplanet.scss';
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/planets';

const soloPlanetView = (event) => {
  const soloPlanet = data.getPlanet(event.target.closest('.card').id)[0];
  const domString = `
    <div class="card solo">
      <h5 id="expelButton">X</h5>
      <img class="card-img-top solo-pic" src="${soloPlanet.imageUrl}" alt="Image of ${soloPlanet.name}">
      <div class="card-body">
        <h3>${soloPlanet.name}</h3>
        <p class="card-text">${soloPlanet.description}</p>
        <p>${soloPlanet.nameOfLargestMoon}</p>
      </div>
    </div>
    `;
  utilities.printToDom('soloview', domString);
  $('#mainview').hide();
};

const showSoloPlanetView = () => {
  $(document).on('click', '.card', soloPlanetView);
};

const hidePlanet = () => {
  $(document).on('click', 'h5', () => {
    $('#soloview').hide();
    $('#mainview').show();
  });
};


export default { showSoloPlanetView, hidePlanet };
