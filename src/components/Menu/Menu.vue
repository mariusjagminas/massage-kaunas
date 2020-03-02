<template>
  <nav>
    <ul class="flex j-flex-end a-center container">
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
  background-color: $light-grey;
  height: 69px;
}

ul {
  width: 100%;
  height: 100%;
  padding: 0;
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
  font-family: $font-secondary;
  font-weight: $font-bold;
  color: $dark-grey;
  text-transform: uppercase;
  &:hover {
    opacity: 0.6;
  }
}
</style>