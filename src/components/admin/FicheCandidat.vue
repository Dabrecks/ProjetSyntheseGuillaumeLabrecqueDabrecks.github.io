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
            <b-row class="ligneNom">
              <font-awesome-icon
                class="iconeCarte"
                icon="user-graduate"
                size="3x"
              />
              <b-card-text class="title  pb-0 mb-0">John Doe</b-card-text>
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
                  <p class="m-0">Joseph doe</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">Cégep de Trois-Rivières</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">Développement Web</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">john@doe.com</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">819 991 9911</p>
                </b-row>
                <b-row class="case">
                  <p class="m-0">Shawinigan</p>
                </b-row>
              </b-col>
            </b-row>
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
export default {
  name: "FicheCandidat",
  components: {
    SideNav,
    SmallTopNav,
  },
};
</script>

<style lang="scss">
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
      background-color: grey;
      color: white;
    }
  }
  .bouttonAction {
    display: flex;
    justify-content: flex-end;
    padding: 0 15px;
    button {
      background-color: rgb(255, 255, 255);
      border: none;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      padding: 5px 8px;
      margin-left: 8px;
      border-radius: 5px;
      #editIcon {
        color: green;
      }
      #trashIcon {
        color: red;
      }
    }
  }
  .ligneNom {
    padding-left: 15px;
  }
  .title {
    color: black;
    font-size: 1.8rem;
    font-weight: bold;
  }
  #hrNoir {
    border: 1px solid black;
    margin: 0 0 16px 0;
    padding: 0 -5px;
    width: 100%;
  }
  #hrBleu {
    border: 3px solid rgb(47, 50, 182);
  }
  .tableau {
    margin: 0;
    background-color: white;
    border: 1px solid grey;
    .tableauGauche {
      //   background-color: green;
      .case {
        border: 1px solid grey;
      }
      p {
        color: black;
        padding: 12px 0 12px 7px;
        font-weight: bold;
      }
    }
    .tableauDroite {
      .case {
        border: 1px solid grey;
      }
      p {
        color: rgb(105, 105, 105);
        padding: 12px 0 12px 7px;
      }
    }
  }
      .bouttonEnvoyer {
          margin-bottom: 150px;
      }
}
</style>
