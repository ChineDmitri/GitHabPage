<script>
import Projet from "../components/Projet.vue";

export default {
  name: "Home",

  components: {
    Projet
  },

  data() {
    return {
      bio: false,
      audio: undefined,
      projets: [
        {
          title: "Title 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fuga provident velit, reiciendis modi asperiores eos nobis numquam quis enim expedita maxime a culpa necessitatibus sequi odit voluptatum dolorem non.",
          imagePreview: "/img/img.jpg",
          stacksImg: [
            "/img/1200px-MySQL.svg.png",
            "/img/1200px-Vue.js_Logo_2.svg.png",
            "/img/expressjslogo.png",
            "/img/Noda.png"
          ]
        },
        {
          title: "Title 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fuga provident velit, reiciendis modi asperiores eos nobis numquam quis enim expedita maxime a culpa necessitatibus sequi odit voluptatum dolorem non.",
          imagePreview: "/img/img.jpg",
          stacksImg: [
            "/img/1200px-MySQL.svg.png",
            "/img/1200px-Vue.js_Logo_2.svg.png",
            "/img/expressjslogo.png",
            "/img/Noda.png"
          ]
        },
        {
          title: "Title 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fuga provident velit, reiciendis modi asperiores eos nobis numquam quis enim expedita maxime a culpa necessitatibus sequi odit voluptatum dolorem non.",
          imagePreview: "/img/img.jpg",
          stacksImg: [
            "/img/1200px-MySQL.svg.png",
            "/img/1200px-Vue.js_Logo_2.svg.png",
            "/img/expressjslogo.png",
            "/img/Noda.png"
          ]
        },
        {
          title: "Title 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fuga provident velit, reiciendis modi asperiores eos nobis numquam quis enim expedita maxime a culpa necessitatibus sequi odit voluptatum dolorem non.",
          imagePreview: "/img/ae.jpg",
          stacksImg: ["/img/selenium.png", "/img/Noda.png"]
        }
      ]
    };
  },

  methods: {
    startBio() {
      this.bio = !this.bio;
      console.log(this.bio);

      const body = document.getElementsByTagName("body")[0];
      body.classList.add("fixedBody");

      const mainContent = document.getElementById("mainContent");
      mainContent.classList.add("fixedMainContent");

      this.audio = new Audio();
      this.audio.src =
        "https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg";
      this.audio.play();

      setTimeout(() => {
        this.bio = false;
        this.audio.pause();

        const body = document.getElementsByTagName("body")[0];
        body.classList.remove("fixedBody");

        const mainContent = document.getElementById("mainContent");
        mainContent.classList.remove("fixedMainContent");
      }, 1000 * 96);
    },

    stopBio() {
      this.bio = this.false;
      this.audio.pause();

      const body = document.getElementsByTagName("body")[0];
      body.classList.remove("fixedBody");

      const mainContent = document.getElementById("mainContent");
      mainContent.classList.remove("fixedMainContent");
    }
  }
};
</script>

<template>
  <div id="mainContent">
    <button
      id="stopBio"
      v-if="bio"
      @click="stopBio"
      data-aos="fade-down"
      data-aos-duration="3000ms"
    >
      Arreter les titres
    </button>
    <header
      :class="{
        removeHeaderPhoto: bio,
        headerOpac: bio,
      }"
    >
      <div
        class="photoProfil"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-easing="ease-out"
        data-aos-once="true"
      >
        <img src="../assets/profil.jpg" alt="Dmitri Chine" @click="startBio" />
      </div>

      <div class="social">
        <a href="#">
          <i class="fas fa-id-card" @click="startBio"></i>
        </a>
        <a href="#" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://wa.me/33637753064">
          <i class="fab fa-whatsapp-square"></i>
        </a>
      </div>
    </header>

    <main data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
      <Projet
        v-for="(projet, idx) in projets"
        :key="projet"
        :title="projet.title"
        :imagePreview="projet.imagePreview"
        :description="projet.description"
        :stacksImg="projet.stacksImg"
        :bio="bio"
        :idx="idx"
      ></Projet>
    </main>

    <article class="starwars" v-if="bio === true">
      <div class="animation">
        <section class="intro">
          A long time ago, in a galaxy far,
          <br />
          far away....
        </section>

        <section class="titles">
          <div contenteditable="true" spellcheck="false">
            <p>
              La mort guette les habitants de Malbolg. Depuis la Guerre des
              Clones, les radiations et l'air toxique empoisonnent lentement les
              rares survivants.
            </p>

            <p>
              Organisés par le mystérieux Cartel des Mécanos, quelques rescapés
              ont malgré tout réussi à bâtir la ville de GROUND ZERO, dernier
              havre de paix au milieu de la dévastation.
            </p>

            <p>
              Assaillie sans répit par les insectes mutants et les bandes
              sauvages de pillards, la petite communauté ne doit son salut
              qu'aux fouilles d'une poignée de courageux récupérateurs....
            </p>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<style lang="scss">
