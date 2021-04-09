<template>
  <div>
    <Header titreHeader="Connexion"/>
    <b-container fluid>
      <div class="corp">
        <b-row class="formulaire">
          <b-col cols="5" class="identification">
            <b-row class="titreFormulaire">
              <h1 class="pl-0">Identification</h1>
            </b-row>
            <b-row class="text-left">
              <div>
                <b-form > <!--@submit="onSubmit" v-if="show"-->
                  <b-form-group
                    id="input-group-1"
                    label="Courriel:"
                    label-for="input-1"
                    description="Vos informations ne seront jamais partagées"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.courriel"
                      type="email"
                      placeholder="Entrer courriel"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="input-group-2"
                    label="Mot de passe:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.password"
                      type="password"
                      placeholder="Entrer le mot de passe"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <!-- <b-form-group id="input-group-3" v-slot="{ ariaDescribedby }">
                    <b-form-checkbox-group
                      v-model="form.checked"
                      id="checkboxes-3"
                      :aria-describedby="ariaDescribedby"
                    >
                      <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    </b-form-checkbox-group> 
                  </b-form-group>-->
                  <b-button 
                      type="submit" 
                      variant="primary" 
                      v-on:click="login()"
                  >
                    Soumettre</b-button
                  >
                </b-form>
              </div>
            </b-row>
          </b-col>
          <!-- Section de droite Nouvel utilisateur -->
          <b-col cols="7" class="nouvelUtilisateur text-left">
            <b-row class="titreFormulaire">
              <h1 class="pl-0">Nouvel utilisateur</h1>
            </b-row>
            <b-row class="text-left">
              <h4>Validation</h4>
            </b-row>
            <b-row class="text-left">
              <!-- Section de gauche -->
              <b-col cols="6" class="testUn pl-0">
                <div>
                  <!-- NOM -->
                  <b-form>
                    <b-form-group
                      id="input-group-3"
                      label="Nom:"
                      label-for="input-3"
                    >
                      <b-form-input
                        id="input-3"
                        type="text"
                        placeholder="Nom"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-form>
                  <!-- USER ID -->
                  <b-form>
                    <b-form-group
                      id="input-group-4"
                      label="Nom d'utilisateur:"
                      label-for="input-4"
                    >
                      <b-form-input
                        id="input-4"
                        type="text"
                        placeholder="Entrer votre nom d'utilisateur"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <!-- Secteur -->
                    <b-form-group
                      id="input-group-5"
                      label="Secteur:"
                      label-for="input-5"
                    >
                      <b-form-select
                        id="input-5"
                        v-model="form.secteurs"
                        :options="secteurs"
                        required
                      >
                      </b-form-select>
                    </b-form-group>
                    <!-- PROFILE -->
                    <b-form-group
                      id="input-group-6"
                      label="Profile:"
                      label-for="input-6"
                    >
                      <b-form-select
                        id="input-6"
                        v-model="form.profiles"
                        :options="profiles"
                        required
                      >
                      </b-form-select>
                    </b-form-group>
                    <!-- COURRIEL -->
                    <b-form-group
                      id="input-group-6"
                      label="Courriel:"
                      label-for="input-6"
                    >
                      <b-form-input
                        id="input-6"
                        type="email"
                        placeholder="Entrer courriel"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <!-- Mot de passe -->
                    <b-form-group
                      id="input-group-7"
                      label="Mot de passe:"
                      label-for="input-7"
                    >
                      <b-form-input
                        id="input-7"
                        type="password"
                        placeholder="Entrer courriel"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <!--Pour la fonction on:click du bas***** v-on:click="loginNew()" -->
                    <b-button 
                      type="submit" 
                      variant="primary" 
                      
                  >
                    Soumettre</b-button
                  >
                  </b-form>
                </div>
              </b-col>
              <!-- Section de droite -->
              <b-col cols="6" class="testDeux pl-0">
                <div>
                  <!-- Prénom -->
                  <b-form>
                    <b-form-group
                      id="input-group-2"
                      label="Prénom:"
                      label-for="input-2"
                    >
                      <b-form-input
                        id="input-2"
                        type="text"
                        placeholder="Entrer votre Prénom"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <!-- Région -->
                    <b-form-group
                      id="input-group-3"
                      label="Région:"
                      label-for="input-3"
                    >
                      <b-form-select
                        id="input-3"
                        v-model="form.regions"
                        :options="regions"
                        required
                      >
                      </b-form-select>
                    </b-form-group>
                    <!-- Salaire -->
                    <b-form-group
                      id="input-group-3"
                      label="Taux Horaire:"
                      label-for="input-3"
                    >
                      <b-form-select
                        id="input-3"
                        v-model="form.salaires"
                        :options="salaires"
                        required
                      >
                      </b-form-select>
                    </b-form-group>
                  </b-form>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <div class="central">
      <b-row>
        <b-col cols="6" class="p-0">
          <b-img
            class="centralImg p-0"
            src="https://image.freepik.com/free-photo/beautiful-young-woman-home-office-working-from-home-teleworking-concept_144627-46787.jpg"
            fluid
            alt="Responsive image"
          ></b-img>
        </b-col>
        <b-col cols="6" class="centralText text-left">
          <p>
            Etiam mattis est in tellus mattis maximus. Etiam non molestie metus.
            Donec quis mauris metus. Cras tempor varius odio, nec varius nisi
            sollicitudin ac. Praesent vitae elementum augue
          </p>
        </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
