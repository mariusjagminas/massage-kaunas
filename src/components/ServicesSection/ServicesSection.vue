<template>
  <div class="service-section">
    <h2 class="header-h2">Mūsų pasiūlymai</h2>
    <p>Pasirinkite jums tinkama masażą</p>
    <div class="wrapper">
      <Service v-for="data in serviceData" :key="data.title" :serviceData="data" />
    </div>
  </div>
</template>

<script>
import Service from "@/components/ServicesSection/Service.vue";

export default {
  name: "ServiceSection",
  components: {
    Service
  },
  data() {
    return {
      serviceData: [
        {
          title: "Anticeliulitinis masažas",
          image: require("@/assets/images/candles.jpg"),
          content:
            "Atpalaiduojamasis masažas mažina kūno įtampą, stresą ir gerina nuotaiką. Specialus manipuliavimo rinkinys padeda užkirsti kelią atramos Kojų masažas skatina normalų veninio kraujo ir limfos tekėjimą "
        },
        {
          title: "Taškinis masažas",
          image: require("@/assets/images/hero.jpg"),
          content:
            "Atpalaiduojamasis masažas mažina kūno įtampą, stresą ir gerina nuotaiką. Specialus manipuliavimo rinkinys padeda užkirsti kelią atramos Kojų masažas skatina normalų veninio kraujo ir limfos tekėjimą "
        },
        {
          title: "Kojų masažas",
          image: require("@/assets/images/bed.jpg"),
          content:
            "Atpalaiduojamasis masažas mažina kūno įtampą, stresą ir gerina nuotaiką. Specialus manipuliavimo rinkinys padeda užkirsti kelią atramos Kojų masažas skatina normalų veninio kraujo ir limfos tekėjimą "
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.service-section {
  min-height: rem(930);
  background-color: $color-light-background;
}

h2,
p {
  width: 100%;
  text-align: center;
}

p {
  padding: 0 1.5rem;
  margin: rem(36) 0 rem(11) 0;
}

.wrapper {
  @include flex(center);
  flex-wrap: wrap;
}
</style>