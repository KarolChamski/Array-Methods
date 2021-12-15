<template>
<div class="wrapper">
    <div class="buttons-bar">

        <button @click="showMapOptions">Map</button>
        <button @click="showFilterOptions">Filter</button>
        <button @click="showSortOptions">Sort</button>
        <button>Every</button>
        <button>Some</button>
        <button>Reduce</button>
    </div>
    <div class="action-box">
        <div class="choose-box">
            <button v-if="mapOptions" @click="$emit('map')">Names of Characters</button>
            <button @click="$emit('filter', 'female')" v-if="filterOptions">Girls</button>
            <button @click="$emit('filter', 'male')" v-if="filterOptions">Boys</button>
            <button v-if="sortOptions" @click="$emit('sort', 'height')">By Height</button>
            <button v-if="sortOptions" @click="$emit('sort', 'name')">By Names</button>
            <button v-if="sortOptions" @click="$emit('sort', 'gifts')">By gifts given</button>

            
        </div>
        <div class="result-box">
            <p>{{result}}</p>
        </div>
    </div>
</div>
</template>
<script>
export default{
    props: ['result'],
    data(){
        return{
            mapOptions: false,
            filterOptions: false,
            sortOptions: false
        }
    },
    methods:{
        showMapOptions(){
            this.mapOptions = !this.mapOptions
        },
        showFilterOptions(){
            this.filterOptions = !this.filterOptions
        },
        showSortOptions(){
            this.sortOptions = !this.sortOptions
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
</style>