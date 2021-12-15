<template>
  <methods-bar @filter="filter" :result="result" @map="map" @sort="sort"></methods-bar>
  <the-characters :characters="updatedCharacters" ></the-characters>


</template>

<script>
import MethodsBar from './components/MethodsBar.vue';
import TheCharacters from './components/TheCharacters.vue';


export default {
  components:{
    MethodsBar,
    TheCharacters,
    
  },
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
          gender: "male"
        },
        {
          name: "Ollie",
          height: 1,
          gifts: 8,
          dressColor: "green",
          img: 'Ollie.png',
          gender: "male"
        },
        {
          name: "Elly",
          height: 3,
          gifts: 30,
          dressColor: "green",
          img: 'Elly.png',
          gender: "female"
        },
        {
          name: "Santa",
          height: 4,
          gifts: 100,
          dressColor: "red",
          img: 'Santa.png',
          gender: "male"
        },
          {
            name: "Mrs. Santa",
            height: 4,
            gifts: 99,
            dressColor: "red",
            img: 'Mrs.Santa.png',
            gender: "female"
          },
        {
          name: "Lili",
          height: 1,
          gifts: 26,
          dressColor: "green",
          img: 'Lili.png',
          gender: "female"
        },
        {
          name: "Sophia",
          height: 3,
          gifts: 65,
          dressColor: "green",
          img: 'Sophia.png',
          gender: "female"
        },
        {
          name: "Mia",
          height: 2,
          gifts: 23,
          dressColor: "green",
          img: 'Mia.png',
          gender: "female"
        },
        {
          name: "John",
          height: 3,
          gifts: 45,
          dressColor: "green",
          img: 'John.png',
          gender: "male"
        },
      ],
      updatedCharacters: [],
      
    }
  },
  methods:{
    updateCharacters(){
    this.updatedCharacters = this.characters
    },
    map(){
      const mapArray = this.characters.map(character => character.name);
      this.result = "Names of characters: " +  mapArray
    },
    filter(gender){
      const filterArray = this.characters.filter(character => character.gender == gender);
      this.updatedCharacters = filterArray;
    },
    sort(property){
      if(property == "height"){
        this.characters.sort((a,b)=>  a.height - b.height);
      }
      else if(property == "name"){
        this.characters.sort((a,b)=>{
          if(a.name<b.name){
            return -1
          } else{
            return 1
          }
        })
      }
      else{
        this.characters.sort((a,b)=> a.gifts - b.gifts)
      }
    },

  },

    mounted(){
    this.updateCharacters()
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
  max-width: 1200px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

</style>
