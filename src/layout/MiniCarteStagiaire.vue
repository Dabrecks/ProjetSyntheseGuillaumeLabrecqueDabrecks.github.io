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

<style lang="scss"></style>
