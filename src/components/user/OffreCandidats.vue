<template>
  <div>
    <Header titreHeader="Candidats" @update-search="updateSearch($event)"/>
    <div class="corp">
      <b-container fluid class="listeCandidats">
        <b-row>
          <!-- section carte avec les candidats -->
          <b-col class="candidats p-0" cols="7">
            <CarteStagiaire :filtre="search"/><!--Je dois passer ma variable "search ici"-->
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
    <CartesStagiaire />
    <!-- SECTION 4 Section du centre avec une full width -->
    <SectionPleineLargeurI />
    <Footer />
  </div>
</template>

<script>
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import SectionPleineLargeur from "../../layout/SectionPleineLargeur";
import SectionPleineLargeurI from "../../layout/SectionPleineLargeurI";
import CartesStagiaire from "../../layout/CartesStagiaire";
import CarteStagiaire from "../../layout/CarteStagiaire";
// import CartesStage from '../../layout/CarteStagiaire'
export default {
  name: "OffreCandidats",
  components: {
    Footer,
    Header,
    SectionPleineLargeur,
    SectionPleineLargeurI,
    CartesStagiaire,
    CarteStagiaire,
    // CartesStage,
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
  methods: {
    updateSearch: function(updatedSearch){
      this.search = updatedSearch
    }
  }
};
</script>

<style lang="scss">
.corp {
  padding: 4% 6% 0 6%;
}

// * { outline: 1px red solid !important; visibility: visible !important }
.listeCandidats {
  margin-bottom: 5%;
}

table {
  background-color: rgb(243, 243, 243);
  .titreTableau {
    background-color: rgb(255, 255, 255);
    font-size: 1.5rem;
    font-weight: bold;
  }
  td {
    border-bottom: 1px solid black;
    padding: 5px;
  }
}

#miniCarte {
  margin: 5% 6%;
  padding: 0;
  .sectionSousCarte {
    margin-bottom: 5%;
  }
  .sousCarte {
    border: none;
    margin-bottom: 4%;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .bouttonCarte {
      padding: 5px;
      border: none;
      color: white;
      background-color: blue;
      margin-left: 15px;
    }
  }
  button {
    margin: 3% 0 2% 0;
    padding: 5px 10px 5px 10px;
    border: none;
    color: white;
    background-color: rgb(255, 47, 28);
  }
}
</style>
