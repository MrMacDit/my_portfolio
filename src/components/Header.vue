<template>
  <div class="wrapper">
    <h3 class="name">Tolulope Dosu-Idowu</h3>
    <p class="roles">
      <span class="front">Frontend Developer</span> ||
      <span class="back">Backend Developer</span> ||
      <span class="devops">DevOps Engineer</span>
    </p>
    <div class="action_buttons">
      <button
        class="btn btn-outline-success"
        @click="scrollFunction('contact')"
        style="margin-right: 24px"
      >
        Say Hello
      </button>
      <a
        href="../../public/pdfs/Tolulope_Dosu_Idowu.pdf"
        target="”_blank”"
        rel="”noreferrer”"
      >
        <button class="btn btn-outline-warning" style="margin-left: 24px">
          Download Resume
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    scrollFunction(selector) {
      let element = document.getElementById(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("Error occurred at our end");
      }
    },
  },
};
</script>

<style scoped>
.name {
  font-family: "Luxurious Script", cursive;
  text-align: center;
  font-weight: 600;
  font-size: 100px;
}
.roles {
  font-family: "Caveat", cursive;
  text-align: center;
  font-size: 25px;
}
.action_buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.wrapper {
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.wrapper h3 {
  text-shadow: 6px 4px 1px black;
}
.wrapper p {
  text-shadow: 2px 2px 1px black;
}
</style>
