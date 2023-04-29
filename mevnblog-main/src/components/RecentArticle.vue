<template>
    <div class="article">
        <div class="img">
            <img :src="`http://localhost:8000/${thumbnail}`">
        </div>
        <div class="info my-auto">
            <a :href="`/article/view/${id}`"><h5>{{heading}}</h5></a>
        </div>
    </div>
</template>

<script>
    export default {
        name:"RecentArticle",
        props:{
            thumbnail:String,
            heading:String,
            id:String
        }
    }
</script>

<style scoped>
.article{
    display: flex;
    height: auto;
    width: 100%;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
    border-radius: 20px;
    padding: 10px;
    margin-top: 20px;

}
.article .img{
    width: 200px;
    height: 120px;
    border-radius: 20px;
    overflow: hidden;
}
.article .img img{
    width: 100%;
    height: 100%;
}
a{
    text-decoration: none;
    line-height: 19px;
    font-family: 'Samsung Sharp Sans Bold';
    color: #253B7C;
}
h5{
    font-size: 14px;
    padding: 0px 10px;
}
</style>
