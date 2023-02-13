<script>

const definedSubtitles = ["Trucos de maquetación web",
"PHP & Laravel, para el backend",
"JavaScript, el mejor lenguaje",
"Vue.JS, el framework comunitario",
"SQL para atacar a las bases de datos"
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
    <div class="card overflow-hidden">       
    <img :src="imageName" alt="gatard">  
        <div class="content ">            
            <h1> {{ titul }}</h1>
            <h2>{{ subtitulosDatos }}</h2>
            <slot ></slot>
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
    max-height: 600px;
    max-width: 350px;
    border: 1px solid black;
    box-shadow: 4px 4px 10px #aaa;
    
}

.card img {    
    
width: 100%;
height: 250px;
box-shadow: 6px 6px 10px rgb(46, 164, 131);
}

p{
    color: beige;
    display: flex;
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
    margin-top: 1.5rem;
    color: rgb(144, 135, 209);
}

</style>