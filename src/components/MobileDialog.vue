<template>
  <div class="mobile-dialog">
    <p>Rotate your device to better enjoy the app!</p>
  </div>
</template>

<style scoped>
.mobile-dialog {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 9999;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
}
p {
  z-index: 10000;
  font-family: "Roboto";
  color: rgb(255, 255, 255);
}
@media (min-width: 568px) {
  .mobile-dialog {
    display: none;
  }
}
</style>
