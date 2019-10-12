import $ from 'jquery';
import './soloplanet.scss';
import utilities from '../../helpers/utilities';
import data from '../../helpers/data/planets';

const soloPlanetView = (event) => {
  const planet = data.getPlanet(event.target.closest('.card').id)[0];
  console.error(planet);
  const domString = `
    <div class="card solo">
      <img class="card-img-top solo-pic" src="${planet.imageUrl}" alt="Image of ${planet.name}">
      <div class="card-body">
        <p class="card-text">${planet.description}</p>
      </div>
    </div>
    `;
  utilities.printToDom('soloview', domString);
  $('#mainview').hide();
};

const showSoloPlanetView = () => {
  $(document).on('click', '.card', soloPlanetView);
};

export default { showSoloPlanetView };
