<script>

    export default {
        name: "Header",
        data() {
        return {
            showMenu: false
            }
        },
    };

</script>

<template>

    <div class="fixed z-50 top-0 left-0 w-full h-16 bg-red-200 flex justify-center " >

        <nav  class="bg-gray-200 w-full md:container px-0 md:px-6 py-8  md:flex md:justify-between items-center">
            <div class="flex items-center justify-between relative px-6 md:bottom-0 bottom-4 ">
                <router-link to="/" class=" text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400 " >Logo</router-link>
                <!-- Mobile menu button -->
                <div @click="showMenu = !showMenu" class="flex md:hidden ">
                    <button type="button" class=" text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul :class="showMenu ? 'flex' : 'hidden'" class="bg-yellow-300  p-2 items-center md:w-fit justify-center md:justify-end  md:bg-yellow-700 md:flex md:space-y-0 md:flex-row md:items-center  space-x-2  md:space-x-10 md:mt-0">
                <li class="text-sm font-bold text-yellow-800 hover:text-blue-400">
                    <router-link to="/"><button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 ">Home</button></router-link>
                </li>
                <li class="text-sm font-bold text-yellow-800 hover:text-blue-400">
                    <router-link to="/sobreJsaez"><button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 ">About</button></router-link>
                </li>
                <li class="text-sm font-bold text-yellow-800 hover:text-blue-400">
                    <router-link to="/blog"><button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2.5 ">IT Blog</button></router-link>
                </li>
                <li class="text-sm font-bold text-yellow-800 hover:text-blue-400">
                    <router-link to="/contacto"><button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 ">Contáctame</button></router-link>
                </li>
            </ul>
        </nav>    

    </div>

    <header class="w-full mt-16 h-52 hidden md:block  bg-purple-500">
        <h1>Capsalera</h1>
    </header>

</template>

<style scoped>


</style>