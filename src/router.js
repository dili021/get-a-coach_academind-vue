import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound';
import coachDetails from './pages/coaches/coachDetails';
import coachIndex from './pages/coaches/coachIndex';
import coachRegistration from './pages/coaches/coachRegistration';
import contactCoach from './pages/requests/contactCoach';
import receivedRequests from './pages/requests/receivedRequests';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: coachIndex },
    {
      path: '/coaches/:id',
      props: true,
      component: coachDetails,
      children: [{ path: 'contact', component: contactCoach }]
    },
    { path: '/register', component: coachRegistration },
    { path: '/requests', component: receivedRequests },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
