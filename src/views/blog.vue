<script>

import CardItem from '../components/codingItems.vue'

export default {
  name: "Blog",
  components: {
    CardItem,
  }
}
</script>

<template>
    <div id="contenedorItemsProgramacion" class="flex flex-wrap place-content-center px-24" >
        <CardItem image="images/htmlcss.jpg" titul="HTML5+CSS3" :subtitles="0"></CardItem>
        <CardItem image="images/php.jpg" titul="PHP" :subtitles="1"/>
        <CardItem image="images/javascript.jpg" titul="JavaScript" :subtitles="2" />
        <CardItem image="images/vue.jpg" titul="Vue.JS" :subtitles="3" />
        <CardItem image="images/mysql.jpg" titul="MySQL" :subtitles="4" />
        <CardItem image="images/responsive.jpg" titul="Responsive Design" :subtitles="5" />
    </div>
</template>

<style scoped>

</style>