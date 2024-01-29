<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="project_header">
        <h3>Projects/Portfolio</h3>
      </div>
      <div class="row">
        <div class="col-md-3 project_body">
          <!-- Adeleke University -->
          <Card
            link_to="https://mrmacdit.github.io/myUniversity/home.html"
            img_src="https://adelekeuniversity.edu.ng/wp-content/uploads/2022/12/Rectangle-79.png"
            image_alt="Adeleke University"
            header="While learning to code, I took on the project to create a University website which mirrored the ©2020 Adeleke University website"
          />
        </div>
        <div class="col-md-3">
          <!-- Bootstrap Jumia -->
          <Card
            link_to="https://mrmacdit.github.io/jumia/jumia.html"
            img_src="https://lh3.googleusercontent.com/9OIpofBdfgvrdlYUReBk3WmIElVab1sVLq7_U2wkqafaFpFWWVUq8d3AeKryZK1xuqtEPDOUhAoMgKT8FB1FN7omsvk9FfRWFFGY941JSuCBSJhc3sYYK_EChwDjOMVzX2RxUpgw"
            image_alt="Frontpage Jumia"
            header="Next, I wanted to try my hands on bootstrap and put my skills to test. You got it✔, I invested some time into creating the home page of an ecommerce webapp. ©Jumia"
          />
        </div>
        <div class="col-md-3">
          <!-- VUE Weather app -->
          <Card
            link_to="https://mrmacdit.github.io/farmplus/farmplus.html"
            img_src="https://uizard.io/static/75ac12b2421d17c3820d20ecf61cc073/d9bdf/weather-web-dark-cover.png"
            image_alt="Weather App"
            header="Now, I was hungry for more knowledge. I encountered frameworks, I wanted to start with Vue😂... It made life easier😜"
          />
        </div>
        <div class="col-md-3">
          <!-- Billing System (React) -->
          <Card
            link_to="_#"
            img_src="https://cdn.dribbble.com/userupload/2558326/file/still-de2acb25cdafdb07194feacae91d5559.png?resize=400x300&vertical=center"
            image_alt="Billing System"
            header="Well, the frontend journey won't be sweet without the touch of React😉😉"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../utilities/Card.vue";
export default {
  name: "Projects",
  components: {
    Card,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
}
.project_header h3 {
  height: 25vh;
  color: #f78f1e;
  width: 50%;
  padding-top: 16px;
  margin-left: auto;
  margin-right: auto;
  /* text-shadow: 1px 1px 1px black; */
  font-family: "Courier New", Courier, monospace;
  font-size: 4em;
}
.project_body {
  height: 75vh;
}
</style>
