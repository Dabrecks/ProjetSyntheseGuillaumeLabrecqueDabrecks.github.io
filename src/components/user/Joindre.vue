<template>
  <div>
      <Header titreHeader="Nous joindre"/>
      <b-container fluid class="corp">
        <b-row class="titre">
          <h1 class="mb-5">Vous avez des questions?</h1>
        </b-row>
        <b-row class="formulaireCourriel text-left ml-1">
          <b-form>
            <b-form-group
              id="input-email"
              v-model="email"
              label="Adresse courriel:"
              label-for="inputEmailJoindre"
            >
              <b-form-input
                id="inputEmailJoindre"
                type="email"
                placeholder="Entrer votre courriel"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-nom" label="Votre nom:" label-for="inputNomJoindre">
              <b-form-input
                id="inputNomJoindre"
                v-model="nom"
                placeholder="Entrer votre nom"
                required
              ></b-form-input>
            </b-form-group>

            <div>
              <b-form-textarea
                v-model="message"
                id="textarea-rows"
                placeholder="Votre message"
                rows="8"
              ></b-form-textarea>
            </div>

            <!-- Envoyer un message alerte dans ce cas -->
            <b-button v-on:click="merci" class="mt-3" type="submit" variant="primary">Envoyer</b-button>
          </b-form>
        </b-row>
      </b-container>  
      <Footer />
  </div>
</template>

<script>
import Footer from '../../layout/Footer'
import Header from '../../layout/Header' 
export default {
name: "Joindre",
   components: {
    Footer,
    Header,
   },
    data()  {
      // je prends les information du la personne
      return {
      email:"",
      nom: "",
      message:""

      }
    },
    // Ma méthode pour déclancher l'alerte et donner un message personnalisé
    methods: {
      merci: function (event) {
        alert('Merci ' + this.nom + ', nous vous répondront dans les plus bref délais')
          if (event) {
        alert(event.target.tagName)
      }
    }
  }

  }
</script>

<style lang="scss">

</style>