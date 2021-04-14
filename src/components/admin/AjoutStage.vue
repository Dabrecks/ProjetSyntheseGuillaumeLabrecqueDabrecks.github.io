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
              <h1>Créer un stage</h1>
            </b-row>
            <b-form @submit="createStage">
              <b-row class="formullaireAjout">
                <b-col cols="6" class="sectionGauche">
                  <b-row class="nom">
                    <b-col>
                      <b-form-group label="Nom de l'entreprise:">
                        <b-form-input v-model="entreprise" type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="tel">
                    <b-col>
                      <b-form-group label="Numéro de téléphone:">
                        <b-form-input v-model="telephone" type="number" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="email">
                    <b-col>
                      <b-form-group label="Adresse Courriel:">
                        <b-form-input v-model="courriel" type="email" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="ville">
                    <b-col>
                      <b-form-group label="Ville: ">
                        <b-form-input v-model="ville" courriel type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="6" class="sectionDroite">
                  <b-row class="position">
                    <b-col>
                      <b-form-group label="Titre du stage: ">
                        <b-form-input v-model="poste" type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="formation">
                    <b-col>
                      <b-form-group label="Secteur">
                        <b-form-select
                          v-model="secteur"
                          :options="formation"
                          class="pl-0"
                        ></b-form-select
                        >
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="date">
                    <b-col cols="6">
                      <div>
                        <b-form-group label="Date de début du stage">
                          <b-form-datepicker
                            v-model="debut"
                            id="datepickerDebut"
                            class="mb-2"
                          ></b-form-datepicker
                          >
                        </b-form-group>
                        <b-form-checkbox
                          id="remunere"
                          v-model="paye"
                          name="checkbox-1"
                          value="true"
                          unchecked-value="false"
                        >
                          Rémunéré
                        </b-form-checkbox>
                        <b-form-checkbox
                          id="horaire"
                          v-model="horaire"
                          name="horaire"
                          value="Temps partiel"
                          unchecked-value="Temps plein"
                        >
                          Temps partiel
                        </b-form-checkbox>
                      </div>
                    </b-col>
                    <b-col cols="6">
                      <div>
                        <b-form-group label="Date de fin du stage">
                          <b-form-datepicker
                            v-model="fin"
                            id="datepickerFin"
                            class="mb-2"
                          ></b-form-datepicker
                          ><!-- v-model="dateFin" -->
                        </b-form-group>
                      </div>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="commentaire">
                <b-col cols="12">
                  <b-form-group label="Décrivez-vous!">
                    <b-form-textarea
                      v-model="description"
                      id="textarea-large"
                      size="lg"
                    ></b-form-textarea>
                  </b-form-group>
                  <b-button type="submit" variant="primary">Soumettre</b-button>
                </b-col>
              </b-row>
            </b-form>
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
import { v4 as uuidv4 } from 'uuid';
export default {
  name: "AjoutStage",
  components: {
    SideNav,
    SmallTopNav,
  },
  data: function() {
    return {
        entreprise: "",
        telephone: "",
        courriel: "",
        ville: "",
        poste: "",
        secteur: "",
        debut: "",
        fin: "",
        paye: false,
        horaire: "",
        description: "",

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
      stages: json.stages, // aller chercher nos données du fichier JSON
    };
  },
//   Ajout
  methods: {
        createStage(e) {
            e.preventDefault();
            const newStage = {
                stageId: uuidv4(),
                entreprise: this.entreprise,
                telephone: this.telephone,
                courriel: this.courriel,
                ville: this.ville,
                poste: this.poste,
                secteur: this.secteur,
                debut: this.debut,
                fin: this.fin,
                paye: this.paye,
                horaire: this.horaire,
                description: this.description,
                vedette: false,
                valide: false,
                visible: true,
            }
            console.log(newStage);
        },
        ajouterStage() {
            this.stages = [...this.stages, this.newStage];
        }
    }
};
</script>

<style lang="scss">
.formullaireAjout {
  p {
    color: black;
  }
}
</style>
