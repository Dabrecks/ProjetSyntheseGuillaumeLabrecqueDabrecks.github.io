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
              
              <b-col v-for="stage, index in stages" :key="index" cols="4" class="miniCarte">
                <b-row class="nomMiniCarte">
                  <p>{{ stage.entreprise }}</p>  
                </b-row>
                <b-row class="institutionMiniCarte">
                  <p>Cégep de Trois-Rivières</p>  
                </b-row>
                <b-row class="villeMiniCarte">
                  <p>Shawinigan</p>
                </b-row> 
                <b-row class="bouttonMiniCarte">
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
  name: "ListeStages",
  components: {
    SideNav,
    SmallTopNav,
  },
  data: function() {
      return {
        stages: json.stages, // Passer les données JSON
      };
    } 
  }
</script>

<style lang="scss">
.listMiniCartes {
  .miniCarte {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    .nomMiniCarte {
      margin-top: 15px;
      p {
      color: rgb(65, 65, 65);
      font-size: 1.7rem;
      font-weight: bold;
      padding: 0;
    }
    }
    .institutionMiniCarte, .villeMiniCarte {
      p {
        color: blue;
        font-size: 1rem;
        padding: 0;
        margin-bottom: 2px;
      }
    }
    .bouttonMiniCarte {
      button {
        background-color: rgb(255, 255, 255);
        border: none;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        padding: 5px 8px;
        margin: 12px 4px 20px 4px;
        border-radius: 5px;
        #editIcon {
        color: green;
        margin-right: 10px;
        }
        #trashIcon {
          color: red;
        margin-right: 10px;
        }
      }
    }
  } 
}
</style>
