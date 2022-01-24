b
<template>
  <mobile-dialog></mobile-dialog>
  <methods-bar
    :namesOption="option.namesOption"
    :giftsOption="option.giftsOption"
    :heightOption="option.heightOption"
    :boysOption="option.boysOption"
    :girlsOption="option.girlsOption"
    @showModal="showModal"
    :codeButtons="codeButtons"
    :jsCode="jsCode"
    :result="result"
    @refresh="updateCharacters"
    @filter="filter"
    @map="map"
    @sort="sort"
    @every="every"
    @some="some"
    @reduce="reduce"
  ></methods-bar>
  <the-characters :characters="updatedCharacters"></the-characters>
  <the-modal
    @closeModal="modalVisible = false"
    :modalVisible="modalVisible"
  ></the-modal>
</template>

<script>
import MethodsBar from "./components/MethodsBar.vue";
import TheCharacters from "./components/TheCharacters.vue";
import TheModal from "./components/TheModal.vue";
import MobileDialog from "./components/MobileDialog.vue";

export default {
  components: {
    MethodsBar,
    TheCharacters,
    TheModal,
    MobileDialog,
  },
  data() {
    return {
      modalVisible: true,
      codeButtons: false,
      result: "",
      jsCode: "",
      vueCode: "",
      option: [
        { girlsOption: false },
        { boysOption: false },
        { heightOption: false },
        { namesOption: false },
        { giftsOption: false },
      ],
      characters: [
        {
          name: "Micky",
          height: 2,
          gifts: 23,
          dressColor: "green",
          img: "Micky.png",
          gender: "male",
          type: "elf",
        },
        {
          name: "Ollie",
          height: 1,
          gifts: 8,
          dressColor: "green",
          img: "Ollie.png",
          gender: "male",
          type: "elf",
        },
        {
          name: "Elly",
          height: 3,
          gifts: 30,
          dressColor: "green",
          img: "Elly.png",
          gender: "female",
          type: "elf",
        },
        {
          name: "Santa",
          height: 4,
          gifts: 100,
          dressColor: "red",
          img: "Santa.png",
          gender: "male",
          type: "santa",
        },
        {
          name: "Mrs. Santa",
          height: 4,
          gifts: 49,
          dressColor: "red",
          img: "Mrs.Santa.png",
          gender: "female",
          type: "santa",
        },
        {
          name: "Lili",
          height: 1,
          gifts: 64,
          dressColor: "green",
          img: "Lili.png",
          gender: "female",
          type: "elf",
        },
        {
          name: "Sophia",
          height: 3,
          gifts: 65,
          dressColor: "green",
          img: "Sophia.png",
          gender: "female",
          type: "elf",
        },
        {
          name: "Mia",
          height: 2,
          gifts: 23,
          dressColor: "green",
          img: "Mia.png",
          gender: "female",
          type: "elf",
        },
        {
          name: "John",
          height: 3,
          gifts: 45,
          dressColor: "green",
          img: "John.png",
          gender: "male",
          type: "elf",
        },
      ],
      updatedCharacters: [],
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    updateCharacters() {
      this.updatedCharacters = this.characters;
      this.result = "";
      this.jsCode = "";
      this.vueCode = "";
      this.codeButtons = false;
    },
    map() {
      const mapArray = this.characters.map((character) => character.name);
      this.result = "Names of characters: " + mapArray;
      this.codeButtons = true;
      this.jsCode =
        "const mapArray = characters.map(character => character.name)";
    },
    filter(gender) {
      const filterArray = this.characters.filter(
        (character) => character.gender == gender
      );
      this.updatedCharacters = filterArray;
      this.codeButtons = true;
      if (gender == "male") {
        this.jsCode =
          "const filterArray = characters.filter(character => character.gender == 'male')";
        this.resetOptions();
        this.option.boysOption = true;
      } else if (gender == "female") {
        this.jsCode =
          "const filterArray = characters.filter(character => character.gender == 'female')";
        this.resetOptions();
        this.option.girlsOption = true;
      }
    },
    sort(property) {
      this.codeButtons = true;

      if (property == "height") {
        this.characters.sort((a, b) => a.height - b.height);
        this.jsCode =
          "const sortHeightArray = characters.sort((a,b) =>  a.height - b.height)";
        this.resetOptions();
        this.option.heightOption = true;
      } else if (property == "name") {
        this.characters.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          } else {
            return 1;
          }
        });
        this.jsCode =
          "const sortNameArray = characters.sort((a,b) => { if (a.name < b.name){ return -1 } else { return 1 } })";
        this.resetOptions();
        this.option.namesOption = true;
      } else {
        this.characters.sort((a, b) => a.gifts - b.gifts);
        this.jsCode =
          "const sortNameArray = characters.sort( (a,b) => a.gifts - b.gifts)";
        this.resetOptions();
        this.option.giftsOption = true;
      }
    },
    every() {
      const everyArray = this.characters.every(
        (character) => character.dressColor == "green"
      );
      this.result = everyArray;
      this.codeButtons = true;
      this.jsCode =
        "const everyArray = characters.every((character) => character.dressColor == 'green')";
    },
    some() {
      const someArray = this.characters.some(
        (character) => character.type == "santa"
      );
      this.result = someArray;
      this.codeButtons = true;
      this.jsCode =
        "const someArray = characters.some((character)=> character.type == 'santa')";
    },
    reduce() {
      const reduceArray = this.characters.reduce(
        (acc, cur) => acc + cur.gifts,
        0
      );
      this.result = reduceArray;
      this.codeButtons = true;
      this.jsCode =
        "const reduceArray = characters.reduce ((acc,cur) =>  acc + cur.gifts , 0)";
    },
    resetOptions() {
      const mapOptions = this.option.map((option) => option.value == false);
      this.option = mapOptions;
    },
  },

  mounted() {
    this.updateCharacters();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  overflow-x: hidden;
  max-height: 100vh;
}

html {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
    background-image: url('./assets/Background.jpg');
background-position: center;
background-size: cover;
}

body {
  height: 100vh;
  max-height: 100vh;
  margin: 0;
  overflow-x: hidden;
}

.wrapper {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
button {
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  padding: 0.3rem 1.5rem;
  cursor: pointer;
}
</style>
