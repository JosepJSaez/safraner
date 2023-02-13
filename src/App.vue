<script>
import CardItem from "./components/codingItems.vue";
export default {
    name: "App", 
    components: {
        CardItem
    }
}
</script>

<template>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="container">
      <CardItem titul="HTML5+CSS3" :subtitles="0"> Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Perspiciatis placeat et, similique 
            exercitationem nulla odit officiis. Porro nostrum ratione
            quibusdam nisi incidunt vitae, quo dignissimos esse officiis 
            explicabo! Quae, veniam. </CardItem>
      <CardItem titul="PHP" :subtitles="1"/>
      <CardItem titul="JavaScript" :subtitles="2" />
      <CardItem titul="Vue.JS" :subtitles="3" />
      <CardItem titul="SQL" :subtitles="4" />
    </div>
</template>

<style>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 10px;
}

</style>
