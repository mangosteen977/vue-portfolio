<template>
  <MainView />
  <div class="portfolio-content-part">
    <SideMenuView class="Menu-part" />
    <!-- <AboutMeView /> -->
    <router-view class="content-part"></router-view>
  </div>
  <p class="copyright">COPYRIGHT ⓒ 2024 MOSUBIN ALL RIGHTS RESERVED.</p>
</template>

<script>
import MainView from "./components/mainView.vue";
import SideMenuView from "./components/sideMenuView.vue";
// import AboutMeView from "./components/aboutMeView.vue";

export default {
  name: "App",
  components: {
    MainView,
    SideMenuView,
    // AboutMeView,
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
  font-size: 1rem;
  text-align: center;
  min-width: 320px;
  height: 100%;
  color: #111111;
  background-color: #fffcec;
  /*background-color: #f2f1e9;*/
  /*border: 1px solid red;*/
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
  color: black;
  display: block;
}
img {
  width: 100%;
  object-fit: cover;
}

/* 메뉴 + 내용 */
.portfolio-content-part {
  /*border: 1px solid red;*/
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  position: relative;

  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 50px 0;
}

/*메뉴*/
.Menu-part {
  /*border: 1px solid red;*/
  width: 150px;
  height: fit-content;
  font-family: "Merriweather", serif;
  font-weight: 400;
  top: 35px;
  position: sticky;
}

/*내용*/
.content-part {
  width: calc(100% - 200px);
  height: fit-content;
  padding-right: 20px;
}

/* tablet/mobile (~ 1024px) */
@media (min-width: 320px) and (max-width: 1023px) {
  .portfolio-content-part {
    flex-direction: column;
    gap: 30px;
  }
  .Menu-part {
    width: 100%;
    top: 0px;
  }
  .content-part {
    width: 100%;
    height: fit-content;
    padding: 20px 0px;
  }
}

/*copyright*/
.copyright {
  width: 100%;
  height: 30px;
  background-color: none;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 30px;
  color: #555;
  text-align: center;
  font-weight: unset;
  font-size: 11px;
}
</style>
