import $ from 'jquery';

const hideName = (event) => {
  $(event.target).find('h5').toggleClass('d-none');
};

const attachFirstEvent = () => {
  $('.card').hover(hideName);
};

const showPlanets = (event) => {
  $(event.target).find('img').toggleClass('d-none');
};

const attachEvent = () => {
  $('.card').hover(showPlanets);
};

export default { attachFirstEvent, attachEvent };
