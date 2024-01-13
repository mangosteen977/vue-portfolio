<template>
  <section class="aboutMe-part">
    <ul>
      <li>
        <label>| profile</label>
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
              2021.02 ~ 2021.08 종로 그린컴퓨터아트학원 웹퍼블리셔 프론트엔드
              개발 디지털실무 양성과정 수료 후, 2023년 3월부터 방송통신대학교
              컴퓨터과학과에 재학중입니다.<br />
              즐거운 마음으로 배워 나가며 끊임없이 발전하는 개발자가 되고
              싶습니다.
            </label>
          </div>
        </div>
      </li>
      <li>
        <label>| Time Line</label>
        <div class="aboutMe-timeLine-graph">
          <div class="aboutMe-timeLine-graph-dot"></div>
          <div class="aboutMe-timeLine-graph-line"></div>
          <div class="aboutMe-timeLine-graph-event">
            2024.01.13 portfolio aboutMe page를 제작하였습니다.
          </div>
        </div>
      </li>
      <li>
        <label class="aboutMe-skills">| Skills</label>
        <div class="aboutMe-skills-list">
          <!-- Frontend -->
          <p><strong>Frontend</strong></p>
          <div>
            <img
              alt="html"
              src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"
            />
            <img
              alt="css3"
              src="https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css3&logoColor=white"
            />
            <img
              alt="Sass"
              src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"
            />
            <img
              alt="javascript"
              src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
            />
            <img
              alt="jquery"
              src="https://img.shields.io/badge/jquery-0769AD?style=flat-square&logo=jquery&logoColor=white"
            />
            <img
              alt="vue.js"
              src="https://img.shields.io/badge/vue.js-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white"
            />
            <img
              alt="bootstrap"
              src="https://img.shields.io/badge/bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"
            />
          </div>
          <!-- Tools -->
          <p><strong>Tools</strong></p>
          <div>
            <img
              alt="git"
              src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white"
            />
            <img
              alt="github"
              src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white"
            />
            <img
              alt="slack"
              src="https://img.shields.io/badge/slack-4A154B?style=flat-square&logo=slack&logoColor=white"
            />
            <img
              alt="atlassian"
              src="https://img.shields.io/badge/atlassian-0052CC?style=flat-square&logo=atlassian&logoColor=white"
            />
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
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style>
.aboutMe-part {
  width: calc(100% - 150px);
  height: fit-content;
}
.aboutMe-part > ul {
  width: 100%;
  border: 1px solid blue;
}
.aboutMe-part > ul > li {
  border: 1px solid green;
  width: 100%;
  height: fit-content;
  text-align: left;
  margin-bottom: 40px;
}
.aboutMe-part > ul > li > label {
  padding: 10px 0px;
  margin-bottom: 10px;
}
.aboutMe-profile {
  border: 1px solid pink;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.aboutMe-profile-photo {
  width: 300px;
  height: 300px;
}
.aboutMe-profile-photo > img {
  width: 100%;
  object-fit: cover;
}
.aboutMe-profile-about {
  width: calc(100% - 350px);
}
/*
.aboutMe-timeLine-graph {
  border: 1px solid hotpink;
  width: 100%;
  height: auto;
  padding: 50px 0px;
}
.aboutMe-timeLine-graph-line {
  width: calc(100% - 100px);
  height: 2px;
  background-color: black;
  margin-left: 50px;
  display: flex;
  justify-content: space-around;
}
.aboutMe-timeLine-graph-dot {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 100%;
}
*/
.aboutMe-timeLine-graph {
  border: 1px solid hotpink;
  width: 100%;
  height: auto;
  padding: 50px 0px;
}
.aboutMe-timeLine-graph-line {
  border: 1px solid blue;
  width: calc(100% - 100px);
  height: 2px;
  background-color: black;
  margin-left: 50px;
  display: flex;
  justify-content: space-around;
}
.aboutMe-timeLine-graph-dot {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 100%;
}
.aboutMe-timeLine-graph-event {
  border: 1px solid red;
}
/*skills*/
.aboutMe-skills-list {
  border: 1px solid hotpink;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>