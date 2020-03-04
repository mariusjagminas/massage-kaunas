<template>
  <div class="hero">
    <div class="inner-container">
      <h1>
        Gydomasis ir Relaksinis
        <br />Masazas
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss" scoped>
.hero,
.text-container {
  width: 100%;
}

.hero {
  height: 600px;
  background: url("~@/assets/images/hero.jpg") no-repeat center;
  background-size: cover;
}

.inner-container {
  height: 100%;
  @include flex(center, center);
  background: rgba(243, 243, 231, 0.2);
}

h1 {
  font-family: $font-family-header;
  font-size: $font-size-h1;
  color: $color-light;
  width: 30.6rem;
  margin-left: rem(100);
}
</style>