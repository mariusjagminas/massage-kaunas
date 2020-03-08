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
  background-image: url("~@/assets/images/158428.svg");
  background-size: rem(42);
  height: rem(25);
}

.islarge {
  background-size: rem(64);
  height: rem(36);
}
</style>