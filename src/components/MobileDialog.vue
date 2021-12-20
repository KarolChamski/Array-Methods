<template>
<div class="mobile-dialog">
    <p>Rotate your device to better enjoy the app!</p>
</div>
</template>

<style scoped>
.mobile-dialog {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  
}
p {
  font-family: 'Roboto';
  z-index: 10000;
  color: rgb(255, 255, 255);
}
@media (min-width: 568px){
    .mobile-dialog{
        display: none;
    }
}
</style>