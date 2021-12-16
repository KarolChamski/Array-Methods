<template>
  <div class="background">
    <div class="wrapper">
      <div class="modal">
        <h2>Array Methods</h2>
        <p>
          Hello, I want to simply explain you how array methods works. 
          I've made this examples using vue.js framework, but i'll also give you vanilla javascript code.
          Here is starting code, which is the base for our examples - We'll be working on christmas characters and their properties! 
        </p>
        <div class="buttons">
            <button @click="showJs">Vanilla JavaScript</button>
            <button @click="showVue">Vue.js</button>
        </div>

        <div class="code">
            
        <div class="code-js" v-if="jsVisible">
        <pre>
        const characters = [
        {
          name: "Micky",                 
          height: 2,
          gifts: 23,
          dressColor: "green",
          img: 'Micky.png',
          gender: "male",
          type: "elf"
        },
        {
          name: "Ollie",
          height: 1,
          gifts: 8,
          dressColor: "green",
          img: 'Ollie.png',
          gender: "male",
          type: "elf"
        },
        {
          name: "Elly",
          height: 3,
          gifts: 30,
          dressColor: "green",
          img: 'Elly.png',
          gender: "female",
          type: "elf"
        },
        {
          name: "Santa",
          height: 4,
          gifts: 100,
          dressColor: "red",
          img: 'Santa.png',
          gender: "male",
          type: "santa"
        },
          {
            name: "Mrs. Santa",
            height: 4,
            gifts: 99,
            dressColor: "red",
            img: 'Mrs.Santa.png',
            gender: "female",
            type: "santa"
          },
        {
          name: "Lili",
          height: 1,
          gifts: 26,
          dressColor: "green",
          img: 'Lili.png',
          gender: "female",
          type: "elf"
        },
        {
          name: "Sophia",
          height: 3,
          gifts: 65,
          dressColor: "green",
          img: 'Sophia.png',
          gender: "female",
          type: "elf"
        },
        {
          name: "Mia",
          height: 2,
          gifts: 23,
          dressColor: "green",
          img: 'Mia.png',
          gender: "female",
          type: "elf"
        },
        {
          name: "John",
          height: 3,
          gifts: 45,
          dressColor: "green",
          img: 'John.png',
          gender: "male",
          type: "elf"
        },
      ]        
            </pre>
        </div>
        

        <div class="code-vue" v-if="vueVisible">
            <pre>
data(){
    return{
      result: '',
      characters: [
        {
          name: "Micky",
          height: 2,
          gifts: 23,
          dressColor: "green",
          img: 'Micky.png',
          gender: "male",
          type: "elf"
        },
        {
          name: "Ollie",
          height: 1,
          gifts: 8,
          dressColor: "green",
          img: 'Ollie.png',
          gender: "male",
          type: "elf"
        },
        {
          name: "Elly",
          height: 3,
          gifts: 30,
          dressColor: "green",
          img: 'Elly.png',
          gender: "female",
          type: "elf"
        },
        {
          name: "Santa",
          height: 4,
          gifts: 100,
          dressColor: "red",
          img: 'Santa.png',
          gender: "male",
          type: "santa"
        },
          {
            name: "Mrs. Santa",
            height: 4,
            gifts: 99,
            dressColor: "red",
            img: 'Mrs.Santa.png',
            gender: "female",
            type: "santa"
          },
        {
          name: "Lili",
          height: 1,
          gifts: 26,
          dressColor: "green",
          img: 'Lili.png',
          gender: "female",
          type: "elf"
        },
        {
          name: "Sophia",
          height: 3,
          gifts: 65,
          dressColor: "green",
          img: 'Sophia.png',
          gender: "female",
          type: "elf"
        },
        {
          name: "Mia",
          height: 2,
          gifts: 23,
          dressColor: "green",
          img: 'Mia.png',
          gender: "female",
          type: "elf"
        },
        {
          name: "John",
          height: 3,
          gifts: 45,
          dressColor: "green",
          img: 'John.png',
          gender: "male",
          type: "elf"
        },
      ],  
    }
  }
            </pre>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default{

    data(){
        return{
            jsVisible: true,
            vueVisible: false,
        }
    },
    methods: {
        showJs(){
            this.jsVisible = true;
            this.vueVisible = false;
        },
        showVue(){
            this.vueVisible = true ;
            this.jsVisible = false;
        }
    }
}
</script>
<style scoped>
.background {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  font-family: 'Roboto';
  z-index: 9999;
  color: rgb(255, 255, 255);
}
.code{
    width: 400px;
    height: 300px;
    background-color: rgb(0, 0, 0);
    color: white;
}
.code-js,
.code-vue{
    overflow-y: hidden;
    height: 100%;

}
pre{
    height: 100%;
    overflow-y: auto;
}



.buttons button{
    font-family: 'sans-serif';
}
</style>
