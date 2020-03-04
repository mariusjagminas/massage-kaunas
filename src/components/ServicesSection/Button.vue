<template>
  <a href="#">{{$props.text}}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-family: $font-family-header;
  font-weight: $font-weight-regular;
  color: $color-light;
  background: $color-button;
  padding: 0.75rem 2.3rem;
  border-radius: 1.9rem;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.75);
  transition: transform 0.2s, box-shadow 0.2s;

  @media (min-width: $mobile-up) {
    &:hover {
      transform: translate3d(3px, -3px, 0);
      box-shadow: -4px 6px 10px 0px rgba(0, 0, 0, 0.38);
      -webkit-box-shadow: -4px 6px 10px 0px rgba(0, 0, 0, 0.38);
      -moz-box-shadow: -4px 6px 10px 0px rgba(0, 0, 0, 0.38);
    }
  }
}
</style>