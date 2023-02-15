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
  <header class="fixed top-0 left-0 w-full h-16 bg-red-200 flex justify-end " >
    <nav class="relative inline-block bg-blue-200 h-8 top-4 ">
      <ul class="flex flex-row " >
        <li><a href="#">Timeline</a></li>
        <li><a href="#">Experiencia</a></li>
        <li><a href="#">Sobre mí</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav>
  </header>
  
  <section></section>
  <footer></footer>

    <!-- <div class="container">
      <CardItem image="images/htmlcss.jpg" titul="HTML5+CSS3" :subtitles="0"></CardItem>
      <CardItem image="images/php.jpg" titul="PHP" :subtitles="1"/>
      <CardItem image="images/javascript.jpg" titul="JavaScript" :subtitles="2" />
      <CardItem image="images/vue.jpg" titul="Vue.JS" :subtitles="3" />
      <CardItem image="images/mysql.jpg" titul="MySQL" :subtitles="4" />
      <CardItem image="images/responsive.jpg" titul="Responsive Design" :subtitles="5" />
    </div> -->
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 10px;
}

li{
  padding-right: 7px;
  
}

</style>
