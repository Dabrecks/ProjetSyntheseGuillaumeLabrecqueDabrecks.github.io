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
              <h1>Fiche du candidat</h1>
            </b-row>
            <!-- Boutton de retour -->
            <b-row class="bouttonRetour mb-4">
              <button>Retour à la liste</button>
            </b-row>
            <!-- Boutton d'action -->
            <b-row class="bouttonAction mb-4">
              <button>
                <font-awesome-icon
                  id="editIcon"
                  class="iconeCarte"
                  icon="edit"
                  size="1x"
                /><span>Modifier</span>
              </button>
              <button>
                <font-awesome-icon
                  id="trashIcon"
                  class="iconeCarte"
                  icon="trash-alt"
                  size="1x"
                /><span>Supprimer</span>
              </button>
            </b-row>
            <hr id="hrBleu" />

            <div v-for="(data, index) in candidats" :key="index">
              <div v-if="canId == data.candidatId">
                <b-row class="ligneNom">
                  <font-awesome-icon
                    class="iconeCarte"
                    icon="user-graduate"
                    size="3x"
                  />
                  <b-card-text class="title  pb-0 mb-0">{{
                    data.nom
                  }}</b-card-text>
                </b-row>
                <hr id="hrNoir" />
                <b-row class="tableau mb-5">
                  <b-col class="tableauGauche text-left" cols="5">
                    <b-row class="case">
                      <p class="m-0">Nom et prénom du stagiaire :</p>
                    </b-row>
                    <b-row class="case">
                      <p class="m-0">Établissement scolaire :</p>
                    </b-row>
                    <b-row class="case">
                      <p class="m-0">Programme de formation :</p>
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
                      <p class="m-0">{{ data.nom }}</p>
                    </b-row>
                    <b-row class="case">
                      <p class="m-0">{{ data.etablissement }}</p>
                    </b-row>
                    <b-row class="case">
                      <p class="m-0">{{ data.formation }}</p>
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

            <b-row class="textCommuniquer mb-3">
              <b-col>
                <label for="textarea-default"
                  >Communiquer avec le candidat</label
                >
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
  name: "FicheCandidat",
  components: {
    SideNav,
    SmallTopNav,
  },
  data() {
    return {
      canId: this.$route.params.Cid, // aller chercher l'id de la carte
      candidats: json.candidats, // Aller chercher les données JSON
    };
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
.corp {
  // background-color: pink;
  h1 {
    font-weight: bold;
    padding-left: 15px;
  }
  .bouttonRetour {
    padding: 0 15px;
    button {
      border: none;
      padding: 5px;
      border-radius: 5px;
      background-color: $grisArriereSombre;
      color: $Blanc;
    }
  }
  .bouttonAction {
    display: flex;
    justify-content: flex-end;
    padding: 0 15px;
    button {
      background-color: $Blanc;
      border: none;
      box-shadow: $BoxShadow;
      padding: 5px 8px;
      margin-left: 8px;
      border-radius: 5px;
      #editIcon {
        color: green;
      }
      #trashIcon {
        color: $Rouge;
      }
    }
  }
  .ligneNom {
    padding-left: 15px;
  }
  .title {
    color: $Noir;
    font-size: 1.8rem;
    font-weight: bold;
  }
  #hrNoir {
    border: 1px solid $Noir;
    margin: 0 0 16px 0;
    padding: 0 -5px;
    width: 100%;
  }
  #hrBleu {
    border: 3px solid $bleuPrimaire;
  }
  .tableau {
    margin: 0;
    background-color: $Blanc;
    border: 1px solid $grisArriereSombre;
    .tableauGauche {
      .case {
        border: 1px solid $grisArriereSombre;
      }
      p {
        color: black;
        padding: 12px 0 12px 7px;
        font-weight: bold;
      }
    }
    .tableauDroite {
      .case {
        border: 1px solid $grisArriereSombre;
      }
      p {
        color: $grisArriereSombre;
        padding: 12px 0 12px 7px;
      }
    }
  }
  .bouttonEnvoyer {
    margin-bottom: 150px;
  }
}
</style>
