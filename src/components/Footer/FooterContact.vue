<template>
  <div class="contact">
    <div class="logo-contact">
      <Logo :size="90" />
    </div>
    <p>
      Vyduno al 60
      <br />Kaunas 500-56
      <br />tel: +370 679 23 XXX
      <br />tel: +370 XXX XX XXX
    </p>
  </div>
</template>

<script>
import Logo from "@/components/Logo/Logo.vue";

export default {
  name: "FooterContact",
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
p {
  font-family: $font-family-header;
  color: $color-header;
  line-height: 1.8;
  margin-bottom: rem(36);
}

.logo-contact {
  // 'display: none' also hides another logo
  height: 0;
  opacity: 0;

  @include laptop-up {
    opacity: 1;
    height: auto;
  }
}
</style>