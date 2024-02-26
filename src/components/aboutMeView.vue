<template>
  <section class="aboutMe-part">
    <ul>
      <li>
        <h2>| profile</h2>
        <div class="aboutMe-profile">
          <div class="aboutMe-profile-photo">
            <img
              alt="Subin Mo profile photo"
              src="../assets/profile_photo.jpg"
            />
          </div>
          <div class="aboutMe-profile-about">
            <h1>모수빈</h1>
            <h2>1997.09.10</h2>
            <label>
              안녕하세요. 꼼꼼하고 끈기 있는 개발자 모수빈입니다.<br />
              2021.08 종로 그린컴퓨터아트학원 웹퍼블리셔 프론트엔드 개발
              디지털실무 양성과정 수료 후,<br />2023년 3월부터 방송통신대학교
              컴퓨터과학과에 재학중입니다. 즐거운 마음으로 배워 나가며 끊임없이
              발전하는 개발자가 되고 싶습니다.
            </label>
          </div>
        </div>
      </li>
      <li>
        <h2>| Time Line</h2>
        <div class="aboutMe-timeLine">
          <div>
            <h4>~2019.02</h4>
            <label class="aboutMe-timeLine-event-text"
              >청강문화산업대학교 식품영양과 졸업<br />
              영양사, 위생사 면허 취득
            </label>
          </div>
          <div>
            <h4>2019.09~2020.03</h4>
            <label class="aboutMe-timeLine-event-text"
              >베트남 호치민 인문사회과학대학교 어학당<br />
              베트남어 VSL1 ~ VSL3 과정 수강
            </label>
          </div>
          <div>
            <h4>2021.02~2021.08</h4>
            <label class="aboutMe-timeLine-event-text"
              >종로 그린컴퓨터아트학원<br />
              웹퍼블리셔 프론트엔드 개발 디지털실무 양성과정 수강
            </label>
          </div>
          <div>
            <h4>2021.10~2023.10</h4>
            <label class="aboutMe-timeLine-event-text"
              >Telus International AI Korea 2년 재직<br />
              인공지능 서비스 유지 보수 및 기능 개발 프로젝트 참여
            </label>
          </div>
          <div>
            <h4>2023.03~</h4>
            <label class="aboutMe-timeLine-event-text"
              >방송통신대학교<br />
              컴퓨터과학과 3학년 편입 후 재학 중
            </label>
          </div>
        </div>
      </li>
      <li>
        <h2>| Skills</h2>
        <div class="aboutMe-skills">
          <!-- Frontend -->
          <h4>Frontend</h4>
          <div class="aboutMe-skills-list">
            <div class="aboutMe-skills-badge badge-html" title="html">
              <span class="aboutMe-skills-badge-svg"></span>
              html
            </div>
            <div class="aboutMe-skills-badge badge-css" title="css">
              <span class="aboutMe-skills-badge-svg"></span>
              css
            </div>
            <div class="aboutMe-skills-badge badge-scss" title="scss">
              <span class="aboutMe-skills-badge-svg"></span>
              scss
            </div>
            <div
              class="aboutMe-skills-badge badge-javascript"
              title="javascript"
            >
              <span class="aboutMe-skills-badge-svg"></span>
              javascript
            </div>
            <div class="aboutMe-skills-badge badge-jquery" title="jquery">
              <span class="aboutMe-skills-badge-svg"></span>
              jquery
            </div>
            <div class="aboutMe-skills-badge badge-vue" title="vue">
              <span class="aboutMe-skills-badge-svg"></span>
              vue
            </div>
            <div class="aboutMe-skills-badge badge-bootstrap" title="bootstrap">
              <span class="aboutMe-skills-badge-svg"></span>
              bootstrap
            </div>
          </div>
          <!-- currently studying -->
          <h4>currently studying</h4>
          <div class="aboutMe-skills-list">
            <div class="aboutMe-skills-badge badge-react" title="react">
              <span class="aboutMe-skills-badge-svg"></span>
              react
            </div>
            <div
              class="aboutMe-skills-badge badge-styledcomponents"
              title="styledcomponents"
            >
              <span class="aboutMe-skills-badge-svg"></span>
              styled-components
            </div>
            <div
              class="aboutMe-skills-badge badge-typescript"
              title="typescript"
            >
              <span class="aboutMe-skills-badge-svg"></span>
              typescript
            </div>
          </div>
          <!-- Tools -->
          <h4>Tools</h4>
          <div class="aboutMe-skills-list">
            <div class="aboutMe-skills-badge badge-git" title="git">
              <span class="aboutMe-skills-badge-svg"></span>
              git
            </div>
            <div class="aboutMe-skills-badge badge-github" title="github">
              <span class="aboutMe-skills-badge-svg"></span>
              github
            </div>
            <div class="aboutMe-skills-badge badge-slack" title="slack">
              <span class="aboutMe-skills-badge-svg"></span>
              slack
            </div>
            <div class="aboutMe-skills-badge badge-atlassian" title="atlassian">
              <span class="aboutMe-skills-badge-svg"></span>
              atlassian
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "aboutMeView",
  props: {},
  data() {
    return {
      skillDetail: [],
    };
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style>
.aboutMe-part {
  /*border: 1px solid hotpink;*/
}
.aboutMe-part > ul {
  width: 100%;
  /*border: 1px solid blue;*/
}
.aboutMe-part > ul > li {
  /*border: 1px solid red;*/
  width: 100%;
  height: fit-content;
  text-align: left;
  margin-bottom: 40px;
}
.aboutMe-part > ul > li > label {
  padding: 10px 0px;
  margin-bottom: 10px;
}
/*프로필*/
.aboutMe-profile {
  /*border: 1px solid pink;*/
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 30px;
  padding: 0px 50px;
}
.aboutMe-profile-photo {
  width: 310px;
  height: 310px;
}
.aboutMe-profile-about {
  width: calc(100% - 350px);
  min-width: 310px;
}
.aboutMe-profile-about > label {
  width: 100%;
  font-size: 15px;
  font-weight: 400;
}
/*타임라인*/
.aboutMe-timeLine {
  padding: 0px 50px;
}
.aboutMe-timeLine > div {
}
.aboutMe-timeLine > div > h4 {
  border-bottom: 2px solid black;
}
.aboutMe-timeLine > div > label {
  padding-left: 30px;
}

/*skills*/
.aboutMe-skills {
  padding: 0px 50px;
}
.aboutMe-skills-list {
  /*border: 1px solid hotpink;*/
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  padding-left: 10px;
}
.aboutMe-skills-list > img {
  width: fit-content;
  height: 25px;
  object-fit: contain;
  margin-right: 5px;
  /*border: 1px solid hotpink;*/
}

/*skills badge*/
.aboutMe-skills-badge {
  width: fit-content;
  height: 25px;
  padding: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  color: rgb(255, 255, 255);
}
.aboutMe-skills-badge-svg {
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  background-position: center;
}
/*badge list*/
/*Javascript*/
.badge-javascript {
  background-color: #f7df1e;
  color: #000000;
}
.badge-javascript > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/javascript.svg");
}
/*html*/
.badge-html {
  background-color: #e34f26;
}
.badge-html > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/html.svg");
}
/*css*/
.badge-css {
  background-color: #1572b6;
}
.badge-css > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/css.svg");
}
/*scss*/
.badge-scss {
  background-color: #cc6699;
}
.badge-scss > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/scss.svg");
}
/*jquery*/
.badge-jquery {
  background-color: #0769ad;
}
.badge-jquery > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/jquery.svg");
}
/*vue*/
.badge-vue {
  background-color: #4fc08d;
}
.badge-vue > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/vue.svg");
}
/*bootstrap*/
.badge-bootstrap {
  background-color: #7952b3;
}
.badge-bootstrap > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/bootstrap.svg");
}
/*react*/
.badge-react {
  background-color: #61dafb;
  color: #000000;
}
.badge-react > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/react.svg");
}
/*styled-components*/
.badge-styledcomponents {
  background-color: #db7093;
}
.badge-styledcomponents > .aboutMe-skills-badge-svg {
  width: 26px;
  background-size: cover;
  background-image: url("@/assets/svg/styledcomponents.svg");
}
/*typescript*/
.badge-typescript {
  background-color: #3178c6;
}
.badge-typescript > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/typescript.svg");
}
/*git*/
.badge-git {
  background-color: #f05032;
}
.badge-git > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/git.svg");
}
/*github*/
.badge-github {
  background-color: #181717;
}
.badge-github > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/github.svg");
}
/*slack*/
.badge-slack {
  background-color: #4a154b;
}
.badge-slack > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/slack.svg");
}
/*atlassian*/
.badge-atlassian {
  background-color: #0052cc;
}
.badge-atlassian > .aboutMe-skills-badge-svg {
  background-image: url("@/assets/svg/atlassian.svg");
}

@media (min-width: 480px) and (max-width: 600px) {
}
@media (min-width: 320px) and (max-width: 479px) {
  .aboutMe-profile,
  .aboutMe-timeLine,
  .aboutMe-skills {
    padding: 0px;
  }

  .aboutMe-timeLine > div > label {
    padding-left: 10px;
  }
  .aboutMe-timeLine > div > label,
  .aboutMe-profile-about > label {
    font-size: 14px;
    font-stretch: semi-expanded;
  }
}
</style>
