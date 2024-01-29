<template>
  <div class="wrapper">
    <div class="card_main card">
      <a :href="link_to" target="_blank" rel="noreferrer">
        <img class="card_img card-img-top" :src="img_src" :alt="image_alt" />
      </a>
      <div
        @mouseover="showText = true"
        @mouseout="showText = false"
        @click="!showText ? (showText = true) : (showText = false)"
        class="card_body card-body"
      >
        <p v-if="showText" class="card_title card-text">{{ header }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    link_to: String,
    img_src: String,
    image_alt: String,
    header: String,
  },
  data() {
    return {
      showText: false,
      image1: `../components/images/${this.img_src}`,
      image2:
        "https://adelekeuniversity.edu.ng/wp-content/uploads/2022/12/Rectangle-79.png",
    };
  },
  async mounted() {
    console.log("Get info", this.image1);
  },
};
</script>

<style scoped>
.card-img-top {
  min-height: 230px;
}
.card_img a img {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
.card_main {
  background-color: #282c34;
  border: 2px solid whitesmoke;
  min-height: 270px;
  margin-bottom: 12px;
  /* width: 95%; */
}

.card_body .card_title {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white; /* Set the text color */
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
}
</style>
