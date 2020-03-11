<template>
  <Layout>
    <HeaderH2 title="Kontaktai" />
    <div class="contact-section">
      <Decoration :large="true" />
      <address>
        <span class="phone">
          <font-awesome class="phone-icon" :icon="['fas', 'phone']" />+370 672 XX XXX
        </span>
        <span class="phone">
          <font-awesome class="phone-icon" :icon="['fas', 'phone']" />+370 656 XX XXX
        </span>
        <span class="address-line">Radvilėnų pl. 17</span>
        <span class="address-line">Kaunas</span>
      </address>
      <div class="map" />
    </div>
  </Layout>
</template>

<script>
import HeaderH2 from "@/components/HeaderH2/HeaderH2.vue";
import ServicesSection from "@/components/ServicesSection/ServicesSection.vue";
import Decoration from "@/components/Decoration/Decoration.vue";

export default {
  metaInfo: {
    title: "Kontaktai"
  },
  components: {
    HeaderH2,
    Decoration
  }
};
</script >

<style lang="scss" scoped>
.contact-section {
  background: $color-background;
}

address {
  @include flex(center, center, column);
  height: rem(300);
}

span {
  display: block;
  font-family: $font-family-header;

  &:nth-child(3) {
    margin-top: rem(10);
  }
}

.phone {
  @include font(null, $font-weight-bold, $font-size-h1);
  color: $color-button;
}

.phone-icon {
  color: darken($color-logo, 12%);
  margin-right: rem(10);
}

.address-line {
  font-size: $font-size-h2;
  color: $color-header;
}

.map {
  width: 100%;
  height: rem(350);
  background: url("~@/assets/images/map.jpg") no-repeat center;
  background-size: cover;
  margin-bottom: rem(70);
  @include tablet-up {
    margin-bottom: rem(100);
    height: rem(600);
  }
}
</style>
