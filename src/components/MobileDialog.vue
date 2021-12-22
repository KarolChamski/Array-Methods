<template>
  <div class="mobile-dialog">
    <h2>Array Methods</h2>
    <p>Rotate your device to enjoy the app!</p>
  </div>
</template>

<style scoped>
.mobile-dialog {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgb(0, 0, 0);
}
p {
  z-index: 10000;
  font-family: "Roboto";
  color: rgb(255, 255, 255);
}
h2 {
  font-size: 60px;
  text-align: center;
  font-family: "relation-two", sans-serif;
  color: rgb(255, 255, 255);
  margin: 0;
  padding: 2rem;
}
@media (min-width: 568px) {
  .mobile-dialog {
    display: none;
  }
}
</style>
