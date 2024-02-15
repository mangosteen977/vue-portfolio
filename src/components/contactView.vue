<template>
  <section class="contactView-part">
    <h1 class="contactView-part-title">Contact</h1>
    <div class="contactView-part-contents">
      <div>
        <a href="mailto:mosubin977@naver.com" title="이메일 작성">
          <img src="../assets/mail.svg" class="icon" />
        </a>
        <button @click="copy(mail)" title="이메일 복사">
          <img class="copySvg" src="../assets/copy.svg" />
          {{ this.mail }}
        </button>
      </div>
      <div>
        <img
          src="../assets/git.png"
          title="깃허브로 이동"
          class="icon"
          @click="goTo('pc', 'http://github.com/mangosteen977')"
        />
        <button @click="copy(gitId)" title="깃허브 아이디 복사">
          <img class="copySvg" src="../assets/copy.svg" />
          {{ this.gitId }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contactView",
  props: {},
  data() {
    return {
      mail: "mosubin977@naver.com",
      gitId: "mangosteen977",
    };
  },
  computed: {},
  created() {},
  methods: {
    goTo(type, link) {
      switch (type) {
        case "pc":
          window.open(link);
          break;
        case "mobile":
          window.open(link, "width=380; height=600;");

          break;
        case "pop":
          console.log("link =", "@" + link);
          // window.open(link, "", "width=300; height=300;");
          // window.open(url, 이름, 팝업창 가로길이, 팝업창 세로길이, 팝업창 시작점 top, 시작점 left);
          break;
      }
      console.log("link =", link);
    },
    copy(copyText) {
      // console.log(copyText);
      window.navigator.clipboard.writeText(copyText).then(() => {
        alert("복사되었습니다.");
      });
      //navigator.clipboard : https, localhost 환경만 지원
    },
  },
};
</script>

<style>
.contactView-part {
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 30px;
  /*border: 1px solid red;*/
}
.contactView-part-contents {
  width: 100%;
  height: fit-content;
  background-color: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  gap: 20px;
  /*border: 1px solid red;*/
}
.contactView-part-contents > div {
  width: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  /*border: 1px solid red;*/
}
.contactView-part-contents > div > button {
  width: fit-content;
  height: 30px;
  border: none;
  background-color: #fffcec;
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 150px;
  height: fit-content;
  cursor: pointer;
}
.copySvg {
  width: 20px;
  height: 20px;
}

@media (min-width: 480px) and (max-width: 600px) {
}
@media (min-width: 320px) and (max-width: 479px) {
  .icon {
    width: 100px;
  }
  .contactView-part-contents > div > button {
    font-size: 12px;
  }
}
</style>