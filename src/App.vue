<template>
  <div class="wrapper">
    <div class="navigator">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand">Tolu's journey</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <button @click="scrollFunction('header')" class="nav-link">
                  Header
                </button>
              </li>
              <li class="nav-item">
                <button @click="scrollFunction('about')" class="nav-link">
                  About
                </button>
              </li>
              <li class="nav-item">
                <button @click="scrollFunction('projects')" class="nav-link">
                  Projects
                </button>
              </li>
              <li class="nav-item">
                <button @click="scrollFunction('skills')" class="nav-link">
                  Skills
                </button>
              </li>
              <li class="nav-item">
                <button @click="scrollFunction('codelab')" class="nav-link">
                  CodeLab
                </button>
              </li>
              <li class="nav-item">
                <button @click="scrollFunction('contact')" class="nav-link">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="header" id="header">
      <Header />
    </div>
    <div class="about" id="about">
      <About />
    </div>
    <div class="projects" id="projects">
      <Projects />
    </div>
    <div class="skills" id="skills">
      <Skills />
    </div>
    <div class="codelab" id="codelab">
      <CodeLab />
    </div>
    <div class="contact" id="contact">
      <Contact />
    </div>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import CodeLab from "./components/CodeLab.vue";
import Contact from "./components/Contact.vue";
import Skills from "./components/Skills.vue";

export default {
  name: "App",
  components: {
    Header,
    About,
    Projects,
    CodeLab,
    Skills,
    Contact,
  },
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
.navbar-brand {
  color: rgba(245, 245, 245, 0.61);
}
/* .navbar-brand:hover {
  color: #00ff00;
} */

.navbar-light {
  background-color: #28282b !important;
}
.navbar-nav {
  justify-content: space-between;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.navbar-nav li button {
  color: rgba(245, 245, 245, 0.61) !important;
}
.navbar-nav li button:hover {
  box-shadow: 2px 2px 5px #00ff00;
  color: rgba(245, 245, 245, 0.61) !important;
}
.wrapper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.header {
  background-image: url("./components/images/image2.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  filter: grayscale(65%);
  -webkit-filter: grayscale(65%);
  transition: filter 2s;
  transition: -webkit-filter 2s;
  width: 100%;
  height: 98vh;
}
.header:hover {
  background-image: url("./components/images/image2.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  filter: grayscale(5%);
  -webkit-filter: grayscale(5%);
  width: 100%;
  height: 100vh;
}
.about {
  height: 100vh;
}
.projects {
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.skills {
  background-image: url("./components/images/contact.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  filter: grayscale(85%);
  -webkit-filter: grayscale(85%);
  transition: filter 2s;
  transition: -webkit-filter 2s;
  height: 98vh;
}
.skills:hover {
  background-image: url("./components/images/contact.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  filter: grayscale(35%);
  -webkit-filter: grayscale(35%);
  transition: filter 2s;
  transition: -webkit-filter 2s;
  height: 98vh;
}
.codelab {
  height: 100vh;
}
.contact {
  height: 100vh;
  background-image: url("./components/images/image 4.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
