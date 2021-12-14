<template>
  <methods-bar></methods-bar>
</template>

<script>
import MethodsBar from './components/MethodsBar.vue';

export default {
  components:{
    MethodsBar
  },
  data(){
    return{
      characters: [
        {
          name: "Micky",
          height: 2,
          gifts: 23,
          dressColor: "green",
          img: 'Micky.png'
        },
        {
          name: "Ollie",
          height: 1,
          gifts: 8,
          dressColor: "green",
          img: 'Ollie.png'
        },
        {
          name: "Elly",
          height: 3,
          gifts: 30,
          dressColor: "green",
          img: 'Elly.png'
        },
        {
          name: "Santa",
          height: 4,
          gifts: 100,
          dressColor: "red",
          img: 'Micky.png'
        },
        {
          name: "Lili",
          height: 1,
          gifts: 26,
          dressColor: "green",
          img: 'Lili.png'
        },
        {
          name: "Sophia",
          height: 3,
          gifts: 65,
          dressColor: "green",
          img: 'Sophia.png'
        },
        {
          name: "Mrs. Santa",
          height: 4,
          gifts: 99,
          dressColor: "red",
          img: 'Mrs.Santa.png'
        },
        {
          name: "Mia",
          height: 2,
          gifts: 23,
          dressColor: "green",
          img: 'Micky.png'
        },
        {
          name: "John",
          height: 3,
          gifts: 45,
          dressColor: "green",
          img: 'Micky.png'
        },
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  overflow-x: hidden;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #C1E5E2;
}
.wrapper {
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
