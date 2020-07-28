import Vue from 'vue';
import VueRouter from 'vue-router';

import Accueil from './composants/Accueil.vue';
import Bibliotheque from './composants/texte/Bibliotheque.vue';
import Chapitre from './composants/texte/Chapitre.vue';
import Histoire from './composants/texte/Histoire.vue';
import Wiki from './composants/index/Wiki.vue';

import Dashboard from './dashboard/Dashboard.vue';

import Login from './composants/auth/Login.vue';

import { authenticationService } from '../_services/authentication.service';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'accueil',
            component: Accueil,
        },
        {
            path: '/bibliotheque',
            name: 'bibliotheque',
            component: Bibliotheque,
        },
        {
            path: '/:id/chapitre',
            name: 'chapitre',
            component: Chapitre,
        },
        {
            path: '/:id/histoire',
            name: 'histoire',
            component: Histoire,
        },
        {
            path: '/wiki',
            name: 'wiki',
            component: Wiki,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        // Partie Dashboard
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
        },
        // otherwise redirect to home
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {

    // redirect to login page if not logged in and trying to access a restricted page
    const {
        authorize
    } = to.meta;

    if (authorize && !_.isEmpty(authorize)) {

        const currentUser = authenticationService.currentUserValue;
        // console.log(authenticationService.currentUserValue);
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return next({
                path: "/login",
                query: {
                    returnUrl: to.path
                }
            });
        }

        // check if route is restricted by role
        if (authorize.length && !authorize.includes(currentUser.role.intitule)) {
            // role not authorised so redirect to home page
            return next({
                path: "/"
            });
        }
    }

    return next();
});

export default router;