<template>
<b-row>
    <b-col cols="3" v-for="stage in activeStages" :key="stage.titre">
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
        <a href="#" class="cardLink mb-0">Détail</a>
        <button class="bouttonCarte" href="#" variant="primary">
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
  computed: {
    activeStages: function() {
      return this.stages.filter(function(u) {
        return u.vedette;
      });
    },
  },
};
</script>

<style lang="scss"></style>