.headerOpac {
  opacity: 0;
  transition-duration: 1500ms;
}
main {
  @media screen and (max-width: 425px) {
    width: calc(100% - 25px);
    margin: 10px auto;
  }
  transition-duration: 1500ms;
  position: relative;
  display: flex;
  width: 700px;
  flex-direction: column;
  margin: 50px auto;
}
#stopBio {
  @media screen and (max-width: 425px) {
    top: -20px;
  }
  opacity: 1;
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  box-shadow: 0px 0px 20px #252575;
  border-radius: 10px;
  border: 3px solid transparent;
  background: #2a333b;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px #2a552a;
    transform: scale(1.05);
  }
}
.removeHeaderPhoto {
  transform: scale(0);
  transition-duration: 4000ms;
}
.test {
  color: black;
}
header {
  opacity: 1;
  position: relative;
  top: 0;
  transition-duration: 3000ms;
  .photoProfil {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid transparent;
    background: linear-gradient(white, white),
      radial-gradient(circle at top left, #a0c5e8, #68e0cf);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 0px 0px 20px #252575;
    // padding: 5px;
    margin: 50px auto 20px;
    img {
      object-fit: cover;
      width: 200px;
      height: 200px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .social {
    // margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    color: black;
    font-size: 2rem;
    a {
      color: #2a333b;
    }
    i {
      &:hover {
        transform: scale(1.05);
      }
      margin: 0 10px;
    }
  }
}

@import url(https://fonts.googleapis.com/css?family=News+Cycle:400,700);

body {
  // width: 100%;
  // height: 100%;
  font: 700 1em "News Cycle", sans-serif;
  // letter-spacing: 0.15em;
  color: #ff6;
  background: #000;
  // overflow: hidden;
  margin: 0;
  position: relative;
  top: 0;
}
.fixedBody {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.fixedMainContent {
  height: calc(100vh - 100px);
}

.starwars section {
  position: absolute;
  top: 45%;
  left: 50%;
  z-index: 1;
}
.starwars .start {
  font-size: 200%;
  width: 14em;
  margin: -4em 0 0 -7em;
  text-align: center;
  cursor: pointer;
}
.starwars .start span {
  color: #ffff66;
}
.starwars .intro {
  @media screen and (max-width: 425px) {
    font-size: 1rem;
  }
  width: 15em;
  margin: 0 0 0 -7.5em;
  font-size: 200%;
  font-weight: 400;
  color: #4bd5ee;
  opacity: 0;
  -webkit-animation: intro 5s ease-out 3s;
  animation: intro 5s ease-out 3s;
}
.starwars .titles {
  @media screen and (max-width: 425px) {
    font-size: 1.3rem;
    bottom: -25px;
  }
  width: 14.65em;
  color: #ffff66;
  margin: 0 0 0 -7.325em;
  top: auto;
  bottom: 0;
  height: 50em;
  font-size: 350%;
  text-align: justify;
  overflow: hidden;
  -webkit-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -ms-transform: perspective(300px) rotateX(25deg);
  -webkit-transform: perspective(300px) rotateX(25deg);
  transform: perspective(300px) rotateX(25deg);
}
.starwars .titles > div {
  position: absolute;
  top: 100%;
  -webkit-animation: titles 81s linear 5.5s;
  animation: titles 81s linear 5.5s;
}
.starwars .titles > div > p {
  margin: 1.35em 0 1.85em 0;
  line-height: 1.35em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

@-webkit-keyframes intro {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes intro {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes logo {
  0% {
    width: 18em;
    margin: -9em 0 0 -9em;
    -ms-transform: scale(2.75);
    -webkit-transform: scale(2.75);
    transform: scale(2.75);
    opacity: 1;
  }
  50% {
    opacity: 1;
    width: 18em;
    margin: -9em 0 0 -9em;
  }
  100% {
    -ms-transform: scale(0.1);
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    opacity: 0;
    width: 18em;
    margin: -9em 0 0 -9em;
  }
}
@keyframes logo {
  0% {
    width: 18em;
    margin: -9em 0 0 -9em;
    -ms-transform: scale(2.75);
    -webkit-transform: scale(2.75);
    transform: scale(2.75);
    opacity: 1;
  }
  50% {
    opacity: 1;
    width: 18em;
    margin: -9em 0 0 -9em;
  }
  100% {
    -ms-transform: scale(0.1);
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    opacity: 0;
    width: 18em;
    margin: -9em 0 0 -9em;
  }
}
@-webkit-keyframes titles {
  0% {
    top: 100%;
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    top: 20%;
    opacity: 0;
  }
}
@keyframes titles {
  0% {
    top: 100%;
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    top: 20%;
    opacity: 0;
  }
}
</style>