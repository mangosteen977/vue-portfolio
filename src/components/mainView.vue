<template>
  <!-- 포트폴리오 메인 -->
  <header class="main-view-part">
    <div class="main-view-part-title">
      Hello. I'm
      <label class="highlighterText"
        ><div></div>
        Subin Mo</label
      >.
      <br />
      I'm a Front-End developer.
    </div>
    <!-- 글자 왼쪽으로 붙이기, 중간에 끊기게 하기. 이름 위에 하이라이트 효과 추가. 왼->오 방향으로 하이라이팅. -->
    <div class="main-view-part-arrow"></div>
    <!-- 화살표 위에서 아래로 흔들흔들 -->
  </header>
</template>

<script>
export default {
  name: "mainView",
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
.main-view-part {
  width: 100vw;
  height: 100vh;
  background-color: #fffcec;
  font-family: "Merriweather", serif;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
}
/* 글자크기 및 사이즈 디테일한 부분들은 @media로 마지막에 px 다 수정할 것. 자리만 잡아둠*/
.main-view-part-title {
  width: inherit;
  padding-left: 80px;
  font-size: 60px;
  text-align: left;
}
/*하이라이트 효과*/
.highlighterText {
  width: fit-content;
  height: fit-content;
  display: inline-block;
  position: relative;
  z-index: 100;
}
.highlighterText > div {
  width: 0px;
  height: 100%;
  background-color: #ffbf007b;
  position: absolute;
  left: 0;
  top: 0;
  animation-name: highlighter;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  z-index: -1;
}
@keyframes highlighter {
  0% {
    width: 0;
  }
  55% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
}

.main-view-part-arrow {
  width: 50px;
  height: 50px;
  background-image: url(../assets/double_arrow_down.svg);
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid red;
}
</style>