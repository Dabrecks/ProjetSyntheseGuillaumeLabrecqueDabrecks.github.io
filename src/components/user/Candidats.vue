<!--Cette page devrait être supprimer, mais j'ai trop peur que ça plante!--> 

<template>
  <div>
    <Header />
    <!-- SECTION 1 --------------------------------------------->
    <div class="corp">
      <b-container fluid class="listeCandidats">
        <b-row >
          <!-- section carte avec les candidats -->
          <b-col class="candidats p-0" cols="7">
            <b-row class="carteSection text-left m-0">
              <b-col cols="8">
                <h4 class="titreCarte">Technicien en architecture</h4>
                <p class="lieuCarte">Montréal</p>
                <p class="DomaineCarte">
                  Construction, production et manutention
                </p>
                <p class="DescriptionCarte">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  ad suscipit nam dolorum maxime.
                </p>
                <b-button class="boutonCarte" variant="primary"
                  >Primary</b-button
                >
                <b-button class="boutonCarte" variant="primary"
                  >Primary</b-button
                >
              </b-col>
              <b-col cols="4" class="logoCarte">LOGO</b-col>
            </b-row>
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
    <Footer/>
  </div>
</template>

<script>
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import SectionPleineLargeur from '../../layout/SectionPleineLargeur'
import SectionPleineLargeurI from '../../layout/SectionPleineLargeurI'
import CartesStagiaire from '../../layout/CartesStagiaire'
// import CartesStage from '../../layout/CartesStage'
export default {
  name: "Candidats",
  components: {
    Footer,
    Header,
    SectionPleineLargeur,
    SectionPleineLargeurI,
    CartesStagiaire,
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
};
</script>

<style  lang="scss">
.corp {
  padding: 4% 6% 0 6%;
}


.listeCandidats {
  margin-bottom: 5%;
}
// Les cartes
.carteSection {
  width: 100%;
  border-radius: 10px;
  padding: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .titreCarte {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2px;
    color: rgb(52, 52, 255);
  }
  .lieuCarte {
    font-weight: bold;
    color: black;
    margin-bottom: 2px;
  }
  .boutonCarte {
    margin-right: 15px;
  }
  .logoCarte {
    background-color: chartreuse;
  }
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
