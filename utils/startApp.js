import htmlStructure from '../components/htmlStructure';
import startSortingBtn from '../components/sortButton';
import header from '../pages/header';
import events from './events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

export default startApp;
