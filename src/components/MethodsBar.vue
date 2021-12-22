<template>
  <div class="wrapper">
    <div class="buttons-bar">
      <button :class="{ active: mapOptions }" @click="showMapOptions">
        Map
      </button>
      <button :class="{ active: filterOptions }" @click="showFilterOptions">
        Filter
      </button>
      <button :class="{ active: sortOptions }" @click="showSortOptions">
        Sort
      </button>
      <button :class="{ active: everyOptions }" @click="showEveryOptions">
        Every
      </button>
      <button :class="{ active: someOptions }" @click="showSomeOptions">
        Some
      </button>
      <button :class="{ active: reduceOptions }" @click="showReduceOptions">
        Reduce
      </button>
      <button class="guide" @click="$emit('showModal')">GUIDE</button>
    </div>

    <div class="action-box">
      <div class="choose-box">
        <button
          :class="{ active: codeButtons }"
          v-if="mapOptions"
          @click="$emit('map')"
        >
          Names of Characters
        </button>

        <button
          :class="{ active: codeButtons && girlsOption }"
          @click="$emit('filter', 'female')"
          v-if="filterOptions"
        >
          Girls
        </button>
        <button
          :class="{ active: codeButtons && boysOption }"
          @click="$emit('filter', 'male')"
          v-if="filterOptions"
        >
          Boys
        </button>

        <button
          :class="{ active: codeButtons && heightOption }"
          v-if="sortOptions"
          @click="$emit('sort', 'height')"
        >
          By Height
        </button>
        <button
          :class="{ active: codeButtons && namesOption }"
          v-if="sortOptions"
          @click="$emit('sort', 'name')"
        >
          By Names
        </button>
        <button
          :class="{ active: codeButtons && giftsOption }"
          v-if="sortOptions"
          @click="$emit('sort', 'gifts')"
        >
          By gifts given
        </button>

        <button
          :class="{ active: codeButtons }"
          v-if="everyOptions"
          @click="$emit('every')"
        >
          Does every character wear green clothes?
        </button>

        <button
          :class="{ active: codeButtons }"
          v-if="someOptions"
          @click="$emit('some')"
        >
          Is there any Santa?
        </button>

        <button
          :class="{ active: codeButtons }"
          @click="$emit('reduce')"
          v-if="reduceOptions"
        >
          Total gifts given
        </button>
      </div>

      <div class="result-box" v-if="result !== ''">
        <p>Result: {{ result }}</p>
      </div>

      <button
        class="code-box"
        :class="{ active: jsCodeVisible }"
        v-if="codeButtons"
        @click="showJsCode"
      >
        Show JS code
      </button>

      <pre v-if="jsCodeVisible"> {{ jsCode }} </pre>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "result",
    "jsCode",
    "codeButtons",
    "girlsOption",
    "boysOption",
    "heightOption",
    "namesOption",
    "giftsOption",
  ],
  emits: ["refresh"],
  data() {
    return {
      mapOptions: false,
      filterOptions: false,
      sortOptions: false,
      everyOptions: false,
      someOptions: false,
      reduceOptions: false,
      jsCodeVisible: false,
    };
  },
  methods: {
    showMapOptions() {
      this.hideCode();
      this.mapOptions = !this.mapOptions;
      (this.filterOptions = false),
        (this.sortOptions = false),
        (this.everyOptions = false),
        (this.someOptions = false),
        (this.reduceOptions = false),
        this.$emit("refresh");
    },
    showFilterOptions() {
      this.hideCode();
      this.filterOptions = !this.filterOptions;
      (this.mapOptions = false),
        (this.sortOptions = false),
        (this.everyOptions = false),
        (this.someOptions = false),
        (this.reduceOptions = false),
        this.$emit("refresh");
    },
    showSortOptions() {
      this.hideCode();
      this.sortOptions = !this.sortOptions;
      (this.mapOptions = false),
        (this.filterOptions = false),
        (this.everyOptions = false),
        (this.someOptions = false),
        (this.reduceOptions = false),
        this.$emit("refresh");
    },
    showEveryOptions() {
      this.hideCode();
      this.everyOptions = !this.everyOptions;
      (this.mapOptions = false),
        (this.filterOptions = false),
        (this.sortOptions = false),
        (this.someOptions = false),
        (this.reduceOptions = false),
        this.$emit("refresh");
    },
    showSomeOptions() {
      this.hideCode();
      this.someOptions = !this.someOptions;
      (this.mapOptions = false),
        (this.filterOptions = false),
        (this.sortOptions = false),
        (this.everyOptions = false),
        (this.reduceOptions = false),
        this.$emit("refresh");
    },
    showReduceOptions() {
      this.hideCode();
      this.reduceOptions = !this.reduceOptions;
      (this.mapOptions = false),
        (this.filterOptions = false),
        (this.sortOptions = false),
        (this.everyOptions = false),
        (this.someOptions = false),
        this.$emit("refresh");
    },
    showJsCode() {
      this.jsCodeVisible = !this.jsCodeVisible;
    },
    hideCode() {
      this.jsCodeVisible = false;
    },
  },
};
</script>
<style scoped>
.active {
  background-color: #74afb3;
  color: rgb(255, 255, 255);
}
.buttons-bar {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
.action-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.method-box {
  display: flex;
  flex-direction: column;
}
.result-box {
  display: flex;
}
.result-box p {
  padding: 0.2rem 3rem;
  box-shadow: 0px 3px 6px #00000017;
  background-color: #fff;
  margin-top: 0;
  z-index: 9997;
}
pre {
  width: 540px;
  padding: 1rem 0.5rem;
  z-index: 4;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  color: #fff;
}

button {
  margin: 0 0.5rem 0.5rem;
  box-shadow: 0px 3px 6px #00000017;
  border-radius: 10px;
  text-align: center;
  border: none;
}
button:hover {
  color: rgb(255, 255, 255);
  background-color: #74afb3;
}
.guide{
  background-color: rgb(167, 7, 7);
  color: #fff;
}
.code-box{
  margin-bottom: 0;
  z-index: 9998;
}

@media (min-width: 768px) {
  pre {
    width: auto;
  }
}

@media (min-width: 1024px) {
  button {
    margin: 1rem;
    padding: 0.5rem 2rem;
  }
}
</style>
