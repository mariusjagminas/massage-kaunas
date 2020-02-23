<template>
  <div>
    <Header />
    <slot />
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

export default {
  name: "Layout",
  components: {
    Header
  }
};
</script>

<style>
</style>
