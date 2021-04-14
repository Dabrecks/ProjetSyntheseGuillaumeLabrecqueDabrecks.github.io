<template>
  <div class="sectionCentre">
    <b-row>
      <b-col cols="6" class="centralImg">
        <b-img
          src="https://image.freepik.com/free-photo/beautiful-young-woman-home-office-working-from-home-teleworking-concept_144627-46787.jpg"
          fluid
          alt="centralImg"
        ></b-img>
      </b-col>
      <b-col cols="6" class="centralText text-left">
        <h1 class="centreTitre">Pourquoi publier<br />une offre de stage?</h1>
        <p class="centreText">
          Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
          tellus <br />et elit aliquet, vitae dignissim ligula sodales.
        </p>
        <ul class="centreListe">
          <li class="">Cras convallis tellus et elit aliquet 20%</li>
          <li>Suspendisse tincidunt vulputate leo in sollicitudin</li>
          <li>Morbi sodales risus quis orci hendrerit semper</li>
        </ul>
        <router-link to="/Connexion">
          <button>Publier une offre de stage maintenant!</button>
        </router-link>  
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: "SectionPleineLargeur",
};
</script>

<style lang="scss">
//mes variables
$bleuPrimaire: #0d6efd; //bleu officiel de bootstrap
$bleuSecondaire: #5297ff;
$grisArriereUn: #bdbdbd;
$Blanc: #f8f8f8;

.sectionCentre {
    overflow:hidden;
  .centralImg {
    padding: 0 !important;
    img {
      width: 100%;
    }
  }
  .centralText {
      width: 100%;
    background-color: $grisArriereUn;
    padding: 5% 3% 2% 3%;
    .centreListe {
      // padding-left: 3% !important;
      list-style-position: inside;
      margin: 0 0 15px 0;
      padding: 0;
      li {
        padding-left: -20px;
        font-weight: bold;
      }
    }
    button {
      padding: 10px;
      border: none;
      color: $Blanc;
      background-color: $bleuPrimaire;
    }
  }
}
</style>
