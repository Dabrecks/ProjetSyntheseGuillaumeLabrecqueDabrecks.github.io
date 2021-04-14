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
              <h1>Liste des candidats</h1>
            </b-row>
            <b-row class="listMiniCartes">
              <b-col
                v-for="candidat,index in candidats"
                :key="index"
                cols="4"
                class="miniCarte "
              >
                <b-row class="nomMiniCarte">
                  <p>{{ candidat.nom }}</p>
                </b-row>
                <b-row class="institutionMiniCarte">
                  <p>{{ candidat.position }}</p>
                </b-row>
                <b-row class="villeMiniCarte">
                  <p>{{ candidat.etablissement }}</p>
                </b-row>
                <b-row class="bouttonMiniCarte">
                  <button
                    @click="goTodetailCandidatAdmin(candidat.candidatId)"
                  >
                    <font-awesome-icon
                      id="editIcon"
                      class="iconeCarte"
                      icon="edit"
                      size="1x"
                    /><span>Modifier</span>
                  </button>
                  <button
                    v-on:click="supprimer(index)"
                  >
                    <font-awesome-icon
                      id="trashIcon"
                      class="iconeCarte"
                      icon="trash-alt"
                      size="1x"
                    /><span>Supprimer</span>
                  </button>
                </b-row>
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
  name: "ListeCandidats",
  components: {
    SideNav,
    SmallTopNav,
  },
  data: function() {
    return {
      candidats: json.candidats, // Passer les données JSON
    };
  },
  //Pour faire suivre les détails vers la fiche détaillé
  methods: {
    goTodetailCandidatAdmin(candId) {
      let canId = candId;
      this.$router.push({ name: "FicheCandidat", params: { Cid: canId } });
    },
    supprimer (index) {
      this.$delete(this.candidats, index)
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
.listMiniCartes {
  .miniCarte {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: $BoxShadow;
    .nomMiniCarte {
      margin-top: 15px;
      p {
        color: $grisArriereSombre;
        font-size: 1.7rem;
        font-weight: bold;
        padding: 0;
      }
    }
    .institutionMiniCarte,
    .villeMiniCarte {
      p {
        color: $bleuPrimaire;
        font-size: 1rem;
        padding: 0;
        margin-bottom: 2px;
      }
    }
    .bouttonMiniCarte {
      button {
        background-color: $Blanc;
        border: none;
        box-shadow: $BoxShadow;
        padding: 5px 8px;
        margin: 12px 4px 20px 4px;
        border-radius: 5px;
        #editIcon {
          color: green;
          margin-right: 10px;
        }
        #trashIcon {
          color: $Rouge;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
