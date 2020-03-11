<template>
  <nav :class="{show: $props.isOpen || $props.isDesktop}">
    <ul>
      <li v-for="item in items" :key="item.name">
        <g-link :to="item.path">{{item.name}}</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    isDesktop: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      items: [
        { name: "apie mus", path: "/" },
        { name: "paslaugos", path: "/services" },
        { name: "kainoraštis", path: "/pricing" },
        { name: "Kontaktai", path: "/contact" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
nav {
  display: none;
  height: auto;
  overflow: hidden;
  background-color: $color-menu-background;

  @include tablet-up {
    height: rem(56);
  }
}

ul {
  width: 100%;
  height: 100%;
  padding: 0;
  @include container;
  @include flex(flex-end, flex-start, column);
  padding: rem(20) 0;

  @include tablet-up {
    @include flex(null, center, row);
  }
}

li {
  list-style: none;
  padding: 0;
  margin: rem(15) rem(10);
}

a {
  padding: 0 0.5rem;
  display: block;
  text-decoration: none;
  @include font($font-family-header, $font-weight-bold);
  color: $color-menu-text;
  text-transform: uppercase;
  @include hover;
}

.show {
  display: block;
}
</style>