<template>
  <div>
    <Header titreHeader="Inscription"/>
    <b-container fluid>
      <div class="corp">
        <b-row class="formulaire">
          <!-- Section de droite Nouvel utilisateur -->
          <b-col cols="7" class="nouvelUtilisateur text-left">
            <b-row class="titreFormulaire">
              <h1 class="pl-0">Nouvel utilisateur</h1>
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
                        v-model="form.nom"
                        type="text"
                        placeholder="Nom"
                        :formatter="formatMax"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </b-form>
                  <!-- EMAIL -->
                  <b-form>
                    <b-form-group
                      id="input-group-4"
                      label="Adresse courriel:"
                      label-for="input-4"
                    >
                      <b-form-input
                        id="input-4"
                        v-model="form.courriel"
                        type="email"
                        placeholder="Entrer votre adresse courriel"
                        :formatter="formatMax"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <!-- Mot de passe -->
                    <b-form-group
                      id="input-group-6"
                      label="Mot de passe:"
                      label-for="input-6"
                    >
                      <b-form-input
                        id="input-6"
                        v-model="form.password"
                        type="password"
                        placeholder="saisir votre mot de passe"
                        :formatter="formatMax"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <!--Pour la fonction on:click du bas***** v-on:click="loginNew()" -->
                    <b-button 
                      type="submit" 
                      variant="primary" 
                      v-on:click="subscribe()"
                    >
                      Soumettre</b-button
                    >
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
  name: "Inscription",
  data() {
    return {
      form: {
        nom: "",
        courriel: "",
        password: "",
        // checked: [],
      },
      show: true,
    };
  },
  methods: {
    // pas plus de 50 caractéres
    formatMax(e) {
      return String(e).substring(0,50);
    },
  
    subscribe() {
      if (this.form.courriel != "" && this.form.courriel != "" && this.form.password != "") { //&& this.input.password == "admin123"
        this.$emit("authenticated", true);
        this.$router.replace({ name: "Validation" });//Si le nom d'usager est bon je retourne au profil.
      } else {
          alert("nom d'utilisateur incorrect");
      }      
    }
  }
};
</script>

<style lang="scss">
.formulaire {
  .identification {
    // background-color: cyan;
    .titreFormulaire h1 {
      font-weight: bold;
    }
  }
  .nouvelUtilisateur {
    // background-color: blue;
    .titreFormulaire h1 {
      font-weight: bold;
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
      padding: 0
      % 15%;
      margin: 0;
    }
  }
}
</style>
