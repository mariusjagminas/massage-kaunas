<template>
  <div class="menu">
    <h5>{{menu.title}}</h5>
    <slot />
    <ul>
      <li v-for="item in menu.items" :key="item.name">
        <g-link :to="item.url">{{item.name}}</g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterMenu",
  props: {
    menu: Object
  }
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  @include flex(center, center, column);
  padding: 0 rem(20);

  &:nth-child(-n + 3) {
    display: none;
  }

  @include laptop-up {
    max-width: 25%;
    &:nth-child(-n + 4) {
      display: initial;
    }
  }
}

h5 {
  @include font(null, null, $font-size-h3);
  color: $color-button;
  margin: 0;
  padding: rem(36) 0 rem(15) 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: rem(10) 0;
}

a {
  text-decoration: none;
  @include font($font-family-header);
  color: $color-header;
  @include hover;
}
</style>

