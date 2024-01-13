<template>
  <MainView />
  <div class="portfolio-content-part">
    <SideMenuView class="Menu-part" />
    <AboutMeView />
  </div>
</template>

<script>
import MainView from "./components/mainView.vue";
import SideMenuView from "./components/sideMenuView.vue";
import AboutMeView from "./components/aboutMeView.vue";

export default {
  name: "App",
  components: {
    MainView,
    SideMenuView,
    AboutMeView,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap");
/*font-family: 'Merriweather', serif; (400, 700, 900)*/
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap");
/*font-family: 'Noto Sans KR', sans-serif; (300, 400, 500, 700)*/
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  text-align: center;
  min-width: 320px;
  color: #111111;
  background-color: #fffcec;
  /*background-color: #f2f1e9;*/
  border: 1px solid red;
}
::selection {
  background-color: #ffbf007b;
  color: fff;
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
span,
label,
main {
  display: block;
}
a {
  text-decoration: none;
}
.portfolio-content-part {
  border: 1px solid red;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 60px;
  grid-gap: 60px;
  padding: 50px 0;
}
.Menu-part {
  border: 1px solid red;
  width: 150px;
  height: fit-content;
  top: 36px;
  position: sticky;
}
</style>
