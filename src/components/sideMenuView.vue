<template>
  <section class="sideMenu-part">
    <ul>
      <li>
        <div class="sideMenu-part-highlighter"></div>
        About Me
      </li>
      <li>
        <div class="sideMenu-part-highlighter"></div>
        Portfolio
      </li>
      <li>
        <div class="sideMenu-part-highlighter"></div>
        Contact
      </li>
    </ul>
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
.sideMenu-part {
  width: 150px;
  height: fit-content;
  font-family: "Merriweather", serif;
  font-weight: 400;
}
.sideMenu-part > ul {
  width: inherit;
  height: auto;
}
.sideMenu-part > ul > li {
  width: inherit;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  position: relative;
  text-align: center;
  cursor: pointer;
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