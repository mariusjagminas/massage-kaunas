<template>
  <Layout>
    <div class="container">
      <Decoration :large="true" />
      <div class="wrapper">
        <p>404</p>
        <h1>Tinklapis nerastas</h1>
        <a href="/">Grizti i pagrindini</a>
      </div>
    </div>
  </Layout>
</template>

<script>
import Decoration from "@/components/Decoration/Decoration.vue";

export default {
  metaInfo: {
    title: "404"
  },
  components: {
    Decoration
  }
};
</script >

<style lang="scss" scoped>
.container {
  background-color: $color-background;
}

.wrapper {
  @include container;
  @include flex(center, center, column);
  min-height: rem(500);
  padding-bottom: rem(30);
}

p,
h1,
a {
  @include font($font-family-header, bold);
}

p,
h1 {
  color: $color-button;
}

p {
  font-size: rem(60);
  margin: 0;
}

a {
  color: $color-menu-text;
  font-size: $font-size-h2;
  @include hover;
}
</style>
