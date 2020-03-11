<template>
  <g-link class="link" :to="$props.to">{{$props.text}}</g-link>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  @include font($font-family-header, $font-weight-regular);
  padding: 0.75rem 2.3rem;
  color: $color-light;
  background: $color-button;
  border: 2px solid darken($color-button, 3%);
  border-radius: 1.9rem;
  -webkit-box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.22);
  box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.22);
  transition: transform 0.2s ease-in-out, box-shadow 0.1s ease-in-out;

  @include mobile-up {
    &:hover {
      transform: translate3d(3px, -3px, 0);
      box-shadow: -4px 6px 10px 0px rgba(0, 0, 0, 0.38);
      -webkit-box-shadow: -4px 6px 10px 0px rgba(0, 0, 0, 0.38);
      -moz-box-shadow: -4px 6px 10px 0px rgba(0, 0, 0, 0.38);
    }
  }
}
</style>