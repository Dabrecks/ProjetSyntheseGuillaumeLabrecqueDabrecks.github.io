<template>
  <div>
    <b-container fluid>
      <b-row class="sideNav">
        <b-col cols="2" class="gauche">
          <SideNav />
        </b-col>
        <b-col cols="10" class="droite text-left">
          <SmallTopNav />
          <b-container fluid>
            <b-row class="titre mb-5 mt-5">
              <h1>En attente de validation</h1>
            </b-row>
            <!-- Sous titre -->
            <b-row class="sousTitre mb-4">
              <b-col cols="6" class="pl-0">
                <h4>Demandes de stage</h4>
              </b-col>
              <b-col cols="6" class="pl-0">
                <h4>Offres de stage</h4>
              </b-col>
            </b-row>
            <!-- Section principale -->
            <b-row class="rowCartes">
              <b-col class="pl-0" cols="6">
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
                    <b-card-text class="subTitle p-0 "
                      >Jean-Sébastien Tremblay</b-card-text
                    >
                    <b-card-text class="carteVille p-0 mb-1">
                      Ville : Trois-Rivières
                    </b-card-text>
                    <b-card-text class="carteLieu pl-0 mb-0">
                      Établissement scolaire : Cégep de Trois-Rivières
                    </b-card-text>
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

              <b-col cols="6">
                <div>
                  <b-card class="carteDemande">
                    <b-row>
                      <font-awesome-icon
                        class="iconeCarte"
                        icon="user-tie"
                        size="3x"
                      />
                      <b-card-text class="title pl-0 pb-0 mb-0"
                        >Développeur Web</b-card-text
                      >
                    </b-row>
                    <hr />
                    <b-card-text class="subTitle p-0 "
                      >Jean-Sébastien Tremblay</b-card-text
                    >
                    <b-card-text class="carteVille p-0 mb-1">
                      Ville : Trois-Rivières
                    </b-card-text>
                    <b-card-text class="carteLieu pl-0 mb-0">
                      Établissement scolaire : Cégep de Trois-Rivières
                    </b-card-text>
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
  name: "Validation",
  components: {
    SideNav,
    SmallTopNav,
  },
};
</script>

<style lang="scss">
.carteDemande {
  height: 355px;
  border: none;
  border-top: 4px solid rgb(36, 122, 202) !important;
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
