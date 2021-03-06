import { createApp } from 'vue';
import App from './App';
import store from './store/index';
import router from './router';
import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';
import BaseBadge from './components/UI/BaseBadge';
import BaseSpinner from './components/UI/BaseSpinner';
import BaseDialog from './components/UI/BaseDialog';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-spinner', BaseSpinner);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-badge', BaseBadge);
app.use(router);
app.use(store);
app.mount('#app');
