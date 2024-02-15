<template>
  <section class="sideMenu-part-pc Menu-part">
    <router-link to="/" title="About Me"
      ><div
        class="sideMenu-part-pc-highlighter"
        v-if="$route.path === '/'"
      ></div>
      About Me</router-link
    >
    <router-link to="/portfolioView" title="Portfolio"
      ><div
        class="sideMenu-part-pc-highlighter"
        v-if="$route.path === '/portfolioView'"
      ></div>
      Portfolio</router-link
    >
    <router-link to="/contactView" title="Contact"
      ><div
        class="sideMenu-part-pc-highlighter"
        v-if="$route.path === '/contactView'"
      ></div>
      Contact</router-link
    >
  </section>
  <section class="sideMenu-part-mobile Menu-part">
    <router-link to="/" title="About Me"
      ><div
        class="sideMenu-part-mobile-highlighter"
        v-if="$route.path === '/'"
      ></div>
      About Me</router-link
    >
    <router-link to="/portfolioView" title="Portfolio"
      ><div
        class="sideMenu-part-mobile-highlighter"
        v-if="$route.path === '/portfolioView'"
      ></div>
      Portfolio</router-link
    >
    <router-link to="/contactView" title="Contact"
      ><div
        class="sideMenu-part-mobile-highlighter"
        v-if="$route.path === '/contactView'"
      ></div>
      Contact</router-link
    >
  </section>
</template>

<script>
export default {
  name: "sideMenuView",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap");
/*font-family: 'Merriweather', serif; (400, 700, 900)*/

/* pc (1024px ~) */
.sideMenu-part-pc {
  width: 150px;
  height: fit-content;
}
.sideMenu-part-pc > a {
  width: inherit;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  position: relative;
  text-align: center;
  cursor: pointer;
  /*border: 1px solid hotpink;*/
}
.sideMenu-part-pc-highlighter {
  width: 80px;
  height: 15px;
  top: 20px;
  left: 35px;
  background-color: #ffbf007b;
  position: absolute;
}

/* tablet/mobile (~ 1024px) */
.sideMenu-part-mobile {
  width: 100%;
  background-color: #fffcec;
  padding-left: 50px;
  gap: 50px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.sideMenu-part-mobile > a {
  width: fit-content;
  height: 40px;
  line-height: 40px;
  position: relative;
  text-align: center;
  cursor: pointer;
  /*border: 1px solid hotpink;*/
}
@media (min-width: 480px) and (max-width: 600px) {
  .sideMenu-part-mobile {
    gap: 30px;
    justify-content: center;
    padding-left: 0px;
  }
  .sideMenu-part-mobile > a {
    font-size: 15px;
  }
}
@media (min-width: 320px) and (max-width: 479px) {
  .sideMenu-part-mobile {
    gap: 20px;
    justify-content: center;
    padding-left: 0px;
  }
  .sideMenu-part-mobile > a {
    font-size: 15px;
  }
}
.sideMenu-part-mobile-highlighter {
  width: calc(100% + 10px);
  height: 15px;
  top: 20px;
  left: -5px;
  background-color: #ffbf007b;
  position: absolute;
}

/* pc (1024px ~) */
@media (min-width: 1024px) {
  .sideMenu-part-pc {
    display: block;
  }
  .sideMenu-part-mobile {
    display: none;
  }
}
/* tablet/mobile (~ 1024px) */
@media (min-width: 320px) and (max-width: 1023px) {
  .sideMenu-part-pc {
    display: none;
  }
  .sideMenu-part-mobile {
    display: flex;
  }
}
</style>