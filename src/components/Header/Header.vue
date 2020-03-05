<template>
  <header>
    <button @click="toggleMenu" type="button">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="top-section">
      <Logo :size="isDesktop? 87: 45" />
    </div>
    <Decoration v-if="isDesktop" />
    <Menu :isOpen="isOpen" :isDesktop="isDesktop" />
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
  },
  data() {
    return {
      isOpen: false,
      isDesktop: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    watchScreenResize() {
      this.isDesktop = window.innerWidth > 720;
      window.onresize = () => {
        this.isDesktop = window.innerWidth > 720;
      };
    }
  },
  created() {
    this.watchScreenResize();
  }
};
</script>

<style  lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  z-index: 1000;
  background-color: $color-background;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
  @include tablet-up {
    position: relative;
    box-shadow: none;
  }
}

button {
  @include flex(center);
  flex-wrap: wrap;
  width: rem(40);
  height: rem(40);
  position: absolute;
  top: rem(8);
  left: rem(10);
  background: none;
  border: 1px solid lighten($color-menu-text, 30%);
  border-radius: 3px;

  @include tablet-up {
    display: none;
  }
}

span {
  display: block;
  border-bottom: 1px solid $color-menu-text;
  width: 80%;
  margin: rem(2.5) 0;
}

.top-section {
  padding: rem(13) 0;
  @include flex(center);
}
</style>