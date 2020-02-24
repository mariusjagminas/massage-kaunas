<template>
  <Layout>
    <Hero />
    <Decoration />
  </Layout>
</template>

<script>
import Hero from "@/components/Hero/Hero.vue";
import Decoration from "@/components/Decoration/Decoration.vue";

export default {
  metaInfo: {
    title: "Masažo salonas Kaune"
  },
  components: {
    Hero,
    Decoration
  }
};
</script >

<style lang="scss" scoped>
</style>
