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
              디지털실무 양성과정 수료 후, 2023년 3월부터 방송통신대학교
              컴퓨터과학과에 재학중입니다.<br />
              즐거운 마음으로 배워 나가며 끊임없이 발전하는 개발자가 되고
              싶습니다.
            </label>
          </div>
        </div>
      </li>
      <li>
        <h2>| Time Line</h2>
        <div class="aboutMe-timeLine-graph">
          <!--1-->
          <div class="aboutMe-timeLine-graph-event">
            <div class="aboutMe-timeLine-graph-dot">
              <label>2019.02</label>
            </div>
            <span class="aboutMe-timeLine-graph-visible">
              <div class="aboutMe-timeLine-graph-line"></div>
              <label class="aboutMe-timeLine-graph-event-text"
                >청강문화산업대학교 식품영양과 졸업<br />
                영양사, 위생사 면허 취득
              </label>
            </span>
          </div>
          <!--2-->
          <div class="aboutMe-timeLine-graph-event">
            <div class="aboutMe-timeLine-graph-dot">
              <label>2019.09~2020.03</label>
            </div>
            <span class="aboutMe-timeLine-graph-visible">
              <div class="aboutMe-timeLine-graph-line"></div>
              <label class="aboutMe-timeLine-graph-event-text"
                >호치민 인문사회대학 베트남 VSL1 ~ VSL3 과정 수강
              </label>
            </span>
          </div>
          <!--3-->
          <div class="aboutMe-timeLine-graph-event">
            <div class="aboutMe-timeLine-graph-dot">
              <label>2021.02~2021.08 </label>
            </div>
            <span class="aboutMe-timeLine-graph-visible">
              <div class="aboutMe-timeLine-graph-line"></div>
              <label class="aboutMe-timeLine-graph-event-text"
                >종로 그린컴퓨터아트학원 웹퍼블리셔 프론트엔드 개발 디지털실무
                양성과정 수강
              </label>
            </span>
          </div>
          <!--4-->
          <div class="aboutMe-timeLine-graph-event">
            <div class="aboutMe-timeLine-graph-dot">
              <label>2021.10~2023.10 </label>
            </div>
            <span class="aboutMe-timeLine-graph-visible">
              <div class="aboutMe-timeLine-graph-line"></div>
              <label class="aboutMe-timeLine-graph-event-text"
                >TIAI Korea에서 2년간 고객사 인공지능 서비스 관련 서비스 유지
                보수 업무 및 신규 기능 개발 프로젝트 참여
              </label>
            </span>
          </div>
        </div>
      </li>
      <li>
        <h2 class="aboutMe-skills">| Skills</h2>
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
/*프로필*/
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
.aboutMe-profile-about > label {
  width: calc(100% - 50px);
  font-size: 15px;
  font-weight: 400;
}
/*타임라인 그래프*/
.aboutMe-timeLine-graph {
  border: 1px solid hotpink;
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}
.aboutMe-timeLine-graph-event {
  border: 1px solid red;
  border-top: 3px solid black;
  width: calc(100% / 4 - 20px);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: first baseline;
  flex-wrap: nowrap;
}
.aboutMe-timeLine-graph-dot {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 100%;
  position: relative;
  z-index: 100;
  top: -5px;
}
.aboutMe-timeLine-graph-dot > label {
  width: max-content;
  height: 20px;
  position: absolute;
  top: -15px;
  font-size: 12px;
  font-weight: 400;
}
.aboutMe-timeLine-graph-line {
  width: 100px;
  height: 2px;
  background-color: #ffc000;
  transform: rotate(15deg);
  margin-top: 3px;
}
.aboutMe-timeLine-graph-event-text {
  width: max-content;
  height: fit-content;
  border: 2px solid #ffc000;
  background-color: #ffc000;
  position: relative;
  z-index: 100;
  margin-left: 50px;
  font-size: 13px;
  font-weight: 400;
}

/*.aboutMe-timeLine-graph-event 마지막*/
.aboutMe-timeLine-graph
  > .aboutMe-timeLine-graph-event:last-child
  > .aboutMe-timeLine-graph-visible
  > .aboutMe-timeLine-graph-line {
  transform: rotate(-15deg);
  position: relative;
  left: -100px;
}
.aboutMe-timeLine-graph
  > .aboutMe-timeLine-graph-event:last-child
  > .aboutMe-timeLine-graph-visible
  > .aboutMe-timeLine-graph-event-text {
  left: calc(-100% + -50px);
}

/*.aboutMe-timeLine-graph-dot:hover 타임라인 점 호버*/
.aboutMe-timeLine-graph-visible {
  visibility: hidden;
}
.aboutMe-timeLine-graph-dot:hover + .aboutMe-timeLine-graph-visible {
  visibility: visible;
}
.aboutMe-timeLine-graph-dot:hover {
  background-color: #ffc000;
}
/*skills*/
.aboutMe-skills-list {
  border: 1px solid hotpink;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
