<template>
  <nav>
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
  data() {
    return {
      items: [
        { name: "Apie mus", path: "#" },
        { name: "Paslaugos", path: "#" },
        { name: "Terapija", path: "#" },
        { name: "Kontaktas", path: "#" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
nav {
  background-color: $color-menu-background;
  height: 4.31rem;
}

ul {
  width: 100%;
  height: 100%;
  padding: 0;
  @include flex(flex-end, center);
}

li {
  list-style: none;
  padding: 0;
  margin: 0.5rem;
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
</style>