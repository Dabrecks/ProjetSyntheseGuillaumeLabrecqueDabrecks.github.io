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
              <h1>AjoutStage</h1>
            </b-row>
            <!-- <b-form @submit="onSubmit" v-if="show"> -->
                <b-row class="formullaireAjout">
                    <b-col cols="6" class="sectionGauche">
                        <b-row class="nom">
                            <b-col>
                                <b-form-group label="Programme suivi:">
                                    <b-form-input type="text"/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row class="tel">
                            <b-col>
                                <b-form-group label="Numéro de téléphone:">
                                    <b-form-input type="number"/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row class="email">
                            <b-col>
                                <b-form-group label="Adresse Courriel:">
                                    <b-form-input type="email"/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row class="ville">
                            <b-col>
                                <b-form-group label="Ville: ">
                                    <b-form-input type="text"/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="6" class="sectionDroite">
                        <b-row class="position">     
                            <b-col>
                                <b-form-group label="Programme: ">
                                    <b-form-input type="text"/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row class="ecole">
                            <b-col>
                                <b-form-group label="Établissement scolaire: ">
                                    <b-form-input type="text"/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row class="formation">
                            <b-col>
                                <b-form-group label="Programme suivi">
                                    <b-form-select :options="formation" class="pl-0"></b-form-select><!-- v-model="formationChoisie"  -->
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row class="date">
                            <b-col cols="6">
                                <div>
                                    <b-form-group label="Date de début du stage">
                                        <b-form-datepicker id="datepickerDebut" class="mb-2"></b-form-datepicker><!-- v-model="dateDebut" -->
                                    </b-form-group>
                                </div>
                            </b-col>
                            <b-col cols="6">
                                <div>
                                    <b-form-group label="Date de fin du stage">
                                        <b-form-datepicker id="datepickerFin" class="mb-2"></b-form-datepicker><!-- v-model="dateFin" -->
                                    </b-form-group>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="commentaire">
                    <b-col cols="12">
                        <b-form-group label="Décrivez-vous!">
                        <b-form-textarea id="textarea-large" size="lg"></b-form-textarea>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Soumettre</b-button>
                    </b-col>
                </b-row>
            <!-- </b-form> -->
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
name: "AjoutStage",
components: {
    SideNav,
    SmallTopNav,
  },
  data: function() {
    return {
        // form: {
        //     dateDebut: "",
        //     dateFin: "",
        //     formationChoisie: "",
        // },
        
        formation: [
        { text: "Choisir", value: null },
        "Administrations publiques",
        "Agriculture, foresterie, pêche et chasse",
        "Arts, spectacles et loisirs",
        "Commerce de détail",
        "Commerce de gros",
        "Construction",
        "Développement web",
        "Extraction minière, et extraction de pétrole et de gaz",
        "Fabrication",
        "Finance et assurances",
        "Gestion de sociétés et d’entreprises",
        "Hébergement et services de restauration",
        "Industrie de l’information et industrie culturelle",
        "Services administratifs",
        "gestion des déchets",
        "Services d’enseignement",
        "Services de restauration et débit de boisson",
        "Services immobiliers",
        "Services scientifiques et techniques",
        "Services publics",
        "Santé et assistance sociale",
        "Transport et entreposage",
        "Transport par camion",
      ],
      show: true,
      stages: json.stages, // aller chercher nos données du fichier JSON
    };
    },
    // methods: {
    //   onSubmit(event) {
    //     event.preventDefault()
    //     alert(JSON.stringify(this.form))
    //   }
    // },
}
</script>

<style lang="scss">
.formullaireAjout {
    p{
        color: black;
    }
}
</style>