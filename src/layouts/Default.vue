<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>
