<template>
  <header>
    <div class="top-section">
      <Logo :size="87" />
    </div>
    <Decoration />
    <Menu />
  </header>
</template>

<script>
import Menu from "@/components/Menu/Menu.vue";
import Decoration from "@/components/Decoration/Decoration.vue";
import Logo from "@/components/Logo/Logo.vue";

export default {
  name: "Header",
  components: {
    Menu,
    Decoration,
    Logo
  }
};
</script>

<style  lang="scss" scoped>
.top-section {
  padding: 0.8rem 0;
  @include flex(center);
}
</style>