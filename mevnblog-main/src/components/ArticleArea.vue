<template>
    <div>
        <div class="img-fluid">
            <img :src="`http://localhost:8000/${thumbnail}`">
        </div>
        <div v-html="content"></div>

    </div>
</template>

<script>
    export default {
        name:"ArticleArea",
        props:{
            thumbnail:String,
            content:String
        }
    }
</script>

<style scoped>
h2{
    font-size: 1.5rem;
}
.img-fluid{
    margin-bottom: 25px;
}
.img-fluid img{
    width: 100%;
    height: 100%;
}

</style>
