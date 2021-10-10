<script>
export default {
  name: "HeaderProfil",
  data() {
    return {
      bio: false
    };
  },

  methods: {
    test() {
      this.bio = true;
      console.log(this.bio);

      let audio = new Audio();
      audio.src =
        "https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg";
      audio.play();

      
      setTimeout(() => {
        this.bio = false
        audio.pause()
      }, 1000 * 96)
    }
  }
};
</script>

<template>
  <div>
    <header
      :class="{
        removeHeaderPhoto: bio,
      }"
    >
      <div class="photoProfil">
        <img src="../assets/profil.jpg" alt="Dmitri Chine" @click="test" />
      </div>

      <div class="social">
        <a href="#">
          <i class="fas fa-id-card" @click="test"></i>
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
.removeHeaderPhoto {
  transform: scale(0);
  transition-duration: 4000ms;
}
.test {
  color: black;
}
header {
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
    margin: 100px auto 20px;
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
html,
body {
  width: 100%;
  height: 100%;
  font: 700 1em "News Cycle", sans-serif;
  letter-spacing: 0.15em;
  color: #ff6;
  background: #000;
  overflow: hidden;
  margin: 0;
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
  width: 15em;
  margin: 0 0 0 -7.5em;
  font-size: 200%;
  font-weight: 400;
  color: #4bd5ee;
  opacity: 0;
  -webkit-animation: intro 5s ease-out 4s;
  animation: intro 5s ease-out 4s;
}
.starwars .titles {
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