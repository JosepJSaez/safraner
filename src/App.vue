<script>
import CardItem from "./components/codingItems.vue";
export default {
    name: "App", 
    components: {
        CardItem
    },
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
    }
}
</script>

<template>

  <div class="fixed top-0 left-0 w-full h-16 bg-red-200 flex justify-center " >
    <nav  class=" bg-gray-200  container  px-6  py-8  mx-auto  md:flex md:justify-between md:items-center">
      
        <div class="flex items-center justify-between">
          <router-link to="/" class=" text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400 " >Logo</router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class=" text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'" class="bg-yellow-300 flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
          <li class="text-sm font-bold text-yellow-800 hover:text-blue-400">
            Home
          </li>
          <li class="text-sm font-bold text-yellow-800 hover:text-blue-400">
            About
          </li>
          <li class="text-sm font-bold text-yellow-800 hover:text-blue-400">
            Blogs
          </li>
          <li class="text-sm font-bold text-yellow-800 hover:text-blue-400">
            Contact Us
          </li>
        </ul>
    </nav>
  </div>
  <header>


  </header>
  
  <section>

    

  </section>
  <footer></footer>

    <!-- <div class="grupo">
      <CardItem image="images/htmlcss.jpg" titul="HTML5+CSS3" :subtitles="0"></CardItem>
      <CardItem image="images/php.jpg" titul="PHP" :subtitles="1"/>
      <CardItem image="images/javascript.jpg" titul="JavaScript" :subtitles="2" />
      <CardItem image="images/vue.jpg" titul="Vue.JS" :subtitles="3" />
      <CardItem image="images/mysql.jpg" titul="MySQL" :subtitles="4" />
      <CardItem image="images/responsive.jpg" titul="Responsive Design" :subtitles="5" />
    </div> -->
</template>

<style scoped>

@font-face {
    font-family: 'Montserrat';
    src: url('../public/fonts/Montserrat-vf.ttf') format("truetype"),
    url('../public/fonts/Montserrat-It-vf.ttf') format("truetype");
}

.grupo {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 10px;
}


</style>
