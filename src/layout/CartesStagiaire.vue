<template>
    <div id="miniCarte" class="corp">
      <div class="sectionSousCarte">
        <b-row>
          <b-col class="mb-5">
            <h1>Votre futur stagiaire se trouve ici.</h1>
            <p>
              Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
              tellus et elit aliquet, vitae dignissim ligula sodales.
            </p>
          </b-col>
        </b-row>
          <MiniCarteStagiaire />     
        <b-row>
          <b-col>
            <button>Afficher d'autres offres</button>
          </b-col>
        </b-row>
      </div>
    </div>
</template>

<script>
import MiniCarteStagiaire from './MiniCarteStagiaire'
export default {
    name: "CartesStagiaire",
    components: {
    MiniCarteStagiaire,
  },
}
</script>

<style lang="scss">
#miniCarte {
  margin: 5% 6%;
  padding: 0;
  .sectionSousCarte {
    margin-bottom: 5%;
  }
  .sousCarte {
    border: none;
    margin-bottom: 4%;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .cardTitle {
      font-size: 1.5rem;
    }
    .cardSubtitle {
      color: grey;
    }
    .bouttonCarte {
      padding: 5px;
      border: none;
      color: white;
      background-color: blue;
      margin-left: 15px;
    }
  }
  button {
      margin: 3% 0 2% 0;
      padding: 5px 10px 5px 10px;
      border: none;
      color: white;
      background-color: rgb(255, 47, 28);
  }
}
</style>