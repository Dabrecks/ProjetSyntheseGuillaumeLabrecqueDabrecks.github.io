<template>
  <div>
    <Header titreHeader="Connexion"/>
    <b-container fluid>
      <div class="corp">
        <b-row class="formulaireConnexion">
          <b-col cols="3" class="identification">
            <b-row class="titreFormulaire">
              <h1 class="pl-0">Connexion</h1>
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
                      :formatter="formatMax"
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
                      :formatter="formatMax"
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
      
      show: true,
    };
  },
  methods: {
    formatMax(e) {
      return String(e).substring(0,50);
    },
    login() {
      if (this.form.courriel === "admin@admin.com" && this.form.password === "admin123") { //&& this.input.password == "admin123"
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
.formulaireConnexion {
  display: flex;
  justify-content: start;
  align-items: center;
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
    padding: 0% 7%;
    p {
      font-size: 1.5rem;
      color: whitesmoke;
      font-weight: bold;
      margin: 0;
    }
  }
}
</style>
