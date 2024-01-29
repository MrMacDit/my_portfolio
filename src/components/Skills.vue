<template>
  <div class="wrapper container">
    <h3 class="skills_header">Featured Skills</h3>
    <div class="row">
      <!-- Frontend Skills -->
      <div class="col-md-4">
        <div class="contain">
          <h3>Frontend Skills</h3>
          <p>
            Vue.js || React || Redux || Bootstrap || Tailwind || Vite ||
            Typescript || Material UI ||
          </p>
        </div>
      </div>
      <!-- Backend Skills -->
      <div class="col-md-4">
        <div class="contain">
          <h3>Backend Skills</h3>
          <p>
            Python || Express.js || Loopbackio || Node.js || FastAPI ||
            Relational Database || Non Relational Database || OOP || Pytest ||
          </p>
        </div>
      </div>
      <!-- DevOps Skills -->
      <div class="col-md-4">
        <div class="contain">
          <h3>DevOps Skills</h3>
          <p>
            Terraform || Docker || Linux || Jenkins || ECR || EKS || ECS ||
            Ansible || AWS ||
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {};
  },
};
</script>

<style scoped>
.skills_header {
  height: 30vh;
  color: #f78f1e;
  width: 65%;
  padding-top: 16px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Courier New", Courier, monospace;
  font-size: 4em;
}
.contain {
  background-color: whitesmoke;
  height: 30vh;
  box-shadow: 2px 2px 2px black;
}
.contain:hover {
  background-color: whitesmoke;
  height: 30vh;
  box-shadow: 5px 5px 4px #f78f1e;
}
.contain h3 {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 32px;
  color: #f78f1e;
}
.contain p {
  text-align: justify;
  font-family: "Times New Roman", Times, serif;
  padding: 18px;
  font-size: 18px;
}
</style>
