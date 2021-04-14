<template>
  <div>
    <Header titreHeader="Stages" @update-search="updateSearch($event)"/>
    <!-- SECTION 1 --------------------------------------------->
    <!-- <div>    -->
      <!-- <p>{{search}}</p>Test pour passer mon mot de la searchBar -->
    <!-- </div> -->
    <div class="corp">
      <b-container fluid class="listeCandidats">
        <b-row >
          <!-- section carte avec les candidats -->
          <b-col class="candidats p-0" cols="7">
            <CarteStage :filtre="search"/><!--Je dois passer ma variable "search ici"-->
          </b-col>

          <b-col class="secteur text-left" cols="4" offset="1">
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
    <!-- SECTION 2 Section du centre avec une full width -->
    <SectionPleineLargeur />
    <!-- SECTION 3 Retour avec le padding régulier -->
    <CartesStage />
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
import CarteStage from '../../layout/CarteStage'
import CartesStage from '../../layout/CartesStage'
// import CartesStage from '../../layout/CartesStage'
export default {
  name: "OffreStages",
  components: {
    Footer,
    Header,
    SectionPleineLargeur,
    SectionPleineLargeurI,
    CartesStage,
    CarteStage,
    // CartesStage,
  },
  data() {
    return {
      search:"",
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
  // aller chercher mon mot dans ma searchBar
  methods: {
    updateSearch: function(updatedSearch){
      this.search = updatedSearch
    }
  }
};
</script>

<style  lang="scss">
$bleuPrimaire: #0d6efd; //bleu officiel de bootstrap
$bleuSecondaire: #5297ff;
$grisArriereUn: #bdbdbd;
$grisArriereSombre: #7a7a7a;
$Blanc: #f8f8f8;
$Noir: #0c0c0c;
$Rouge: #e93939;
$BoxShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
.corp {
  padding: 4% 6% 0 6%;
}
// * { outline: 1px red solid !important; visibility: visible !important }
.listeCandidats {
  margin-bottom: 5%;
}
// Les cartes
.carteSection {
  width: 100%;
  border-radius: 10px;
  padding: 15px;
  box-shadow: $BoxShadow;
  .titreCarte {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2px;
    color: $bleuPrimaire;
  }
  .lieuCarte {
    font-weight: bold;
    color: $Noir;
    margin-bottom: 2px;
  }
  .boutonCarte {
    margin-right: 15px;
  }
}
table {
  background-color: $Blanc;
  .titreTableau {
    background-color: $Blanc;
    font-size: 1.5rem;
    font-weight: bold;
  }
  td {
    border-bottom: 1px solid black;
    padding: 5px;
  }
}
</style>
