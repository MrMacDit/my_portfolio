<template>
  <div class="container wrapper">
    <h3 class="about_header">About Me</h3>
    <div class="row">
      <div class="col-md-6 paragraph" style="color: whitesmoke">
        <div class="p_container">
          <p>
            Hey there! 👋 I'm Tolulope Dosu-Idowu, a Web Developer with a
            passion for translating innovative design concepts into
            pixel-perfect, responsive websites and web applications. 🕵‍♂ <br />
          </p>
          <p>
            With over 4 years of hands-on 🛠 experience in web development, I
            specialize in modern frontend frameworks like React and Vue.js 💻,
            and backend frameworks including FastAPI, Loop.js, and Express.js
            🐱‍👤. I've also got a solid grip on AWS infrastructure ☁. <br />
          </p>
          <p>
            What makes my work stand out is my commitment to creating user
            interfaces that not only look stunning but also deliver exceptional
            usability. 👨🏼‍⚕️ I love collaborating with designers, backend
            developers, and other stakeholders to ensure that our end product
            seamlessly blends functionality with aesthetics. 🤝 Let's build
            something amazing together! 🚀<font-awesome-icon icon="coffee" />
          </p>
        </div>
      </div>
      <div class="col-md-1 social_media">
        <ul>
          <li class="linkedin">
            <a
              href="https://www.linkedin.com/in/tolulopedosuidowu/"
              target="”_blank”"
              rel="”noreferrer”"
              ><font-awesome-icon icon="fa-brands fa-linkedin-in"
            /></a>
          </li>
          <li class="twitter">
            <a
              href="https://twitter.com/Macdit1"
              target="”_blank”"
              rel="”noreferrer”"
              ><font-awesome-icon icon="fa-brands fa-x-twitter"
            /></a>
          </li>
          <li class="github">
            <a
              href="https://github.com/MrMacDit"
              target="”_blank”"
              rel="”noreferrer”"
              ><font-awesome-icon icon="fa-brands fa-github"
            /></a>
          </li>
          <li class="bitbucket">
            <a
              href="https://bitbucket.org/tioluwalope/workspace/repositories/"
              target="”_blank”"
              rel="”noreferrer”"
              ><font-awesome-icon icon="fa-brands fa-bitbucket"
            /></a>
          </li>
        </ul>
      </div>
      <div class="col-md-5">
        <div class="image">
          <img
            src="./images/my_image.jpg"
            alt="Tolulope"
            class="tolulope_image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {},
};
</script>

<style scoped>
.about_header {
  height: 25vh;
  color: #f78f1e;
  width: 50%;
  padding-top: 16px;
  margin-left: auto;
  margin-right: auto;
  /* text-shadow: 1px 1px 1px black; */
  font-family: "Courier New", Courier, monospace;
  font-size: 5.5em;
}
.image {
  max-height: 75vh;
}
.image img {
  width: 100%;
  max-height: 70vh;
  object-fit: fill;
  border-radius: 18px;
  filter: grayscale(75%);
  -webkit-filter: grayscale(75%);
  transition: filter 2s;
  transition: -webkit-filter 2s;
}
.image img:hover {
  width: 100%;
  max-height: 70vh;
  object-fit: fill;
  border-radius: 18px;
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
  background: rgba(0, 0, 0, 0.781);
}
.p_container {
  width: 88%;
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  margin-bottom: auto;
  color: rgba(245, 245, 245, 0.61);
  font-family: "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
}
.p_container:hover {
  box-shadow: 4px 4px 6px #00ff00;
  transition: box-shadow 0.3s ease-in-out;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  margin-bottom: auto;
  color: rgba(245, 245, 245, 0.61);
  font-family: "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
}
.paragraph {
  text-align: justify;
  height: 75vh;
}
.social_media ul li {
  list-style: none;
  margin-top: 48px;
}
.social_media a {
  color: #f78f1e;
}

.linkedin a:hover {
  font-size: 18px;
  text-shadow: 1px 1px 1px whitesmoke;
  color: #0a66c2;
}
.twitter a:hover {
  font-size: 18px;
  text-shadow: 1px 1px 1px whitesmoke;
  color: #000000;
}
.github a:hover {
  font-size: 18px;
  text-shadow: 1px 1px 1px whitesmoke;
  color: #000000;
}
.bitbucket a:hover {
  font-size: 18px;
  text-shadow: 1px 1px 1px whitesmoke;
  color: #205081;
}
</style>
