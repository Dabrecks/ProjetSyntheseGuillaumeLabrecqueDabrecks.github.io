<template>
  <div>
    <Header titreHeader="À propos"/>
    <!--Corp de la page  -->
    <div class="corp">
      <b-container fluid>
        <b-row class="introRow">
          <b-col cols="4" class="intro p-0"
            ><img class="logoImgBig" src="../../assets/logoStage.png"
          /></b-col>
          <b-col cols="7" class="intro text-left p-0 mb-0"
            ><p class="align-bottom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur ratione, nobis deserunt ipsa rem dolor magnam, quam
              tenetur perspiciatis veritatis quidem obcaecati asperiores
              recusandae ab aut placeat est, at qui? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequuntur ratione, nobis deserunt
              ipsa rem dolor magnam, quam tenetur perspiciatis veritatis quidem
              obcaecati asperiores recusandae ab aut placeat est.
            </p></b-col
          >
        </b-row>
        <b-row class="cardIntroRow">
          <b-col class="cardIntro">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col class="cardIntro">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col class="cardIntro">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <!-- Section description -->
      <b-container fluid class="descriptionSection">
        <b-row>
          <b-col class="descriptifBleu text-left">
            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab
              in adipisci natus libero voluptatum animi neque aliquam delectus,
              totam nam dolore temporibus perspiciatis eligendi vel doloremque
              architecto minima qui? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quia ab in adipisci natus libero voluptatum
              animi neque aliquam delectus, totam nam dolore temporibus
              perspiciatis eligendi vel doloremque architecto minima qui?
            </p>
          </b-col>
        </b-row>
        <b-row>
          <!-- align-v="center" -->
          <b-col class="descriptifImg p-0">
            <b-img class="descriptifImg" src="https://picsum.photos/600/300/?image=25" alt="img"></b-img>
          </b-col>
          <b-col class="descriptifGris text-left"
            ><p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tempore est totam sed amet harum consequatur
              repudiandae modi maxime corporis pariatur veniam nihil, eum
              aperiam facere vero odit neque dolorem!
            </p></b-col
          >
        </b-row>
      </b-container>
    </div>
     <Footer/>
  </div>
</template>

<script>

import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
export default {
  name: "Apropos",
   components: {
    Footer,
    Header
  }
};
</script>

<style  lang="scss">
// Corps
.corp {
  padding: 4% 6% 0 6%;
}

.introRow {
  margin-bottom: 5%;
}

.intro {
  margin: 1%;
  display: flex;
  align-items: flex-start;
  justify-content: start;
}
// ici c'est le logo dans le corp de la page.
.logoImgBig {
  height: 150px;
}

.cardIntroRow {
  margin-bottom: 5%;
}

.cardIntro {
  margin: 1%;
  padding: auto;
}
// section de description
.descriptionSection {
  margin-bottom: 5%;
}

.descriptifBleu {
  background-color: rgb(71, 71, 209);
  padding: 75px 45px ;
  color: white;
}
.descriptifImg {
  width: 100%;
}
.descriptifGris {
  background-color: gray;
  padding: 120px 30px !important;
  color: white;
}

</style>
