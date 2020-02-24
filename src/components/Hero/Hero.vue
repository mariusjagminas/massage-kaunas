<template>
  <div class="hero">
    <div class="flex inner-container">
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

<style>
.hero {
  width: 100%;
  height: 600px;
  background: url("~@/assets/images/hero.jpg") no-repeat center;
  background-size: cover;
}

.inner-container {
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  background: rgba(243, 243, 231, 0.2);
}

h1 {
  color: #ffffff;
  font-size: 40px;
  width: 490px;
  margin-right: 100px;
}
</style>