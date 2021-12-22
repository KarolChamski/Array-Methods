<template>
  <div class="background" v-if="modalVisible">
    <div class="wrapper">

      <div class="modal">
      <div class="modal-close">
        <button @click="$emit('closeModal')">
          <img src="../assets/close.svg" alt="zamknij okno" />
        </button>
      </div>

        <h1>Array Methods</h1>
        <p>
          Hello, I want to simply explain you how array methods works. I've made
          this examples using vue.js framework, but don't worry, i'll give you
          vanilla javascript code. Here is starting code, which is the base for
          our examples - We'll be working on christmas characters and their
          properties!
        </p>



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
            </pre
              >
            </div>

          </div>


        <div class="modal-go">
          <button @click="$emit('closeModal')">OK, let's go!</button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["modalVisible"],
  data() {
    return {
      jsVisible: true,
      vueVisible: false,
    };
  },
};
</script>
<style scoped>
.background {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.8);
}
.modal {
  font-family: "Roboto";
  z-index: 9999;
  color: rgb(255, 255, 255);
}
.modal-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-go {
  display: flex;
  justify-content: center;
  margin: 2rem;
  padding-bottom: 2rem;
}
.modal-close button {
  padding: 1rem;
  margin-top: 1rem;
  background: none;
  border: none;
  color: rgb(255, 255, 255);
}
.modal-close {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.modal-go button {
  padding: 1rem 2rem;
  border: none;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  color: rgb(0, 0, 0);
}

.modal-code {
  width: 400px;
  height: 300px;
  margin-top: 1rem;
  background-color: rgb(0, 0, 0);
  color: white;
}
.code-js,
.code-vue {
  height: 100%;
  overflow-y: hidden;
}
pre {
  height: 100%;
  overflow-y: auto;
}
button {
  font-family: sans-serif;
}
h1 {
  font-size: 60px;
  text-align: center;
  font-family: "relation-two", sans-serif;
}
@media (min-width: 1024px) {
  .modal-code {
    height: 450px;
  }
}
</style>
