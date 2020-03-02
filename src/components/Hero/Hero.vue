<template>
  <div class="hero">
    <div class="flex j-flex-end a-center inner-container">
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
.hero {
  width: 100%;
  height: 600px;
  background: url("~@/assets/images/hero.jpg") no-repeat center;
  background-size: cover;
}

.inner-container {
  width: 100%;
  height: 100%;
  background: rgba(243, 243, 231, 0.2);
}

h1 {
  font-family: $font-secondary;
  font-size: $font-xx-large;
  color: $white;
  width: 30.6rem;
  margin-right: 6.2rem;
}
</style>