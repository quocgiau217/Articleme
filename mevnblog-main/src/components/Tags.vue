<template>
<button class="btn tags-btn btn-lg">{{name}}</button>
</template>

<script>
    export default {
        name:"Tags",
        props:{
            name:String,
        }
    }
</script>

<style scoped>
.tags-btn{
    border: 1.5px solid #2f3956;
    border-radius:14px;
    line-height:50px;
    font-size:13px;
    padding:0px 20px;
    border-radius:20px;
    line-height:50px;
    margin:5px;
    margin-bottom:15px;
}
</style>
