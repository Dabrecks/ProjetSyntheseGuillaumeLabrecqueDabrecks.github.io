<template>
  <div>
      <Header titreHeader="Nos Partenaires"/>
      <b-container fluid class="corp">
        <b-row class="titre">
          <h1 class="mb-5">Ils nous ont fait confiance</h1>
        </b-row>
        <b-row class="partenaire mb-5">
          <b-col class="cartePartenaire m-2 p-0">
            <div class="imgPartenaire">
              <img src="https://static.wikia.nocookie.net/logopedia/images/6/63/Home_Depot.jpg/revision/latest?cb=20200711014953" alt="homeDepto">
            </div>
            <div class="nomPartenaire">
              <h4>Home Depot</h4>
            </div>
          </b-col>
          <b-col class="cartePartenaire m-2 p-0">
            <div class="imgPartenaire">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8op9Lta3WJ74XUHnYChYE1iGRFi9bYzDWPLOQ4gmqm1SVnPo7nopU5_kgeIPuOmOFEx7Q8iwaZc&usqp=CAU" alt="homeDepto">
            </div>
            <div class="nomPartenaire">
              <h4>CGI</h4>
            </div>
          </b-col>
          <b-col class="cartePartenaire m-2 p-0">
            <div class="imgPartenaire">
              <img src="https://www.randstad.ca/themes/custom/bluex/src/assets/img/logo-bluex.png" alt="homeDepto">
            </div>
            <div class="nomPartenaire">
              <h4>Randstad</h4>
            </div>
          </b-col>
          <b-col class="cartePartenaire m-2 p-0">
            <div class="imgPartenaire">
              <img src="https://pbs.twimg.com/profile_images/965625379384954880/MvSQ3AKR.jpg" alt="homeDepto">
            </div>
            <div class="nomPartenaire">
              <h4>CÉGEP de Trois-Rivièeres</h4>
            </div>
          </b-col>
        </b-row>
      </b-container>   
      <b-container fluid class="full"> 
        <b-row class="messagePartenaire">
          <b-col cols="6" class="messageImgPartenaire p-0">
            <b-img fluid src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
          </b-col>
          <b-col cols="6" class="messageMesPartenaire text-left">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae repudiandae asperiores corporis adipisci sunt voluptates aspernatur, vel dolorem natus cumque praesentium ullam reiciendis quisquam facilis possimus omnis! Vel, maxime minus?</p>
          </b-col>
        </b-row>
      </b-container>
      <Footer />
  </div>
</template>

<script>
import Footer from '../../layout/Footer'
import Header from '../../layout/Header' 
export default {
name: "Partenaires",
   components: {
    Footer,
    Header
  }
}
</script>

<style lang="scss">
.partenaire {
  display: flex;
  justify-content: center;
  align-items: center;
  .cartePartenaire {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    .imgPartenaire img{
      width: 100%;
    }
    .nomPartenaire {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75px;
      h4 {
        font-weight: bold;
        padding: 15px 10px;
        margin-bottom: 0;
      }
    }
  }  
}
.messagePartenaire {
  .messageMesPartenaire {
    background-color: rgb(129, 129, 129);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0 5%;
    p {
      color: whitesmoke;
      font-weight: bold;
    }
  }
}
</style>