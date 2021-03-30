<template>
  <div>
    <Header />
    <!-- corp de la page -->
    <div class="corp">
      <b-container fluid class="listeStage">
        <b-row>
          <!-- section des deux petites cartes -->
          <b-col class="sectionStage" cols="8">
            <b-row class="stage">
              <b-col cols="4" class="logoStage">
                <h1>logo</h1>
              </b-col>
              <b-col cols="8"  class="descriptionStage">
                <b-row class="titreDescriptionStage text-left">
                    <b-col cols="12">
                        <h1>Développeur Front-End</h1>
                    </b-col>
                </b-row>
                <b-row class="listeDescriptionStage mb-4">
                    <b-col cols="6" class="listeGauche text-left mt-3">
                        <ul>
                            <li>Date de début <span>: 2021-05-18</span></li>
                            <li>Date de fin <span>: 2021-05-16</span></li>
                            <li>Date de fin <span>: 2021-10-16</span></li>
                        </ul>
                    </b-col>
                    <b-col cols="6" class="listeDroite text-right mt-3">
                        <ul>
                            <li>Horaire <span>: Temps plein</span></li>
                            <li>Possibilité d'emploi <span>: 2021-09-11</span></li>
                            <li>Possibilité d'emploi <span>: 2021-09-11</span></li>
                        </ul>
                    </b-col>
                </b-row>
                <b-row class="boutonDescriptifStage">
                    <b-col cols="12">
                    <button><p>Contacter le candidat</p></button>
                    </b-col>
                </b-row>
              </b-col>
            </b-row>
            <!-- Le texte descriptif  -->
            <b-row class="texteStage text-left mt-5">
              <h3 class="titreTexteStage mb-4">TYPE DE STAGE RECHERCHÉ</h3>
              <p class="descriptifTexteStage mb-3">
                Etiam mattis est in tellus mattis maximus. Etiam non molestie
                metus. Donec quis mauris metus. Cras tempor varius odio, nec
                varius nisi sollicitudin ac. Praesent vitae elementum augue, non
                suscipit turpis. Etiam blandit vitae quam nec porttitor. Duis
                libero nunc, iaculis at diam in, scelerisque dapibus mauris.
                Aenean faucibus est lectus, elementum pellentesque nisi cursus
                at. Maecenas nec elementum enim, vel egestas nisi.
              </p>
              <p class="descriptifTexteStage" >
                Nam quis laoreet turpis. Mauris placerat euismod lectus, quis
                laoreet libero commodo vel. Nullam metus ipsum, pulvinar a nulla
                nec, tristique scelerisque libero. Pellentesque turpis libero,
                hendrerit vitae placerat id, laoreet consectetur lectus.
              </p>
            </b-row>
            <b-row class="texteStage text-left mt-5">
              <h3 class="titreTexteStage mb-4">COMPÉTENCES AQCUISES</h3>
              <p class="descriptifTexteStage mb-3">
                Etiam mattis est in tellus mattis maximus. Etiam non molestie
                metus. Donec quis mauris metus. Cras tempor varius odio, nec
                varius nisi sollicitudin ac. Praesent vitae elementum augue, non
                suscipit turpis. Etiam blandit vitae quam nec porttitor. Duis
                libero nunc, iaculis at diam in, scelerisque dapibus mauris.
                Aenean faucibus est lectus, elementum pellentesque nisi cursus
                at. Maecenas nec elementum enim, vel egestas nisi.
              </p>
              <p class="descriptifTexteStage" >
                Nam quis laoreet turpis. Mauris placerat euismod lectus, quis
                laoreet libero commodo vel. Nullam metus ipsum, pulvinar a nulla
                nec, tristique scelerisque libero. Pellentesque turpis libero,
                hendrerit vitae placerat id, laoreet consectetur lectus.
              </p>
            </b-row>
            <b-row class="texteStage text-left mt-5">
              <h3 class="titreTexteStage mb-4">À PROPOS DE L'ENTREPRISE</h3>
              <p class="descriptifTexteStage mb-3">
                Etiam mattis est in tellus mattis maximus. Etiam non molestie
                metus. Donec quis mauris metus. Cras tempor varius odio, nec
                varius nisi sollicitudin ac. Praesent vitae elementum augue, non
                suscipit turpis. Etiam blandit vitae quam nec porttitor. Duis
                libero nunc, iaculis at diam in, scelerisque dapibus mauris.
                Aenean faucibus est lectus, elementum pellentesque nisi cursus
                at. Maecenas nec elementum enim, vel egestas nisi.
              </p>
              <p class="descriptifTexteStage" >
                Nam quis laoreet turpis. Mauris placerat euismod lectus, quis
                laoreet libero commodo vel. Nullam metus ipsum, pulvinar a nulla
                nec, tristique scelerisque libero. Pellentesque turpis libero,
                hendrerit vitae placerat id, laoreet consectetur lectus.
              </p>
            </b-row>
          </b-col>
          <b-col class="secteur text-left" cols="4">
            <table>
              <thead>
                <tr class="titreTableau">
                  <td>Secteur d'activités</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="secteur in secteurs" :key="secteur.id">
                  <td>{{ secteur.domaine }}</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <SectionPleineLargeur />
    <b-container fluid>
        <!-- SECTION 3 Retour avec le padding régulier -->
    <CartesStage />
    </b-container>
        <!-- SECTION 4 Section du centre avec une full width -->
    <SectionPleineLargeurI />
    <Footer/>
  </div>
