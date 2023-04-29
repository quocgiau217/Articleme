<template>
    <div>
        <div class="author-container">
            <div class="img-container">
                <div class="img">
                    <img :src="`http://localhost:8000/${image}`">
                </div>
            </div>
            
            <div class="desc">
                <h4>{{name}}</h4>
                <p>{{about}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"AuthorContainer",
        props:{
            id:String,
            name:String,
            about:String,
            image:String,
        }
    }
</script>

<style scoped>
    .author-container{
        display: flex;
    }
    .img-container{
        flex: 0 1 25%;
    }
.img{
    width:120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
}
.img img{
    width: 100%;
    height: 100%;

}
.desc{
    flex: 0 1 75%;

}
h4{
    font-size: 14px;
    font-weight: 700;
}
p{
    font-size: 14px;
    padding-right: 35%;
}
@media(max-width:560px){
    .desc{
        flex: 0 1 70%;
    }
    .img-container{
        flex: 0 1 30%;
    }
    .desc p{
        padding-right: 20%;
    }
}
@media(max-width:430px){
    .desc{
        flex: 0 1 50%;
    }
    .img-container{
        flex: 0 1 50%;
    }
    .desc p{
        padding-right: 0;
    }
}
</style>
