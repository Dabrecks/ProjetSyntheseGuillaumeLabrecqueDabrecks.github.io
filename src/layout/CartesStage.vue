<template>
       <div id="miniCarte" class="corp">
      <div class="sectionSousCarte">
        <b-row>
          <b-col class="mb-5">
            <h1>Tu es à la recherche d'un stage?</h1>
            <p>
              Pellentesque vehicula fermentum turpis eu cursus. Cras convallis
              tellus et elit aliquet, vitae dignissim ligula sodales.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <!-- carte 1 -->
          <b-col>
            <div class="sousCarte text-left">
              <b-card title="Card title" sub-title="Card subtitle">
                <b-card-text>
                  Some quick example text to build on the and make up the bulk
                  of the card's content.
                </b-card-text>
                <a href="#" class="cardLink">Détail</a>
                <button class="bouttonCarte" href="#" variant="primary">
                  Postuler
                </button>
              </b-card>
            </div>
          </b-col>
          <!-- carte 2 -->
          <b-col>
            <div class="sousCarte text-left">
              <b-card title="Card title" sub-title="Card subtitle">
                <b-card-text>
                  Some quick example text to build on the and make up the bulk
                  of the card's content.
                </b-card-text>
                <a href="#" class="cardLink">Détail</a>
                <button class="bouttonCarte" href="#" variant="primary">
                  Postuler
                </button>
              </b-card>
            </div>
          </b-col>
          <!-- carte 3 -->
          <b-col>
            <div class="sousCarte text-left">
              <b-card title="Card title" sub-title="Card subtitle">
                <b-card-text>
                  Some quick example text to build on the and make up the bulk
                  of the card's content.
                </b-card-text>
                <a href="#" class="cardLink">Détail</a>
                <button class="bouttonCarte" href="#" variant="primary">
                  Postuler
                </button>
              </b-card>
            </div>
          </b-col>
          <!-- carte 4 -->
          <b-col>
            <div class="sousCarte text-left">
              <b-card title="Card title" sub-title="Card subtitle">
                <b-card-text>
                  Some quick example text to build on the and make up the bulk
                  of the card's content.
                </b-card-text>
                <a href="#" class="cardLink">Détail</a>
                <button class="bouttonCarte" href="#" variant="primary">
                  Postuler
                </button>
              </b-card>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <button>Afficher d'autres offres</button>
          </b-col>
        </b-row>
      </div>
    </div>
</template>

<script>
export default {
    name: "CartesStage",
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