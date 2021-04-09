<template>
  <div>
    <Header />
    <b-container fluid class="corp">
      <b-row class="titre mb-3 mt-5">
        <h1>Communiquer avec l'entreprise</h1>
      </b-row>
      <hr id="hrBleu" />
       <div  v-for="(data,index) in stages" :key="index">
            <div v-if="staId == data.stageId">

            <b-row class="ligneNom">
              <font-awesome-icon
                class="iconeCarte"
                icon="user-tie"
                size="3x"
              />
              <b-card-text class="title  pb-0 mb-0">{{ data.entreprise }}</b-card-text>
            </b-row>
            <hr id="hrNoir" />
            <b-row class="tableau mb-5">
              <b-col class="tableauGauche text-left" cols="5">
                <b-row class="case">
                  <p class="m-0">Nom de l'entreprise :</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">secteur :</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">Poste :</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">Courriel :</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">Téléphone :</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">Ville :</p>
                </b-row>
              </b-col>
              <b-col class="tableauDroite" cols="7">
                <b-row class="case">
                  <p class="m-0">{{ data.entreprise }}</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">{{ data.secteur }}</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">{{ data.poste }}</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">{{ data.courriel }}</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">{{ data.telephone }}</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">{{ data.ville }}</p>
                </b-row>
              </b-col>
            </b-row>
        </div>
      </div>

      <b-row class="textCommuniquer text-left mb-3">
        <b-col>
          <label for="textarea-default">Communiquer avec l'entreprise'</label>
          <b-form-textarea
            id="textarea-default"
            rows="8"
            placeholder="Default textarea"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="bouttonEnvoyer text-right">
          <b-button variant="primary">Envoyer</b-button>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import json from "../../assets/data.json";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
export default {
  name: "PostulerStage",
  components: {
    Footer,
    Header,
  },
  data: function() {
    return {
      staId: this.$route.params.Sid, // aller chercher l'id de la carte
      stages: json.stages, // Aller chercher les données JSON
    };
  },
};
</script>

<style></style>
