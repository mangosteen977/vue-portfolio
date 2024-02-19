<template>
  <section class="portfolioView-part">
    <div
      class="portfolioView-part-box"
      v-for="list in portfolio_list_arr"
      :key="list.id"
    >
      <div
        class="portfolioView-part-portImg"
        @click="goTo(list.type, list.link)"
      >
        <img
          :alt="list.title"
          :src="require(`@/assets/portImg/${list.portImg}`)"
        />
      </div>
      <h3 @click="goTo(list.type, list.link)">{{ list.title }}</h3>
      <h6>{{ list.tools }}</h6>
      <label>{{ list.detail }}</label>
      <h6 v-if="list.notice">{{ list.notice }}</h6>
      <label
        v-if="list.gitHub"
        @click="goTo('pc', list.gitHub)"
        class="portfolioView-part-gitHub"
      >
        gitHub repository : {{ list.gitHub }}
      </label>
    </div>
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
          window.open(link, "", "width=380; height=600;");

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
  align-items: stretch;
  gap: 10px;
  /*border: 1px solid red;*/
}
.portfolioView-part-box {
  width: calc(50% - 10px);
  max-width: 400px;
  min-width: 320px;
  margin: 5px;
  padding: 10px 0px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 1px #a2a2a2;
  /*border: 1px solid green;*/
}
.portfolioView-part-box:hover {
  box-shadow: 3px 3px 3px 2px #9e9e9e;
}
.portfolioView-part-box > h3 {
  /*border: 1px solid blue;*/
  cursor: pointer;
}
.portfolioView-part-portImg {
  /*border: 1px solid hotpink;*/
  width: calc(100% - 10px);
  height: fit-content;
  margin-left: 5px;
  overflow: hidden;
  border: 1px solid #eee;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
}
.portfolioView-part-box > label {
  font-size: 12px;
  padding: 10px;
  /*border: 1px solid red;*/
}
.portfolioView-part-gitHub {
  text-decoration: underline;
  cursor: pointer;
}

@media (min-width: 480px) and (max-width: 600px) {
}
@media (min-width: 320px) and (max-width: 479px) {
}
</style>