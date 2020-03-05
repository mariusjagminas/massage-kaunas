<template>
  <nav :class="{show: $props.isOpen || $props.isDesktop}">
    <ul class="container">
      <li v-for="item in items" :key="item.name">
        <a href>{{item.name}}</a>
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
        { name: "apie mus", path: "#" },
        { name: "Paslaugos", path: "#" },
        { name: "Nuorodos", path: "#" },
        { name: "Kontaktai", path: "#" }
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
    height: 4.31rem;
  }
}

ul {
  width: 100%;
  height: 100%;
  padding: 0;
  @include flex(flex-end, flex-start);
  flex-direction: column;
  padding: rem(20) 0;

  @include tablet-up {
    flex-direction: row;
    align-items: center;
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
  font-family: $font-family-header;
  font-weight: $font-weight-bold;
  color: $color-menu-text;
  text-transform: uppercase;
  @include hover;
}

.show {
  display: block;
}
</style>