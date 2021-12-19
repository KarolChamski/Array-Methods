<template>
  <div class="wrapper">
    <div class="characters">
      <div
        v-for="character in characters"
        :key="character.name"
        class="character"
      >
        <div class="cloud">
          <p>Name:{{ character.name }}</p>
          <p>Gifts given: {{ character.gifts }}</p>
        </div>

        <img
          class="character-img"
          :src="`/img/${character.img}`"
          alt="Sylwetka postaci"
        />
        <p class="character-name">{{ character.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["characters"],
};
</script>

<style scoped>
.cloud {
  display: none;
  text-align: center;
  opacity: 0;
  background-color: #fff;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  transition: opacity 0.5s;
}
.characters {
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
}
.character-img {
  width: 50%;
  justify-self: center;
}
.character {
    display: flex;
    flex-direction: column;
    align-items: center;
  overflow: hidden;
  align-self: flex-end;

}

.character-name {
      width: 100%;
      font-family: 'relation-two', sans-serif;
    text-align: center;
}
@media (min-width: 1024px) {
  .cloud {
    display: block;
  }
  .character:hover > .cloud {
    opacity: 1;
  }

  .character-img {
    width: 100%;
  }
  .character-name {
    font-size: 26px;
  }

}
</style>