</template>

<script>
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import SectionPleineLargeur from '../../layout/SectionPleineLargeur'
import SectionPleineLargeurI from '../../layout/SectionPleineLargeurI'
import CartesStage from '../../layout/CartesStage'
export default {
  name: "OffreStage",
  components: {
    Footer,
    Header,
    SectionPleineLargeur,
    SectionPleineLargeurI,
    CartesStage,
  },
  data() {
    return {
      secteurs: [
        { domaine: "Administration publiques" },
        { domaine: "Agriculture, foresterie, pêche et chasse" },
        { domaine: "Arts, spectacles et loisirs" },
        { domaine: "Autres services (sauf les administrations publiques)" },
        { domaine: "Commerce de détail" },
        { domaine: "Commerce de gros" },
        { domaine: "Construction" },
        { domaine: "Extraction minière, et extraction de pétrole et de gaz" },
        { domaine: "Fabrication" },
        { domaine: "Finance et assurances" },
        { domaine: "Gestion de sociétés et d’entreprises" },
        { domaine: "Hébergement et services de restauration" },
        { domaine: "Industrie de l’information et industrie culturelle" },
        {
          domaine:
            "Services administratifs, services de soutien, services de gestion des déchets et services d’assainissement",
        },
        { domaine: "Services d’enseignement" },
        { domaine: "Services de restauration et débit de boisson" },
        { domaine: "Services immobiliers et services de location" },
        { domaine: "Services professionnels, scientifiques et techniques" },
        { domaine: "Services publics" },
        { domaine: "Soins de santé et assistance sociale" },
        { domaine: "Transport et entreposage" },
        { domaine: "Transport par camion" },
      ],
    };
  },
};
</script>

<style lang="scss">
.listeStage {
    margin-bottom: 5%;
      .titreTexteStage {
          font-size: 1.4rem;
          font-weight: bold;
      }
      .descriptifTexteStage {
          font-size: 1rem;
      }
    .stage {
      .logoStage {
      border: solid 1px black;
      }
      .descriptionStage {
          padding: 3% 2%;
          border: solid 1px black;
          .titreDescriptionStage h1{
              font-size: 1.7rem;
              font-weight: bold;
          }
          .listeDescriptionStage ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
            li {
                font-weight: bold;
                span {
                    font-weight: 100;
                }
            }
          }
          .boutonDescriptifStage button{
            background-image: linear-gradient(to right, rgb(35, 55, 233) , rgb(86, 8, 175)); 
            width: 100%;
            border: none;
            padding: 7px;
            p {
                margin: 0;
                color: whitesmoke;
            }
          }
      }
  }
}
</style>
