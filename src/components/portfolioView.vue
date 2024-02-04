<template>
  <section class="portfolioView-part">
    <ul
      class="portfolioView-part-box"
      v-for="list in portfolio_list_arr"
      :key="list.id"
      @dblclick="goTo(list.type, list.link)"
      @click="goTo(list.type, list.link)"
    >
      <li>
        <img :alt="list.subtitle" :src="list.portImg" />
      </li>
      <li>{{ list.title }}</li>
      <li>{{ list.tools }}</li>
      <li>{{ list.concept }}</li>
    </ul>
  </section>
</template>

<script>
import portJson from "../portfolio.json";
export default {
  name: "portfolioView",
  props: {},
  data() {
    return {
      portfolio_list_arr: [],
    };
  },
  computed: {},
  created() {
    this.portfolio_list_arr = portJson.lists;
    console.log(this.portfolio_list_arr);
  },
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
          window.open(link, "", "width=300; height=300;");
          break;
      }
      console.log("link =", link);
    },
  },
};
</script>

<style>
.portfolioView-part {
  /*border: 1px solid red;*/
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
}
.portfolioView-part-box {
  background-color: #fff;
  border-radius: 5px;
  width: calc(50% - 10px);
  min-width: 300px;
  margin: 5px;
  padding: 10px 0px;
}
.portfolioView-part-box > li {
  /*border: 1px solid red;*/
  margin-top: 5px;
}
.portfolioView-part-box > li:nth-of-type(1) > img {
  border-radius: 5px 5px 0 0;
}
</style>