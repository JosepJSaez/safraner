<script>

import cabecera from '../components/header.vue'
import seccion from '../components/section.vue'
import pie from '../components/footer.vue'

export default {
    name: "index", 
    components: {
        cabecera,
        seccion,
        pie
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

    <div class="contenedor" >
        <cabecera />
        <seccion />
        <pie />
    </div> 

</template>

<style>

@font-face {
    font-family: 'Montserrat';
    src: url('../public/fonts/Montserrat-vf.ttf') format("truetype"),
    url('../public/fonts/Montserrat-It-vf.ttf') format("truetype");
}

.contenedor {
  width: 100%;
  position: relative;
  background-color: blanchedalmond;
}

</style>