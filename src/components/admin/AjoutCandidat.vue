<template>
    <div>
    <b-container fluid>
      <b-row class="sideNav">
        <b-col cols="2" class="gauche">
          <SideNav />
        </b-col>
        <b-col cols="10" class="droite text-left">
          <SmallTopNav />
          <b-container fluid class="corp">
            <b-row class="titre mb-3 mt-5">
              <h1>AjoutCandidat</h1>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SideNav from "../../layout/SideNav";
import SmallTopNav from "../../layout/SmallTopNav";
import json from "../../assets/data.json";
export default {
name: "AjoutCandidat",
components: {
    SideNav,
    SmallTopNav,
  },
  data: function() {
    return {
      candidats: json.candidats, // aller chercher nos données du fichier JSON
    };
  },
}
</script>

<style lang="scss">

</style>