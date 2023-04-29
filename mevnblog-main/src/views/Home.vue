<template>
    <div>
    <div class="container">
    <Banner/>
    <CategoryCard/>
    <Blog/>
    <Footer/>
    </div>
    </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import CategoryCard from "../components/CategoryCard.vue";
import Blog from "../components/Blog.vue";
import Footer from "../components/Footer.vue";

export default {
    name:"Home",
    components:{
        Banner,
        CategoryCard,
        Blog,
        Footer,

    },
    inject:["store"],
    mounted(){
        console.log(this.store.state.islogged);
    }
}
</script>

<style lang="scss" scoped>

</style>
