<template>
  <div class="header">
    <h2 :class="{withsubtitle: $props.subtitle}">{{$props.title}}</h2>
    <span></span>
    <p v-if="$props.subtitle">{{$props.subtitle}}</p>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  max-width: rem(600);
  height: rem(168);
  margin: 0 auto;
  padding: 0 rem(20);
  @include flex(flex-start, center);
  flex-direction: column;
}

h2 {
  font-family: $font-family-header;
  font-size: $font-size-h2;
  color: $color-header;
  text-transform: uppercase;
  margin-top: rem(55);
}

span {
  display: block;
  width: 90%;
  max-width: rem(300);
  height: rem(8);
  margin-top: rem(-11);
  background: url("~@/assets/images/158428.svg");
  background-size: rem(14);
}

p {
  margin-top: rem(15);
  text-align: center;
}

.withsubtitle {
  margin-top: rem(30);
}
</style>