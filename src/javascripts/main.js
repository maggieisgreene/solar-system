import 'bootstrap';
import '../styles/main.scss';
import mainview from './components/mainview/mainview';
import imageview from './components/imageview/imageview';
import soloplanet from './components/soloplanet/soloplanet';

const init = () => {
  mainview.printMainCard();
  imageview.attachFirstEvent();
  imageview.attachEvent();
  soloplanet.showSoloPlanetView();
};

init();
