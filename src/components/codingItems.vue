<script>

const definedSubtitles = ["Los cimientos de una web",
"PHP & Laravel, elegancia en el backend",
"JavaScript? Lo mejor!",
"Vue.js, el framework progresivo",
"SQL y las bases de datos",
"Adaptabilidad del contenido"
]

export default {
    name : "CardItem",
    props:{
        titul: {
            type: String, 
            default: "Gatard moniko",
            required: false,
            validator: titulo => titulo.length > 5
        },
        subtitles: {
            type: Number, 
            required: false,
            validator: val => 0 && val < subtitles.length
        },
        image: {
            type: String, 
            required: false
        }

    },
    data() {
        return{
            subtitulosDatos : definedSubtitles[this.subtitles],
            imageName: `${this.image}`
        }
    },
    computed : {},
    methods: {}
};
</script>

<template>
    <div class="card overflow-hidden rounded-lg">       
    <img :src="imageName" alt="gatard">  
        <div class="content ">            
            <h1> {{ titul }}</h1>
            <h2>{{ subtitulosDatos }}</h2>
            <p><slot></slot></p>
        </div>  
    </div>
</template>

<style scoped>
@font-face {
    font-family: 'Montserrat';
    src: url('../../public/fonts/Montserrat-vf.ttf') format("truetype"),
    url('../../public/fonts/Montserrat-It-vf.ttf') format("truetype");
}
.card {   
    margin: 10px;
    max-height: 450px;
    max-width: 350px;
    border: 2px solid black;
    background: linear-gradient(to right, rgba(68, 0, 235, 0.3), rgba(128, 0, 128, 0.3));
    box-shadow: 4px 4px 10px #aaa;
}
.card img {    
border: 2px solid black;
width: 100%;
height: 200px;
box-shadow: 6px 6px 10px rgb(46, 164, 131);
}
.content {
    padding: 20px;
    border-radius: 10px;
}

h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    text-align: center;
    margin-top: 2rem;
    color: violet;
}
h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    text-align: center;
    color: rgb(144, 135, 209);
}

</style>