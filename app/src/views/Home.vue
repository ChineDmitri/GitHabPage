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
        // 7
        {
          title: "Saisie semi-automatique pour attestation d'employeur",
          description: `Le script permet de saisir les donné dans les inputs correspondants sur le site Pôle Emploi (espace déclarations et cotisations) qui viennent d'Excel pour l'édition attestation d'employer.

En Excel, appliqué plusieurs formule (calcule le solde de base, date de paye pour chaque mois, dernier jour travaillé payé, etc.)`,
          imagePreview: "/img/ae.jpg",
          altImg: "Attestation d'employer - Pôle emploi",
          gitHub: "https://github.com/ChineDmitri/Selenium_LE-GADIPLE-SEC_AE",
          site: null,
          stacks: [
            {
              img: "/img/selenium.png",
              altImg: "Selenium"
            },
            {
              img: "/img/Noda.png",
              altImg: "Node.Js"
            },
            {
              img: "/img/Excel.png",
              altImg: "Excel"
            }
          ]
        },
        // 6
        {
          title: "Réseau social d’entreprise",
          description: `Le projet consistait à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a laissé libre cours à son imagination pour les fonctionnalités du réseau et a imaginé plusieurs briques pour favoriser les échanges entre collègues.
            
            Compte pour test sur le projet déployé:
User 
Login: user1@groupomania.fr 
Password: Groupomania1

Moderator 
Login: moderator@groupomania.fr 
Password: Groupomania1

Admin 
Login: admin1@groupomania.fr 
Password: Groupomania1`,
          imagePreview: "/img/groupomania.png",
          altImg: "Réseau social pour l’entreprise - Gropomania",
          gitHub: "https://github.com/ChineDmitri/DmitriChine_7_11072021",
          site: "https://dcdev-groupomania.herokuapp.com/",
          stacks: [
            {
              img: "/img/1200px-MySQL.svg.png",
              altImg: "MySQL"
            },
            {
              img: "/img/1200px-Vue.js_Logo_2.svg.png",
              altImg: "Vue.Js"
            },
            {
              img: "/img/expressjslogo.png",
              altImg: "Express.Js"
            },
            {
              img: "/img/Noda.png",
              alaltImgt: "Node.Js"
            }
          ]
        },
        // 5
        {
          title: "API sécurisée pour une application d'avis gastronomiques",
          description: `Développé API sécurisé pour une application web de critique des sauces piquantes appelée « Hot Takes » 
            
PS. Le front-end de l'application a été développé par un autre développeur à l'aide d'Angular et a été précompilé après des tests internes.`,
          imagePreview: "/img/p6.png",
          altImg:
            "API sécurisée pour une application d'avis gastronomiques - Piiquante",
          gitHub: "https://github.com/ChineDmitri/DmitriChine_6_30052021",
          site: null,
          stacks: [
            {
              img: "/img/MongoDB-Logo.png",
              altImg: "MongoDB"
            },
            {
              img: "/img/expressjslogo.png",
              altImg: "Express.Js"
            },
            {
              img: "/img/Noda.png",
              altImg: "Node.Js"
            }
          ]
        },
        // 4
        {
          title: "Site e-commerce en JavaScript",
          description: `Front-end developpé:

Une page d’accueil montrant (de manière dynamique) tous les articles disponibles à la vente.

Une page “produit” qui affiche (de manière dynamique) les détails du produit sur lequel l'utilisateur a cliqué depuis la page d’accueil. Depuis cette page, l’utilisateur peut sélectionner option pour le produit, et ajouter le à son panier.

Une page “panier”. Celle-ci contient plusieurs parties : a) Un résumé des produits dans le panier, le prix total et la possibilité de supprimé produit sélectionné. b) Un formulaire permettant de passer une commande (les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end).

Une page “confirmation” avec message de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant l'identifiant de commande envoyé par l’API.

Pour ce projet,j'ai utilisée que du code JavaScript pur.`,
          imagePreview: "/img/orinoco.png",
          altImg: "Site e-commerce en JavaScript - Orinoco",
          gitHub: "https://github.com/ChineDmitri/DmitriChine_5_23042021",
          site: "http://orinoco.42web.io/",
          stacks: [
            {
              img: "/img/html-5.png",
              altImg: "HTML5"
            },
            {
              img: "/img/css-3.png",
              altImg: "CSS3"
            },
            {
              img: "/img/js.png",
              altImg: "JavaScript"
            }
          ]
        },
        // 3
        {
          title: "Optimisation un site existant",
          description: `Analyse de l’état actuel de SEO du site fourni.
            
Amélioration du SEO du site.
            
Accélérer la vitesse de chargemen et comparaison des résultats.`,
          imagePreview: "/img/lachouetteagence.png",
          altImg: "Optimisation un site existant - La Choutte Agence",
          gitHub: "https://github.com/ChineDmitri/DmitriChine_4_13032021",
          site: "https://chinedmitri.github.io/DmitriChine_4_13032021/",
          stacks: [
            {
              img: "/img/html-5.png",
              altImg: "HTML5"
            },
            {
              img: "/img/css-3.png",
              altImg: "CSS3"
            }
          ]
        },
        // 2
        {
          title: "Dynamisez web site avec des animations CSS",
          description: `Ohmyfood! est une entreprise de commande de repas en ligne. Notre concept permet aux
utilisateurs de composer leur propre menu et réduire leur temps d’attente dans les
restaurants car leur menu est préparé à l’avance. Plus de perte de temps à consulter la carte!
            
Les effets accessibles au clic ou au survol. Ils utilisent les animations ou transitions CSS, pas de JavaScript ni de librairie.`,
          imagePreview: "/img/ohmyfood.png",
          altImg: "Dynamisez web site avec des animations CSS - OhMyFood",
          gitHub: "https://github.com/ChineDmitri/DmitriChine_3_15022021",
          site: "https://chinedmitri.github.io/DmitriChine_3_15022021/",
          stacks: [
            {
              img: "/img/html-5.png",
              altImg: "HTML5"
            },
            {
              img: "/img/css-3.png",
              altImg: "CSS3"
            }
          ]
        },
        // 1
        {
          title: "Transformez une maquette en site web",
          description:
            "Le site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Les hébergements peuvent également être filtrés par thématique, par exemple leur budget ou leur ambiance.",
          imagePreview: "/img/reservia.png",
          altImg: "Transformez une maquette en site web - Reservia",
          gitHub: "https://github.com/ChineDmitri/DmitriChine_2_10012021",
          site: "https://chinedmitri.github.io/DmitriChine_2_10012021/",
          stacks: [
            {
              img: "/img/html-5.png",
              altImg: "HTML5"
            },
            {
              img: "/img/css-3.png",
              altImg: "CSS3"
            }
          ]
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
        <a href="/CHINE_Dmitri-2022.pdf" title="CV" target="_blank">
          <i class="fas fa-id-card" @click="startBio"></i>
        </a>
        <a href="https://www.linkedin.com/in/dmitri-chine" title="Profil LinkedIn" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ChineDmitri" title="GitHub" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://wa.me/33642447824" title="WhatsApp" target="_blank">
          <i class="fab fa-whatsapp-square"></i>
        </a>
      </div>
    </header>

    <main data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
      <Projet
        v-for="(projet, idx) in projets"
        :key="idx"
        :title="projet.title"
        :imagePreview="projet.imagePreview"
        :altImg="projet.altImg"
        :gitHub="projet.gitHub"
        :site="projet.site"
        :description="projet.description"
        :stacks="projet.stacks"
        :bio="bio"
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
              Monsieur Chine Dmitri, web-developpeur, né en 11 décembre 1992 à Kazakhstan. En 2009, j'ai déménagé en Russie et commencé étude à l'Université d'Instrumentation Aérospatiale de Saint-Pétersbourg. Cette éducation n'était pas terminée et en 2011, j'avais obligation servir 1 an d'armée obligatoire en Russie pendant 2012-2013. En suite de l'armée russe, j'ai décidé partir en France et s'engager à la Légion Étrangère. 
            </p>

            <p>
              En service à la Légion Étrangère, j'ai travaillé aux différents
              posts comme chef d'équipe en montagne, aide moniteur auto école,
              secrétaire dans le domaine RH. Enfin 8 ans de service, j'ai décidé
              retourner dans le monde IT, et passe parcours Web Développeur chez
              OpenClassRooms (formation à la distance).
            </p>

            <p>
              Actuellement en formation dans le Centre Militare De Formation
              Professionnelle à Fontenay-le-Comte pour la formation technicien
              d'assistance en informatique jusqu'à septembre 2022...
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
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768) {
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
  transition-duration: 3000ms;
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
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  width: 15em;
  margin: 0 0 0 -7.5em;
  font-size: 200%;
  font-weight: 400;
  color: #4bd5ee;
  opacity: 0;
  -webkit-animation: intro 6s ease-out 2s;
  animation: intro 6s ease-out 2s;
}
.starwars .titles {
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    bottom: -40px;
    width: 14.65em;
    margin: 0 0 0 -7.325em;
  }
  width: 20.65em;
  color: #ffff66;
  margin: 0 0 0 -10.325em;
  top: auto;
  bottom: -50px;
  height: 50em;
  font-size: 1.8rem;
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
  @media screen and (max-width: 768px) {
    -webkit-animation: titlesMobile 81s linear 5.5s;
    animation: titlesMobile 81s linear 5.5s;
  }
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
@-webkit-keyframes titlesMobile {
  0% {
    top: 100%;
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    top: -20%;
    opacity: 0;
  }
}
@keyframes titlesMobile {
  0% {
    top: 100%;
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    top: -20%;
    opacity: 0;
  }
}
</style>