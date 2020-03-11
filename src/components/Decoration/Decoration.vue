<template>
  <div class="decoration" :class="{islarge: $props.large}"></div>
</template>

<script>
export default {
  name: "Decoration",
  props: {
    large: Boolean,
    default: false
  }
};
</script>

<style lang="scss" scoped>
.decoration {
  background-image: url("~@/assets/images/ornament-long.svg");
  background-size: rem(87);
  height: rem(25);
}

.islarge {
  background-size: rem(130);
  height: rem(36);
}
</style>