import $ from 'jquery';
import planet from '../../helpers/data/planets';
import cardFunc from '../mainview/mainview';

const searchBarFunc = () => {
  $(document).keyup(() => {
    const inputVal = $('#user-input').val().toLowerCase();
    const planets = planet.getPlanets();
    const findMatch = planets.filter((x) => x.name.toLowerCase().includes(inputVal));
    cardFunc.printMainCard(findMatch);
  });
};

export default { searchBarFunc };
