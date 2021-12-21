<template>
  <div class="wrapper">
    <div class="characters">
      <div
        v-for="character in characters"
        :key="character.name"
        class="character"
      >
        <div class="cloud">
          <p class="cloud-name">{{ character.name }}</p>
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
  opacity: 0;
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  transition: opacity 0.3s;
  background-color: #fff;
}
.cloud-name {
  font-size: 24px;
  font-family: "relation-two", sans-serif;
}

.characters {
  position: absolute;
  display: flex;
  align-items: flex-end;
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
  align-self: flex-end;
  overflow: hidden;
}
.character-name {
  width: 100%;
  text-align: center;
  font-family: "relation-two", sans-serif;
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
