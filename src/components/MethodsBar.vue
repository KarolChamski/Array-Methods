<template>
<div class="wrapper">



    <div class="buttons-bar">
        <button @click="showMapOptions">Map</button>
        <button @click="showFilterOptions">Filter</button>
        <button @click="showSortOptions">Sort</button>
        <button @click="showEveryOptions">Every</button>
        <button @click="showSomeOptions">Some</button>
        <button @click="showReduceOptions">Reduce</button>
        <button @click="$emit('showModal')" >GUIDE</button>
    </div>

    <div class="action-box">
        <div class="choose-box">

            <button v-if="mapOptions" @click="$emit('map')">Names of Characters</button>

            <button @click="$emit('filter', 'female')" v-if="filterOptions">Girls</button>
            <button @click="$emit('filter', 'male')" v-if="filterOptions">Boys</button>

            <button v-if="sortOptions" @click="$emit('sort', 'height')">By Height</button>
            <button v-if="sortOptions" @click="$emit('sort', 'name')">By Names</button>
            <button v-if="sortOptions" @click="$emit('sort', 'gifts')">By gifts given</button>

            <button v-if="everyOptions" @click="$emit('every')">Does every character wear green clothes?</button>

            <button v-if="someOptions" @click="$emit('some')">Is there any Santa?</button>

            <button @click="$emit('reduce')" v-if="reduceOptions">Total gifts given</button>
  
        </div>


        <div class="result-box" v-if="result !== '' ">
            <p>{{result}}</p>
        </div>

        <div class="code-box" v-if="codeButtons">
            <button  @click="showJsCode">Show JS code</button>
            <button  @click="showVueCode">Show Vue code</button>
            <div>
            <pre v-if="jsCodeVisible"> {{ jsCode }} </pre>
            <pre v-if="vueCodeVisible"> {{ vueCode }} </pre>
            </div>
        </div>


    </div>

    
</div>
</template>
<script>
export default{
    props: ['result', 'jsCode', 'vueCode', 'codeButtons'],
    emits: ['refresh'],
    data(){
        return{
            mapOptions: false,
            filterOptions: false,
            sortOptions: false,
            everyOptions: false,
            someOptions: false,
            reduceOptions: false,
            jsCodeVisible: false,
            vueCodeVisible: false
        }
    },
    methods:{
        showMapOptions(){
            this.mapOptions = !this.mapOptions;
            this.filterOptions = false,
            this.sortOptions = false,
            this.everyOptions = false,
            this.someOptions = false,
            this.reduceOptions = false,
            this.$emit('refresh')
        },
        showFilterOptions(){
            this.filterOptions = !this.filterOptions;
            this.mapOptions =  false,
            this.sortOptions = false,
            this.everyOptions = false,
            this.someOptions = false,
            this.reduceOptions = false,
            this.$emit('refresh')
        },
        showSortOptions(){
            this.sortOptions = !this.sortOptions;
             this.mapOptions =  false,
            this.filterOptions = false,
            this.everyOptions = false,
            this.someOptions = false,
            this.reduceOptions = false,
            this.$emit('refresh')
        },
        showEveryOptions(){
            this.everyOptions = !this.everyOptions;
            this.mapOptions =  false,
            this.filterOptions = false,
            this.sortOptions = false,
            this.someOptions = false,
            this.reduceOptions = false,
            this.$emit('refresh')
        },
        showSomeOptions(){
            this.someOptions = !this.someOptions;
            this.mapOptions =  false,
            this.filterOptions = false,
            this.sortOptions = false,
            this.everyOptions = false,
            this.reduceOptions = false,
            this.$emit('refresh')
        },
        showReduceOptions(){
            this.reduceOptions = !this.reduceOptions
            this.mapOptions =  false,
            this.filterOptions = false,
            this.sortOptions = false,
            this.everyOptions = false,
            this.someOptions = false,
            this.$emit('refresh')
        },
        showJsCode(){
            this.jsCodeVisible = true
            this.vueCodeVisible = false;
        },
        showVueCode(){
            this.vueCodeVisible = true
            this.jsCodeVisible = false;
        }

    }
}
</script>
<style scoped>

    .buttons-bar{
        display: flex;
        justify-content: space-around;
    }

    .action-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .method-box{
        display: flex;
        flex-direction: column;
    }
    .result-box p{
        background-color: #fff;
        padding: 1rem 3rem;
        box-shadow: 0px 3px 6px #00000017;
        border-radius: 10px;
    }
    .code-box{
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
    }
    pre{
        background-color: rgb(0, 0, 0);
        color: white;
    }

button{
font-size: 22px;
box-shadow: 0px 3px 6px #00000017;
border-radius: 10px;
border: none;
margin: 0 0.5rem 0.5rem;
text-align: center;
    }

    @media (min-width: 1024px){
        button {
            padding: 0.5rem 2rem;
            margin: 1rem;
        }
    }
</style>