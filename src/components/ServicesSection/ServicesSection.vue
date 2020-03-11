<template>
  <div>
    <HeaderH2 title="Paslaugos" subtitle="Pasirinkite jums tinkama masażą" />
    <Decoration class="decoration" :large="true" />
    <div class="wrapper">
      <Service v-for="data in serviceData" :key="data.title" :serviceData="data" />
    </div>
  </div>
</template>

<script>
import Service from "@/components/ServicesSection/Service.vue";
import HeaderH2 from "@/components/HeaderH2/HeaderH2.vue";
import serviceData from "./serviceData.js";
import Decoration from "@/components/Decoration/Decoration.vue";

export default {
  name: "ServiceSection",
  components: {
    Service,
    HeaderH2,
    Decoration
  },
  data() {
    return {
      serviceData: serviceData
    };
  }
};
</script>

<style lang="scss" scoped>
.decoration {
  background-color: $color-background;
}

.wrapper {
  background-color: $color-background;
  @include flex(center);
  flex-wrap: wrap;
  padding-bottom: rem(30);

  @include laptop-up {
    padding: rem(40) 0;
  }
}
</style>