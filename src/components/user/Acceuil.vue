<template>
  <div> 
    <HeaderFull />
    <CartesStage />
    <SectionPleineLargeur />
    <CartesStagiaire />
    <SectionPleineLargeurI />
    <Footer />
  </div>
</template>

<script>
import Footer from '../../layout/Footer'
import HeaderFull from '../../layout/HeaderFull'
import SectionPleineLargeur from '../../layout/SectionPleineLargeur'
import SectionPleineLargeurI from '../../layout/SectionPleineLargeurI'
import CartesStagiaire from '../../layout/CartesStagiaire'
import CartesStage from '../../layout/CartesStage'
export default {
 name: "Acceui",   
  components: {
    Footer,
    HeaderFull,
    SectionPleineLargeur,
    SectionPleineLargeurI,
    CartesStagiaire,
    CartesStage,
   },
}
</script>

<style lang="scss">

</style>