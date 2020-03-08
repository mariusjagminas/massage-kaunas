<template>
  <Layout>
    <div class="spacer"></div>
    <div class="contact-section">
      <HeaderH2 title="Kontaktai" />
      <Decoration class="top-decoration" />
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
      <g-image src="~/assets/images/map.png" alt="map" class="map" background="red" />
    </div>
  </Layout>
</template>

<script>
import HeaderH2 from "@/components/HeaderH2/HeaderH2.vue";
import ServicesSection from "@/components/ServicesSection/ServicesSection.vue";
import Decoration from "@/components/Decoration/Decoration.vue";

export default {
  metaInfo: {
    title: "Masažo salonas Kaune"
  },
  components: {
    HeaderH2,
    Decoration
  }
};
</script >

<style lang="scss" scoped>
.contact-section {
  background: $color-light-background;
}

.top-decoration {
  background-color: $color-background;
}

address {
  @include flex(center, center);
  flex-direction: column;
  height: rem(300);
  background: $color-background;
}

span {
  display: block;
  font-family: $font-family-header;

  &:nth-child(3) {
    margin-top: rem(10);
  }
}

.phone {
  color: $color-button;
  font-weight: $font-weight-bold;
  font-size: $font-size-h1;
}

.phone-icon {
  color: darken($color-logo, 12%);
  margin-right: rem(10);
}

.address-line {
  color: $color-header;
  font-size: $font-size-h2;
}

.map {
  width: 100%;
  margin-bottom: rem(70);
  @include tablet-up {
    margin-bottom: rem(100);
  }
}

.spacer {
  height: rem(55);
  @include tablet-up {
    display: none;
  }
}
</style>
