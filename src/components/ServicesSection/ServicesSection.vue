<template>
  <div class="service-section">
    <h2 class="header-h2">Paslaugos</h2>
    <p>atliekame ivairias masazo rusys</p>
    <div class="flex j-center wrap">
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
          title: "Gydomasis Masazas",
          image: require("@/assets/images/hero.jpg"),
          content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos doloreset quas molestias provident destiny is about voles."
        },
        {
          title: "Celiulitas",
          image: require("@/assets/images/hero.jpg"),
          content:
            "reiškia skirtingus dalykus, kurie jungiasi į bendrą struktūrą ir taip formuoja unikalų miesto veidą. Atskiros struktūros dalys nėra statiškos, jos turi judėjimo kryptį – tarsi kiekvieno mūsų brėžiamos JUOSTOS laike ir erdvėje. Todėl miesto vaizdas nėra baigtinis, jis tęsiasi. Jis nuolat kinta ir stovi"
        },
        {
          title: "Taskinis Masazas",
          image: require("@/assets/images/hero.jpg"),
          content:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos doloreset quas molestias provident destiny is about voles."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.service-section {
  min-height: 1060px;
}

h2,
p {
  width: 100%;
  text-align: center;
}

p {
  font-size: $font-regular-large;
  color: $dark-sand;
  padding: 0 1.5rem;
  margin: 2.3rem 0 2rem 0;
}

h2 {
  color: $dark-brown;
  text-transform: uppercase;
}
</style>