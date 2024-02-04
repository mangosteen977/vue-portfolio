<template>
  <section class="sideMenu-part">
    <router-link to="/" title="About Me" @click="this.currentMenu = 0"
      ><div
        class="sideMenu-part-highlighter"
        v-if="this.currentMenu == 0"
      ></div>
      About Me</router-link
    >
    <router-link
      to="/portfolioView"
      title="Portfolio"
      @click="this.currentMenu = 1"
      ><div
        class="sideMenu-part-highlighter"
        v-if="this.currentMenu == 1"
      ></div>
      Portfolio</router-link
    >
    <router-link to="/contactView" title="Contact" @click="this.currentMenu = 2"
      ><div
        class="sideMenu-part-highlighter"
        v-if="this.currentMenu == 2"
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
    return {
      currentMenu: 0,
    };
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap");
/*font-family: 'Merriweather', serif; (400, 700, 900)*/
.sideMenu-part {
  width: 150px;
  height: auto;
}
.sideMenu-part > a {
  width: inherit;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  position: relative;
  text-align: center;
  cursor: pointer;
  /*border: 1px solid hotpink;*/
}
.sideMenu-part-highlighter {
  width: 80px;
  height: 15px;
  top: 20px;
  left: 35px;
  background-color: #ffbf007b;
  position: absolute;
}
</style>