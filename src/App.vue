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
    <div class="container">
      <CardItem image="images/htmlcss.jpg" titul="HTML5+CSS3" :subtitles="0"></CardItem>
      <CardItem image="images/php.jpg" titul="PHP" :subtitles="1"/>
      <CardItem image="images/javascript.jpg" titul="JavaScript" :subtitles="2" />
      <CardItem image="images/vue.jpg" titul="Vue.JS" :subtitles="3" />
      <CardItem image="images/mysql.jpg" titul="MySQL" :subtitles="4" />
      <CardItem image="images/responsive.jpg" titul="Responsive Design" :subtitles="5" />
    </div>
</template>

<style scoped>

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
