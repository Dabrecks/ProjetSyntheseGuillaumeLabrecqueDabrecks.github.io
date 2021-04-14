<!--Devrait être supprimé-->
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
              <h1>Demandes de stage</h1>
            </b-row>
            <b-row class="rowCartes">
              <b-col class="pl-0">
                <div>
                  <b-card class="carteDemande">
                    <b-row>
                      <font-awesome-icon
                        class="iconeCarte"
                        icon="user-graduate"
                        size="3x"
                      />
                      <b-card-text class="title pl-0 pb-0 mb-0"
                        >Développeur Web</b-card-text
                      >
                    </b-row>
                    <hr />
                    <b-row>
                        <b-col cols="7">
                        <b-card-text class="subTitle p-0 "
                            >Jean-Sébastien Tremblay
                        </b-card-text>
                        <b-card-text class="carteVille p-0 mb-1">
                            Ville : <span>Trois-Rivières</span>
                        </b-card-text>
                        <b-card-text class="carteLieu pl-0 mb-0">
                            Établissement scolaire : <span>Cégep de Trois-Rivières</span>
                        </b-card-text>
                    </b-col>
                    <b-col cols="5">
                        <b-card-text class="carteVille p-0 mb-1">
                            Ville : <span>Trois-Rivières</span>
                        </b-card-text>
                        <b-card-text class="carteVille p-0 mb-1">
                            Ville : <span>Trois-Rivières</span>
                        </b-card-text>
                        <b-card-text class="carteLieu pl-0 mb-0">
                            Établissement scolaire : <span>Cégep de Trois-Rivières</span>
                        </b-card-text>
                    </b-col>
                    </b-row>
                    <b-card-text class="carteDescription pl-0">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut laborelitr, sed
                      diam nonumy eirmod tempor invidunt...
                    </b-card-text>
                    <b-row align-h="between">
                      <b-col>
                        <b-button class=" m-1" variant="primary"
                          >Primary</b-button
                        >
                      </b-col>
                      <b-col class="text-right">
                        <b-button class=" m-1" variant="danger"
                          >Danger</b-button
                        >
                        <b-button class=" m-1" variant="success"
                          >Success</b-button
                        >
                      </b-col>
                    </b-row>
                  </b-card>
                </div>
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
  name: "DemandesStage",
  components: {
    SideNav,
    SmallTopNav,
  },
}
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
.carteDemande {
  height: 355px;
  border: none;
  background-color: $Blanc;
  border-top: 4px solid $bleuPrimaire !important;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  .iconeCarte {
    margin: 0px 15px 0px 15px;
  }
  .title {
    color: black;
    font-size: 1.8rem;
    font-weight: bold;
  }
  hr {
    border-top: 2px solid rgb(0, 0, 0);
    margin: 0 0 5px 0;
  }
  .subTitle {
    color: grey;
  }
  .carteVille,
  .carteLieu {
    color: black;
  }
  .carteDescription {
    font-size: 0.8rem;
    color: black;
  }
}
</style>