<template>
<b-row>
    <b-col cols="3" 
      v-for="candidat in activeStagiaires" 
      :key="candidat.candidatId">
    <div class="sousCarte text-left">
      <b-card class="Card">
        <b-card-text class="cardTitle mb-0">
         <span>{{ candidat.position }}</span>
        </b-card-text>
        <b-card-text class="cardSubtitle mb-2">
          <span>{{ candidat.nom }}</span>
        </b-card-text>
        <b-card-text>
          <span>{{ candidat.description }}</span>
        </b-card-text>
        <a
          @click="goTodetail(candidat.candidatId)"
          class="cardLink mb-0"
        >
          Détail
        </a>
        <b-button 
          @click="goToMessage(candidat.candidatId)"
          class="bouttonCarte" 
          variant="primary"
        >
          Postuler
        </b-button>
      </b-card>
    </div>
  </b-col>
</b-row>
</template>

<script>
import json from "../assets/data.json";
export default {
  name: "MiniCarteStagiaire",
  data: function() {
    return {
      candidats: json.candidats, // aller chercher nos données du fichier JSON
    };
  },
  methods: {
    goTodetail(candId) {
      let canId = candId;
      this.$router.push({ name: "Candidat", params: { Cid: canId } });
    },
    goToMessage(candId) {
      let canId = candId;
      this.$router.push({ name: "PostulerCandidat", params: { Cid: canId } });
    }  
  },
  computed: {
    activeStagiaires: function() {
      return this.candidats.filter(function(u) {
        return u.vedette;
      });
    },
  },
};
</script>

<style lang="scss">
//mes variables scss
$bleuPrimaire: #0d6efd; //bleu officiel de bootstrap
$bleuSecondaire: #5297ff;
$grisArriereUn: #bdbdbd;
$grisArriereSombre: #7a7a7a;
$Blanc: #f8f8f8;
$Noir: #0c0c0c;
$Rouge: #e93939;
$BoxShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
      color: $Blanc;
      background-color: $bleuPrimaire;
      margin-left: 15px;
    }
  }
  button {
    margin: 3% 0 2% 0;
    padding: 5px 10px 5px 10px;
    border: none;
    color: $Blanc;
    background-color: $Rouge;
  }
}
</style>
