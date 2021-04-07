<template>
<div>
  <b-row 
    v-for="candidat in candidatToShow" 
    :key="candidat.candidatId" 
    class="carteSection text-left m-0 mb-4"
  ><!-- v-for="candidat in candidats" :key="candidat.nom" -->
      <b-col cols="8">
        <h4 class="titreCarte">
          <span>{{ candidat.position }}</span>
        </h4>
        <p class="lieuCarte">
          <span>{{ candidat.ville }}</span>
        </p>
        <p class="DomaineCarte">
          <span>{{ candidat.formation }}</span>
        </p>
        <p class="DescriptionCarte">
          <span>{{ candidat.description }}</span>
        </p>
        <b-button class="boutonCarte" variant="primary">Primary</b-button>
        <b-button
          @click="goTodetail(candidat.candidatId)"
          class="boutonCarte"
          variant="primary"
          >Détail</b-button
        >
      </b-col>
      <b-col cols="4 p-0" class="logoCarte">
        <b-img 
          src="https://www.capres.ca/wp-content/uploads/2017/03/Ce%CC%81gep_Limoilou.png" 
          fluid 
          alt="Responsive image">
        </b-img>
        <!-- LOGO -->
      </b-col>
  </b-row>
</div>
</template>

<script>
import json from "../assets/data.json";
export default {
  name: "CarteStagiaire",
  props: {
    filtre: [String, Object], //Ici c'est mon mot d'inscrit dans la searchBar de mon header
  },
  data: function() {
    return {
      candidats: json.candidats, // Aller chercher les données JSON
      motFiltre: this.filtre,
    };
  },
   //Pour faire suivre les détails vers la fiche détaillé
  methods: {
    goTodetail(candId) {
      let canId = candId;
      this.$router.push({ name: "Candidat", params: { Cid: canId } });
    },
  },
  // Aller chercher que mes candidats valides
  computed: {
    candidatToShow: function() {
      var candidatsToShow = this.candidats.filter((candidat) => candidat.valide);
      console.log(this.filtre)
      if (this.filtre) {
        candidatsToShow.filter(candidat =>
        console.log(candidat.formation.match(this.filtre))
        )
      }
      return candidatsToShow;
    }
  }
  // computed: {
  //   candidatValide: function(){
  //     return this.candidats.filter(candidat => candidat.valide)
  //   }
  // }
};
</script>

<style lang="scss">
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
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
