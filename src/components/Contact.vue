<template>
  <div class="wrapper">
    <div class="container">
      <h3 class="contact_header">Contact</h3>

      <div class="row">
        <form class="row">
          <div class="col-md-6 form-group">
            <label for="name">Name</label>
            <input
              class="form-control"
              type="text"
              name="name"
              id="name"
              v-model="firstName"
              required
            />
          </div>
          <div class="col-md-6 form-group">
            <label for="email">Email</label>
            <input
              class="form-control"
              type="text"
              name="email"
              id="email"
              v-model="email"
              required
            />
          </div>
          <div class="col-md-12 form-group">
            <label for="subject">Subject</label>
            <input
              class="form-control"
              type="text"
              name="subject"
              id="subject"
              v-model="subject"
              required
            />
          </div>
          <div class="col-md-12 form-group">
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              class="form-control"
              v-model="message"
              required
            ></textarea>
          </div>
          <button
            class="btn btn-outline-warning"
            style="width: 97%; margin-left: auto; margin-right: auto"
            @click="sendMessage"
            type="submit"
          >
            Send message
          </button>
        </form>
        <div class="row">
          <div class="col-md-12">
            <div class="social_media">
              <p class="linkedin">
                <a
                  href="https://www.linkedin.com/in/tolulopedosuidowu/"
                  target="”_blank”"
                  rel="”noreferrer”"
                  ><font-awesome-icon icon="fa-brands fa-linkedin-in"
                /></a>
              </p>
              <p class="twitter">
                <a
                  href="https://twitter.com/Macdit1"
                  target="”_blank”"
                  rel="”noreferrer”"
                  ><font-awesome-icon icon="fa-brands fa-x-twitter"
                /></a>
              </p>
              <p class="github">
                <a
                  href="https://github.com/MrMacDit"
                  target="”_blank”"
                  rel="”noreferrer”"
                  ><font-awesome-icon icon="fa-brands fa-github"
                /></a>
              </p>
              <p class="bitbucket">
                <a
                  href="https://bitbucket.org/tioluwalope/workspace/repositories/"
                  target="”_blank”"
                  rel="”noreferrer”"
                  ><font-awesome-icon icon="fa-brands fa-bitbucket"
                /></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      firstName: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      // let name = `${this.firstName} + ${this.email} + ${this.subject} + ${this.message}`;
      // console.log("HELLO WORLD", name);
      const mailtoLink = `mailto:idowutolulope23@gmail.com?body=
        name=${encodeURIComponent(this.firstName)}%0D%0A
        email=${encodeURIComponent(this.email)}%0D%0A
        subject=${encodeURIComponent(this.subject)}%0D%0A
        message=${encodeURIComponent(this.message)}%0D%0A%0D%0A`;

      window.open(mailtoLink, "_self");
    },
  },
};
</script>

<style scoped>
.contact_header {
  height: 15vh;
  color: #f78f1e;
  width: 30%;
  padding-top: 12px;
  margin-left: auto;
  margin-right: auto;
  /* text-shadow: 1px 1px 1px black; */
  font-family: "Courier New", Courier, monospace;
  font-size: 5.5em;
}
.social_media {
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  background-color: #28282b23;
}
.social_media p {
  margin: 24px;
  font-size: 18px;
}
.linkedin a {
  font-size: 18px;
  text-shadow: 1px 1px 1px whitesmoke;
  color: #0a66c2;
}

.twitter a {
  font-size: 18px;
  text-shadow: 1px 1px 1px whitesmoke;
  color: #000000;
}

.github a {
  font-size: 18px;
  text-shadow: 1px 1px 1px whitesmoke;
  color: #000000;
}

.bitbucket a {
  font-size: 18px;
  text-shadow: 1px 1px 1px whitesmoke;
  color: #205081;
}

.linkedin a:hover {
  font-size: 20px;
  box-shadow: 1px 1px 2px #00ff00;
  color: #0a66c2;
}
.twitter a:hover {
  font-size: 20px;
  box-shadow: 1px 1px 2px #00ff00;
  color: #000000;
}
.github a:hover {
  font-size: 20px;
  box-shadow: 1px 1px 2px #00ff00;
  color: #000000;
}
.bitbucket a:hover {
  font-size: 20px;
  box-shadow: 1px 1px 2px #00ff00;
  color: #205081;
}
</style>
