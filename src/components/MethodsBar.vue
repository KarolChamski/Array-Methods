<template>
<div class="wrapper">
    <div class="buttons-bar">
        <button @click="$emit('map')">Map</button>
        <button>Filter</button>
        <button>Sort</button>
        <button>Every</button>
        <button>Some</button>
        <button>Reduce</button>
    </div>
    <div class="action-box">
        <div class="result-box">
            <p>{{result}}</p>
        </div>
        <div class="choose-box">
            
        </div>
    </div>
</div>
</template>
<script>
export default{
    props: ['result']
}
</script>
<style scoped>
    .buttons-bar{
        display: flex;
        justify-content: space-around;
    }
    .action-box{
        display: flex;
        justify-content: center;
    }
</style>