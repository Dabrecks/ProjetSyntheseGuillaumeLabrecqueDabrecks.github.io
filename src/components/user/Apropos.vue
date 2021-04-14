<template>
  <div>
    <Header titreHeader="À propos" />
    <!--Corp de la page  -->
    <div class="corp">
      <b-container fluid>
        <b-row class="introRow">
          <b-col cols="4" class="intro p-0"
            ><img class="logoImgBig" src="../../assets/logoStage.png"
          /></b-col>
          <b-col cols="7" class="introText text-left p-0 mb-0"
            ><p class="mb-0">
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
          <b-col class="cardIntro text-center">
            <b-card
              title="FORCE A VENIR"
              img-src="https://image.freepik.com/free-photo/multi-ethnic-group-young-men-women-studying-indoors_1139-989.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                laudantium sint, et soluta sequi iusto est! Ab voluptate nemo
                odio explicabo recusandae.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col class="cardIntro">
            <b-card
              title="CENTRAIDE"
              img-src="https://image.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                laudantium sint, et soluta sequi iusto est! Ab voluptate nemo
                odio explicabo recusandae.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col class="cardIntro">
            <b-card
              title="FONDATION"
              img-src="https://image.freepik.com/free-photo/strength-people-hands-success-meeting_1150-1690.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                laudantium sint, et soluta sequi iusto est! Ab voluptate nemo
                odio explicabo recusandae.
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <!-- Section description -->
      <b-container fluid class="descriptionSection">
        <b-row>
          <b-col class="descriptifBleu text-left">
            <h4 class="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h4>
            <p class="mb-0">
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
          <b-col class="descriptifImg p-0">
            <b-img
              class="descriptifImg"
              src="https://picsum.photos/600/300/?image=25"
              alt="img"
            ></b-img>
          </b-col>
          <b-col class="descriptifGris text-left"
            ><p class="mb-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tempore est totam sed amet harum consequatur
              repudiandae modi maxime corporis pariatur veniam nihil, eum
              aperiam facere vero odit neque dolorem!
            </p></b-col
          >
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
export default {
  name: "Apropos",
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
$bleuPrimaire: #0d6efd; //bleu officiel de bootstrap
$bleuSecondaire: #5297ff;
$grisArriereUn: #bdbdbd;
$grisArriereSombre: #7a7a7a;
$Blanc: #f8f8f8;
$Noir: #0c0c0c;
$Rouge: #e93939;
$BoxShadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// Corps
.corp {
  padding: 4% 6% 0 6%;
  .introRow {
    margin-bottom: 5%;
    .intro {
      margin: 1%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    .introText {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-weight: bold;
      }
    }
    // ici c'est le logo dans le corp de la page.
    .logoImgBig {
      height: 150px;
    }
  }
}
.cardIntroRow {
  height: auto;
  margin-bottom: 5%;
  .cardIntro {
    display: flex;
    justify-content: center;
    align-content: center;
    border: none;
  }
}
// section de description
.descriptionSection {
  margin-bottom: 5%;
  .descriptifBleu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: $bleuSecondaire;
    padding: 100px 70px;
    color: $Blanc;
  }
  .descriptifImg {
    width: 100%;
  }
  .descriptifGris {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: $grisArriereSombre;
    padding: 120px 30px !important;
    color: $Blanc;
  }
}
</style>
