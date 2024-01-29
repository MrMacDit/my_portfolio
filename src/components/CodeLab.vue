<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="codelab_header">
        <h3>Code Laboratory</h3>
      </div>
      <div class="row codelab_body">
        <div class="col-md-3">
          <!-- Starting up Terraform -->
          <Card
            link_to="https://github.com/MrMacDit/09-06-2023/tree/main/fresh_start"
            img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTwOxMBusYC-iTkvorelsvcyRp3ftlsYmPA&usqp=CAU"
            image_alt="Starting up Terraform"
            header="Starting up Terraform"
          />
        </div>
        <div class="col-md-3">
          <!-- Prometheous -->
          <Card
            link_to="https://github.com/MrMacDit/prometheus"
            img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GAm2Q52_2bXcIFQsST23eyqmJOssEUchRQ&usqp=CAU"
            image_alt="Prometheus Setup"
            header="Prometheus Setup"
          />
        </div>
        <div class="col-md-3">
          <!-- Setting up Network with Terraform -->
          <Card
            link_to="https://github.com/MrMacDit/Terraform_Network_Setup"
            img_src="data:image/png;base64,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"
            image_alt="Networking with Terraform"
            header="Networking with Terraform"
          />
        </div>
        <div class="col-md-3">
          <!-- Ansible Practices -->
          <Card
            link_to="https://bitbucket.org/tioluwalope/ansible_practice/src/master/"
            img_src="data:image/png;base64,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"
            image_alt="Ansible"
            header="Practice your ansibles"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../utilities/Card.vue";
export default {
  name: "CodeLab",
  components: {
    Card,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.codelab_header h3 {
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
.codelab_body {
  height: 75vh;
}
</style>
