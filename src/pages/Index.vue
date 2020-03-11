<template>
  <Layout>
    <Hero />
    <AboutUs />
  </Layout>
</template>

<script>
import Hero from "@/components/Hero/Hero.vue";
import Decoration from "@/components/Decoration/Decoration.vue";
import AboutUs from "@/components/AboutUs/AboutUs.vue";

export default {
  metaInfo: {
    title: "Masažo salonas Kaune"
  },
  components: {
    Hero,
    Decoration,
    AboutUs
  }
};
</script >

<style lang="scss" scoped>
</style>
