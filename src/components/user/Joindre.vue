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
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input
                id="input-2"
                placeholder="Enter name"
                required
              ></b-form-input>
            </b-form-group>

            <div>
              <b-form-textarea
                id="textarea-rows"
                placeholder="Tall textarea"
                rows="8"
              ></b-form-textarea>
            </div>


            <b-button class="mt-3" type="submit" variant="primary">Submit</b-button>
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
    Header
  }
}
</script>

<style lang="scss">

</style>