<template>
  <div class="flex wrap j-center service">
    <div
      class="flex j-center a-center circle"
      :style="{'background-image': 'url('+ $props.serviceData.image +')'}"
    ></div>
    <div class="service-container">
      <div class="ornament"></div>
      <h3>{{$props.serviceData.title}}</h3>
      <p>{{$props.serviceData.content}}</p>
    </div>
    <Button text="Placiau" />
  </div>
</template>

<script>
import Button from "@/components/ServicesSection/Button.vue";

export default {
  name: "Service",
  components: { Button },
  props: {
    serviceData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.service {
  position: relative;
  max-width: 21.3rem;
  margin-top: 10rem;
  margin: 10rem 0 4.3rem 0;
  @media (min-width: $mobile-up) {
    margin: 10rem 0.8rem 4.3rem 0.8rem;
  }
}

.service-container {
  height: 25rem;
  margin-bottom: 1.6rem;
  position: relative;
  background: $sand;
}

.circle-wrapper {
  width: 100%;
}

.circle {
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

h3 {
  font-family: $font-secondary;
  font-size: $font-large;
  font-weight: $font-light;
  color: $dark-brown;
  text-align: center;
  margin: 5.5rem 0 0 0;
}

p {
  text-align: center;
  color: $dark-sand;
  font-size: $font-small;
  line-height: 2;
  padding: 0 1.1rem;
}
</style>