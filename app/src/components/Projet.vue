<script>
export default {
  name: "Projet",
  props: {
    title: String,
    description: String,
    imagePreview: String,
    altImg: String,
    gitHub: [String, null],
    site: [String, null],
    stacks: Array,
    bio: Boolean
  }
};
</script>

<template>
  <article :class="{ projet: true, projetOpac: bio }">
    <div class="preview">
      <div class="photoProjet">
        <!-- <img src="../assets/icon-above-font.png" alt="" /> -->
        <img :src="imagePreview" :alt="altImg" />
      </div>
      <div class="stack">
        <!-- <img src="../assets/1200px-MySQL.svg.png" alt="" />
        <img src="../assets/1200px-Vue.js_Logo_2.svg.png" alt="" />
        <img src="../assets/expressjslogo.png" alt="" />
        <img src="../assets/Noda.png" alt="" /> -->
        <img
          v-for="(stack, idx) of stacks"
          :key="idx"
          :src="stack.img"
          :alt="stack.altImg"
        />
      </div>
    </div>
    <div class="description">
      <h2>{{ title }}</h2>
      <p>
        {{ description }}
      </p>
      <a v-if="gitHub !== null" :href="gitHub" target="_blank"
        >Voir le repository GitHub</a
      >
      <br v-if="site !== null" />
      <a v-if="site !== null" :href="site" target="_blank"
        >Voir le projet déployé</a
      >
    </div>
  </article>
</template>

<style lang="scss">
.projetOpac {
  opacity: 0;
  transition-duration: 4000ms;
}
.projet {
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  box-shadow: 0px 0px 20px #2a333b;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  width: calc(100% - 20px);
  margin: 20px 0;
  transition-duration: 1500ms;
  .preview {
    @media screen and (max-width: 768px) {
      margin: 0 auto;
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    width: 185px;
    .photoProjet {
      @media screen and (max-width: 768px) {
        width: 100%;
        height: 150px;
      }
      border-radius: 25px;
      //   box-shadow: 0px 0px 20px #252575;
      width: 195px;
      height: 100px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        transition-duration: 300ms;
        &:hover {
          @media screen and (min-width: 769px) {
            transform: scale(2.5);
          }
        }
      }
    }
    .stack {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 20px;
      img {
        max-width: 85px;
        max-height: 50px;
        margin-bottom: 10px;
        margin-right: 2px;
        margin-left: 2px;
        object-fit: contain;
      }
    }
  }
  .description {
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-left: 0px;
    }
    margin-left: 20px;
    width: 580px;
    h2 {
      @media screen and (max-width: 768px) {
        font-size: 1.1rem;
      }
      padding: 0;
      margin: 0;
      font-size: 1.4rem;
      font-weight: 800;
    }
    p {
      white-space: pre-wrap;
      padding: 0 5px;
      text-align: justify;
      color: #ffff66;
      font-size: 0.9rem;
      font-weight: 400;
    }
    a {
      // margin: 0 auto;
      text-decoration: none;
      font-size: 0.9rem;
      color: blanchedalmond;
      &:hover {
        color: #252575;
      }
    }
  }
}
</style>