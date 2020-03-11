<template>
  <div class="about">
    <Decoration :large="true" />
    <HeaderH2 title="Apie mus" />
    <p>Čia turintys kvalifiskklsklll, medicininį išsimokslinimą įgiję masažuotojai ir kinezeterapeutai. Specialistai nuolat tobulinasi savo srityje bei gilina žinias siekdami geriausių rezultatų. Kiekvienam klientui yra suteikiama individuali konsultacija, kurios metu išsiaiškinami poreikiai, problemos bei pritaikoma gydymo metodikajhjhjhjhkl;sdl;sdl; sdkljdjksd dpiodwl;k ras.</p>
  </div>
</template>

<script>
import Decoration from "@/components/Decoration/Decoration.vue";
import HeaderH2 from "@/components/HeaderH2/HeaderH2.vue";

export default {
  name: "AboutUs",
  components: { Decoration, HeaderH2 }
};
</script>

<style lang='scss' scoped>
.about {
  background-color: $color-background;
}

p {
  @include container(rem(500));
  text-align: center;
  padding: 0 rem(10) rem(100) rem(10);

  @include laptop-up {
    @include container(rem(800));
  }
}
</style>