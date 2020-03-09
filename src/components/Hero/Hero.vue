<template>
  <div class="hero">
    <div class="cover">
      <div class="text-container">
        <p>Masažo salonas Kaune</p>
        <h1>Gydomasis ir relaksuojantis masažas</h1>
      </div>
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
.cover {
  width: 100%;
}

.hero {
  height: rem(350);
  background: url("~@/assets/images/lotus.svg") no-repeat center;
  background-size: cover;
  position: relative;

  @include tablet-up {
    height: rem(600);
  }
}

.cover {
  position: absolute;
  height: 100%;
  background: rgba(243, 243, 231, 0.2);
}

.text-container {
  height: 100%;
  margin: 0 0 0 auto;
  width: 100%;
  padding-left: rem(30);
  @include flex(center, flex-start, column);

  @include tablet-up {
    width: 50%;
  }
}

p {
  font-size: $font-size-h2;
  color: darken($color-logo, 15%);
  border-bottom: 2px solid $color-menu-text;
  margin-bottom: rem(8);
  padding-bottom: rem(8);
}

h1 {
  @include font($font-family-header, $font-weight-bold, $font-size-h1);
  color: $color-button;
  text-transform: uppercase;
  margin: 0;
}
</style>
