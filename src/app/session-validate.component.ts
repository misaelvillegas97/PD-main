import { MainComponent } from './views/user-logged/main/main.component';
import { IndexComponent } from './views/index/index.component';

// let indexPage;

// if (localStorage.getItem('logged') === 'true') {
//   indexPage = MainComponent;
// } else {
//   indexPage = IndexComponent;
// }

const indexPage = localStorage.getItem('logged') === 'true' ? MainComponent : IndexComponent;

export default indexPage;
