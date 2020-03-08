<template>
  <Layout>
    <Hero />
    <ServicesSection />
  </Layout>
</template>

<script>
import Hero from "@/components/Hero/Hero.vue";
import Decoration from "@/components/Decoration/Decoration.vue";
import ServicesSection from "@/components/ServicesSection/ServicesSection.vue";

export default {
  metaInfo: {
    title: "Masažo salonas Kaune"
  },
  components: {
    Hero,
    Decoration,
    ServicesSection
  }
};
</script >

<style lang="scss" scoped>
</style>
