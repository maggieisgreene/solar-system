import $ from 'jquery';
import './soloplanet.scss';
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/planets';

const soloPlanetView = (event) => {
  const soloPlanet = data.getPlanet(event.target.closest('.card').id)[0];
  const domString = `
    <div class="card solo">
      <button id="hidePlanet" class="close d-flex justify-content-end">x</button>
      <img class="card-img-top solo-pic" src="${soloPlanet.imageUrl}" alt="Image of ${soloPlanet.name}">
      <div class="card-body">
        <p class="card-text">${soloPlanet.description}</p>
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
  $('#hidePlanet').on('click', () => {
    $('#soloview').hide();
    $('#mainview').show();
  });
};


export default { showSoloPlanetView, hidePlanet };
