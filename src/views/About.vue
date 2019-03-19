<template>
  <div class="about">
    <div class="aboutBgImg"></div>
    <div class="maxW1000">
      <h1 class="aboutTopText">这里是醒目的标语</h1>
      <div class="aboutContent"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "about",
    components: {},
    data() {
      return {};
    },
    computed: {},
    methods: {},
    created() {}
  };
</script>
<style>
  .about {
    position: relative;
  }
  .aboutBgImg {
    background-image: url(".././img/About/aboutBgImg.jpg");
    width: 100%;
    background-size: contain;
    height: 281px;
    z-index: -10;
  }
  .maxW1000 {
    position: absolute;
    top: 0px;
    width: 100%;
    margin: 0 auto;
  }
  .aboutTopText {
    height: 165px;
    line-height: 165px;
    font-size: 30px;
    color: #fff;
  }
  .aboutContent {
    height: 700px;
    width: 1000px;
    background: gray;
    margin: 0px auto;
  }
</style>
