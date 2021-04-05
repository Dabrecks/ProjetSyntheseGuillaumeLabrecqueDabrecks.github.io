<template>
  <div>
      <!-- Looper dans mes stages -->
      <b-row v-for="stage in stageValide" :key="stage.stageId" class="carteSection text-left m-0 mb-4">
      <!-- AVEC CETTE VERSION DU BAS DU V-FOR, JE PEUX AVOIR MON id DANS MON URL -->
    <!--<b-row
      v-for="(data,index) in stages"
      :key="index"
      class="carteSection text-left m-0 mb-4"
      > Changer le stage in stages pour stage in sortedStage -->
      <b-col cols="8">
        <h4 class="titreCarte">
            <!-- <p>{{filtre}}</p>*********Test pour voir si le fitre passe -->
          <span>{{ stage.entreprise }}</span>
        </h4>
        <p class="lieuCarte">
          <span>{{ stage.ville }}</span>
        </p>
        <p class="DomaineCarte">
          <span>{{ stage.secteur }}</span>
        </p>
        <p class="DescriptionCarte">
          <span>{{ stage.description }}</span>
        </p>
        <b-button class="boutonCarte" variant="primary">Contacter</b-button>
        <!-- <router-link to="/Stage"> -->
            <b-button  @click="goTodetail(stage.stageId)" class="boutonCarte" variant="primary">Détail</b-button>
        <!-- </router-link>  -->
      </b-col>
      <b-col cols="4 p-0" class="logoCarte">
        <b-img
          src="https://www.capres.ca/wp-content/uploads/2017/03/Ce%CC%81gep_Limoilou.png"
          fluid
          alt="Responsive image"
        ></b-img>
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
      filtre: [String, Object] //Ici c'est mon mot d'inscrit dans la searchBar de mon header
  },
  data: function() {
    return {
      stages: json.stages, // Aller chercher les données JSON
      motFiltre:this.filtre
    };
  },
    //Pour faire suivre les détails vers la fiche détaillé   
    methods:{
        goTodetail(stagId) {
            let staId=stagId
            this.$router.push({name:'Stage', params:{Sid:staId}})
        }
    },  
    // pour filtrer 
    computed: {
        stageFiltre: function(){
          return this.data.filter((stages)=>{
            return stages.poste.match(this.filtre)
          })
        },
        // Aller chercher que mes stages valides
        stageValide: function(){
          return this.stages.filter(stage => stage.valide)
        }
    }  
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
