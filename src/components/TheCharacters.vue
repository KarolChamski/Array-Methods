<template>
    <div class="wrapper">

    
        <div class="characters">
        <div v-for="character in characters"  :key="character.name" class="character">
            
            <div class="cloud">
            <p>Name:{{character.name}}</p>
            <p>Gifts given: {{character.gifts}}</p>
            </div>
            
           
            <img class="character-img" :src="`/img/${character.img}`" alt="Sylwetka postaci" />
            <p class="character-name">{{character.name}}</p>
        </div>
        </div>

    </div>
    
</template>
<script>
export default{
    props: ['characters']
}
</script>

<style scoped>
    .cloud{
    text-align: center;
    opacity: 0;
    background-color: #fff;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    }
.characters{
    display: flex;
    align-items: flex-end;
}
.character-img{
    width: 100%;
}
.character:hover > .cloud {
         opacity: 1;
}

.character-name{
    text-align: center;
}

</style>