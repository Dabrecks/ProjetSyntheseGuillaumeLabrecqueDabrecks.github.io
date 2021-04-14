<template>
  <div class="footer">
    <div class="offreEmploi">
    </div>
    <b-container fluid class="footerList text-left">
      <b-row>
        <b-col class="p-1">
          <p>Ils sont à la recherche d'un stage</p>
        </b-col>
      </b-row>
      <b-row class="liste">
        <b-col class="p-1">
          <ul class="p-0">
            <li><a>Graphic design</a></li>
            <li>Designer jobs</li>
            <li>Frontend Developer jobs</li>
            <li>Developer jobs</li>
          </ul>
        </b-col>
        <b-col>
          <ul class="p-0">
            <li>Graphic design</li>
            <li>Designer jobs</li>
            <li>Frontend Developer jobs</li>
            <li>Developer jobs</li>
          </ul>
        </b-col>
        <b-col>
          <ul class="p-0">
            <li>Graphic design</li>
            <li>Designer jobs</li>
            <li>Frontend Developer jobs</li>
            <li>Developer jobs</li>
          </ul>
        </b-col>
        <b-col>
          <ul class="p-0">
            <li>Graphic design</li>
            <li>Designer jobs</li>
            <li>Frontend Developer jobs</li>
            <li>Developer jobs</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="basPage text-left">
      <b-row align-v="center">
      <b-col class="basPageGauche">
        <p class="mb-0">&#169; EnStage Projet éducationnel</p>
      </b-col>
      <b-col class="basPageDroite">
        <ul class="basPageListe">
          <router-link to="/">
            <li class="basPageElement"><a href="#">Accueil</a></li>
          </router-link> 
          <router-link to="/Apropos">
            <li class="basPageElement"><a href="#">À propos</a></li>
          </router-link>  
          <router-link to="/Confidentialite">
            <li class="basPageElement"><a href="#">Confidentialité</a></li>
          </router-link>
          <router-link to="/Joindre">
            <li class="basPageElement"><a href="#">Nous joindre</a></li>
          </router-link>   
          <router-link to="/Partenaires">
            <li class="basPageElement"><a href="#">Partenaires</a></li>
          </router-link>
        </ul>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
//mes variables scss
$bleuPrimaire: #0d6efd; //bleu officiel de bootstrap
$bleuSecondaire: #5297ff;
$grisArriereUn: #bdbdbd;
$grisArriereSombre: #7a7a7a;
$Blanc: #f8f8f8;
$Noir: #0c0c0c;
$Rouge: #e93939;
$BoxShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
/*  bannière */
.offreEmploi {
  margin-top: 30px;
  height: 20vh;
  margin: 0% 6%;
  background-image: url("../assets/offre.jpg");
}
.footer {
  margin-top: 5%;
  width: 100%;
}
.footerList {
  width: 100%;
  background-color: $grisArriereUn;
  p {
    padding: 2% 0 0 12%;
    margin-bottom: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .liste {
    padding: 1% 12%;
  }
  ul {
    list-style-type: none;
  }
}

.basPage {
  .basPageGauche {
    float: left;
    padding-left: 6%;
  }
  .basPageDroite {
    float: right;
    padding-right: 6%;
    .basPageListe{
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      .basPageElement {
        float: right;
        a {
          display: block;
          color: $Noir;
          padding: 15px;
          text-decoration: none;
          a:hover {
          color:  $bleuPrimaire;
        }
        }
        
      }
    }
  }
}





</style>
