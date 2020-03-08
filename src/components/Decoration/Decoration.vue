<template>
  <div class="decoration" :class="{islarge: $props.isLarge}"></div>
</template>

<script>
export default {
  name: "Decoration",
  props: {
    isLarge: Boolean,
    default: false
  }
};
</script>

<style lang="scss" scoped>
.decoration {
  background-image: url("~@/assets/images/158428.svg");
  background-size: 3rem;
  height: 1.75rem;
}

.islarge {
  background-size: rem(64);
  height: rem(36);
}
</style>