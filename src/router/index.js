import Vue from 'vue'
import VueRouter from 'vue-router'
import Acceuil from '../components/user/Acceuil.vue'
import Apropos from '../components/user/Apropos.vue'
import Candidats from '../components/user/Candidats.vue'
import OffreCandidats from '../components/user/OffreCandidats.vue'
import OffreStages from '../components/user/OffreStages.vue'
import Stage from '../components/user/Stage.vue'
import Connexion from '../components/user/Connexion.vue'
import Joindre from '../components/user/Joindre.vue'
import Confidentialite from '../components/user/Confidentialite.vue'
import Partenaires from '../components/user/Partenaires.vue'
import DemandesStage from '../components/admin/DemandesStage.vue'
import FicheCandidat from '../components/admin/FicheCandidat.vue'
import ListeCandidats from '../components/admin/ListeCandidats.vue'
import ListeStages from '../components/admin/ListeStages.vue'
import Validation from '../components/admin/Validation.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: Acceuil
  },
  {
    path: '/Apropos',
    name: 'Apropos',
    component: Apropos
  },
  {
    path: '/Candidats',
    name: 'Candidats',
    component: Candidats
  },
  {
    path: '/OffreCandidats',
    name: 'OffreCandidats',
    component: OffreCandidats
  },
  {
    path: '/OffreStages',
    name: 'OffreStages',
    component: OffreStages
  },
  {
    path: "/Stage/:Sid",
    name: 'Stage',
    component: Stage
  },
  {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/Joindre',
    name: 'Joindre',
    component: Joindre
  },
  {
    path: '/Confidentialite',
    name: 'Confidentialite',
    component: Confidentialite
  },
  {
    path: '/Partenaires',
    name: 'Partenaires',
    component: Partenaires
  },
  {
    path: '/DemandesStage',
    name: 'DemandesStage',
    component: DemandesStage
  },
  {
    path: '/FicheCandidat',
    name: 'FicheCandidat',
    component: FicheCandidat
  },
  {
    path: '/ListeCandidats',
    name: 'ListeCandidats',
    component: ListeCandidats
  },
  {
    path: '/ListeStages',
    name: 'ListeStages',
    component: ListeStages
  },
  {
    path: '/Validation',
    name: 'Validation',
    component: Validation
  },
 
  // {
  //   path: '/about',
  //   name: 'About',
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
