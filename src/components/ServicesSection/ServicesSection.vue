<template>
  <div class="service-section">
    <Decoration class="decoration" :large="true" />
    <HeaderH2 title="Mūsų pasiūlymai" subtitle="Pasirinkite jums tinkama masażą" />
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
.service-section {
  min-height: rem(930);
}

.decoration {
  margin-bottom: rem(20);
}

.wrapper {
  @include flex(center);
  flex-wrap: wrap;
  margin-top: rem(-32);
}
</style>