<template>
    <div>
        <h2>{{title}}</h2>
        <ul>
            <li v-for="item in hyperlinks">
                <a href="{{item.link}}">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"FooterLinks",
        props:{
            title:Object,
            hyperlinks:Array,
        }
    }
</script>

<style scoped>
h2{
    font-size: 1.75rem !important;
    color: #fff;
    margin-bottom: 20px;
}
ul{
    list-style: none;
}

ul li a{
    text-decoration: none;
    color: #fff;
    font-family: 'Samsung Sharp Sans Regular', sans-serif;
}
</style>
