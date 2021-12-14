<template>
    <div class="wrapper">

    
        <div class="characters">
        <div v-for="character in characters"  :key="character.name" class="character">
            <img class="character-img" :src="`/img/${character.img}`" alt="Sylwetka postaci" />
            <p class="character-name">{{character.name}}</p>
        </div>
        </div>



    </div>
    <img class="ground" src="../assets/Ground.svg" alt="">
</template>
<script>
export default{
    props: ['characters']
}
</script>

<style scoped>

.characters{
    position: absolute;
    display: flex;
    align-items: flex-end;
    width: 100vw;
    z-index: 2;
    bottom: 0;
}
.character-img{
    width: 100%;
}
.character-name{
    text-align: center;
}
.ground{
    bottom: 0;
    position: absolute;
    width: 100vw;
}



</style>