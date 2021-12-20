<template>
  <div class="background" v-if="modalVisible">
    <div class="wrapper">
        <div class="modal-close">
            <button @click="$emit('closeModal')"><img src="../assets/close.svg" alt="zamknij okno"></button>
        </div>
      <div class="modal">
        <h2>Array Methods</h2>
        <p>
          Hello, I want to simply explain you how array methods works. 
          I've made this examples using vue.js framework, but don't worry, i'll give you vanilla javascript code.
          Here is starting code, which is the base for our examples - We'll be working on christmas characters and their properties! 
        </p>


        <div class="modal-flex">

        <div class="modal-code">
            
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
        
        </div>

        <div class="modal-go">
            <button @click="$emit('closeModal')">OK, let's go!</button>
        </div>

        </div>


      </div>
    </div>
  </div>
</template>
<script>

export default{
  props: ['modalVisible'],
    data(){
        return{
            jsVisible: true,
            vueVisible: false,
        }
    },


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
  
}
.modal {
  font-family: 'Roboto';
  z-index: 9999;
  color: rgb(255, 255, 255);
}
.modal-flex{
    display: flex;
    align-items: center;
}
.modal-go{
    justify-self: flex-end;
    margin-left: 2rem;
}
.modal-close button{
    padding: 1rem;
    margin-top: 1rem;
}
.modal-close{
width: 100%;
display: flex;
justify-content: flex-end;
}
.modal-go button{
    padding: 1rem 2rem;
}

.modal-code{
    width: 400px;
    height: 300px;
    background-color: rgb(0, 0, 0);
    color: white;
    margin-top: 1rem;
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



button{
    font-family: sans-serif;
}
</style>