export default {
  components: {
    Header,
    Footer,
  },
  name: "Connexion",
  data() {
    return {
      form: {
        courriel: "",
        password: "",
        // checked: [],
      },
      regions: [
        { text: "Choisir", value: null },
        "Bas-Saint-Laurent",
        "Saguenay–Lac-Saint-Jean",
        "Capitale-Nationale",
        "Mauricie",
        "Estrie",
        "Montréal",
        "Outaouais",
        "Abitibi-Témiscamingue",
        "Côte-Nord",
        "Nord-du-Québec",
        "Gaspésie–Îles-de-la-Madeleine",
        "Chaudière-Appalaches",
        "Laval",
        "Lanaudière",
        "Laurentides",
        "Montérégie",
      ],
      salaires: [
        { text: "Choisir", value: null },
        "Bénévolat",
        "10$ à 15$/heure",
        "15$ à 20$/heure",
        "20$ à 25$/heure",
        "25$ à 30$/heure",
        "30$ à 35$/heure",
        "35$ à 40$/heure",
      ],
      secteurs: [
        { text: "Choisir", value: null },
        "Administrations publiques",
        "Agriculture, foresterie, pêche et chasse",
        "Arts, spectacles et loisirs",
        "Commerce de détail",
        "Commerce de gros",
        "Construction",
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
      profiles: [
        { text: "Choisir", value: null },
        "Junior",
        "intermédiaire",
        "Sénior",
      ],
      show: true,
    };
  },
  methods: {
    // onSubmit(event) {
    //   event.preventDefault();
    //   alert(JSON.stringify(this.form));
    // },
  //},
  //Gestion des événements, si l'utilisateur entre rien, une alerte doit apparaitre, 
  //s'il entre les bonnes informations, il aura accès à la section ADMIN, ou sera simplement logué.  
  
    login() {
      if (this.form.courriel === "admin@amin.com" && this.form.password === "admin123") { //&& this.input.password == "admin123"
        this.$emit("authenticated", true);
        this.$router.replace({ name: "Validation" });//Si le nom d'usager est bon je retourne au profil.
      } else {
          //this.$router.replace({ name: "Acceuil" });Si le nom d'usager n'est pas le bon je retourne à l'acceuil.
          alert("nom d'utilisateur incorrect");
      }      
    }
  }
};
</script>

<style lang="scss">
.formulaire {
  height: 75vh;
  .identification {
    height: 100%;
    // background-color: cyan;
    .titreFormulaire h1 {
      font-weight: bold;
    }
  }
  .nouvelUtilisateur {
    height: 100%;
    // background-color: blue;
    .titreFormulaire h1 {
      font-weight: bold;
    }
    .testUn {
      height: 40vh;
      // background-color: chartreuse;
    }
    .testDeux {
      height: 40vh;
      // background-color: cyan;
    }
  }
}
.central {
  margin: 5% 7% 0% 7%;
  .centralImg {
    width: 100%;
    padding: 0;
  }
  .centralText {
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 1.5rem;
      color: whitesmoke;
      font-weight: bold;
      padding: 0% 15%;
      margin: 0;
    }
  }
}
</style>
