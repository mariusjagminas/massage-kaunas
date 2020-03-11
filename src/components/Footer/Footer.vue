<template>
  <div class="footer">
    <Decoration :large="true" />
    <div class="top-section">
      <FooterMenu v-for="menu in menuData" :key="menu.title" :menu="menu" />
      <FooterMenu :menu="{title: 'Kontaktai'}">
        <FooterContact />
      </FooterMenu>
      <div class="logo">
        <Logo :size="42" />
      </div>
    </div>
    <div class="bottom-section">
      <p>&copy; {{ new Date().getFullYear()}}</p>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo/Logo.vue";
import Decoration from "@/components/Decoration/Decoration.vue";
import FooterMenu from "./FooterMenu.vue";
import FooterContact from "./FooterContact.vue";
import menuData from "./footerData";

export default {
  name: "Footer",
  components: {
    Logo,
    Decoration,
    FooterMenu,
    FooterContact
  },
  data() {
    return {
      menuData: menuData
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 1;
  background-color: $color-light-background;
}

.logo {
  border: 2px solid #deddd6; // color is the same as fill of ornament.svg
  border-radius: rem(70);
  background-color: $color-light-background;
  width: 6.2rem;
  height: 6.2rem;
  position: absolute;
  z-index: -2;
  top: rem(-75);
  left: calc(50% - 3.1rem);
  @include flex(center);
  padding-top: rem(7);
}

.top-section {
  position: relative;
  @include container;
  @include flex(flex-start);

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: rem(-36);
    z-index: -1;
    background-color: $color-light-background;
  }

  @include laptop-up {
    min-height: rem(360);
  }
}

.bottom-section {
  height: rem(80);
  background-color: $color-footer;
  @include flex(center, center);
}

p {
  @include font($font-family-header, $font-weight-bold);
  color: $color-header;
}
</style>