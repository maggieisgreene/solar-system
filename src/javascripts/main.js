import 'bootstrap';
import '../styles/main.scss';
import mainview from './components/mainview/mainview';
import imageview from './components/imageview/imageview';

const init = () => {
  mainview.printMainCard();
  imageview.attachFirstEvent();
  imageview.attachEvent();
};

init();
