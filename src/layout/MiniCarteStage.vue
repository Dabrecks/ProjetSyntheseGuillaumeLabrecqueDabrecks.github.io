<template>
<b-row>
    <b-col cols="3" 
      v-for="stage in activeStages" 
      :key="stage.stageId"
    >
    <div class="sousCarte text-left">
      <b-card class="Card">
        <b-card-text class="cardTitle mb-0">
         <span>{{ stage.entreprise }}</span>
        </b-card-text>
        <b-card-text class="cardSubtitle mb-2">
          <span>{{ stage.poste }}</span>
        </b-card-text>
        <b-card-text>
          <span>{{ stage.description }}</span>
        </b-card-text>
        <a
          @click="goTodetail(stage.stageId)"
          class="cardLink mb-0"
        >
          Détail
        </a>
          <button 
             @click="goToMessage(stage.stageId)"
            class="bouttonCarte" 
            variant="primary">
            Postuler
          </button>
      </b-card>
    </div>
  </b-col>
</b-row>
</template>

<script>
import json from "../assets/data.json";
export default {
  name: "MiniCarteStage",
  data: function() {
    return {
      stages: json.stages, // aller chercher nos données du fichier JSON
    };
  },
  methods: {
    goTodetail(stagId) {
      let staId = stagId;
      this.$router.push({ name: "Stage", params: { Sid: staId } });
    },
    goToMessage(stagId) {
      let staId = stagId;
      this.$router.push({ name: "PostulerStage", params: { Sid: staId } });
    }  
  },
  computed: {
    activeStages: function() {
      return this.stages.filter(function(u) {
        return u.vedette;
      });
    },
  },
};
</script>

<style lang="scss">
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
    box-shadow: $BoxShadow;
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
}</style>
