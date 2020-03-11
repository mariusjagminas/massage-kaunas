<template>
  <div class="service">
    <div class="circle" :style="{'background-image': 'url('+ $props.serviceData.image +')'}"></div>
    <div class="service-container">
      <div class="ornament"></div>
      <h3>{{$props.serviceData.title}}</h3>
      <p>{{$props.serviceData.content | truncate(200)}}</p>
    </div>
    <Button text="Plačiau" />
  </div>
</template>

<script>
import Button from "@/components/ServicesSection/Button.vue";
import truncate from "@/filters/truncate.js";

export default {
  name: "Service",
  components: { Button },
  props: {
    serviceData: {
      type: Object,
      required: true
    }
  },
  filters: {
    truncate
  }
};
</script>

<style lang="scss" scoped>
.service {
  @include flex(center);
  flex-wrap: wrap;
  position: relative;
  max-width: 21.3rem;
  margin: 10rem 0 4.3rem 0;

  @include mobile-up {
    margin: 10rem rem(10) 4.3rem rem(10);
  }
}

.service-container {
  height: 25rem;
  margin-bottom: rem(35);
  position: relative;
  background: $color-background;
}

.circle-wrapper {
  width: 100%;
}

.circle {
  @include flex(center, center);
  position: absolute;
  top: -7.2rem;
  z-index: 100;
  height: 14.4rem;
  width: 14.4rem;
  border-radius: 9.4rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::after {
    content: "";
    width: 95%;
    height: 95%;
    border-radius: 9.4rem;
    border: 1px dotted #ffffff;
  }
}

.ornament {
  background: url("~@/assets/images/ornament.svg") no-repeat center;
  width: 100%;
  height: 3.43rem;
}

h3,
p {
  text-align: center;
  padding: rem(4) rem(15);
}

h3 {
  @include font($font-family-header, $font-weight-light, $font-size-h2);
  color: $color-header;
  margin: 5.5rem 0 0 0;
}

p {
  @include font($font-family-header, $font-weight-regular, $font-size-feature);
  line-height: 1.9;
}
</style>