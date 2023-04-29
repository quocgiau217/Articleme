<template>
    <div>
       <div class="blog">
       <h2 class="text-center">Blogs</h2>
        <TagsContainer/>
        <div v-for="items in posts">
            <ArticleContainer :heading="items.title" :description="items.description" :thumbnail="items.thumbnail" :tags="items.tags[0]" :id="items._id" :date="items.created_at"/>
        </div>
       
       </div>
    </div>
</template>

<script>
import TagsContainer from "./TagsContainer.vue";
import ArticleContainer from "../components/ArticleContainer.vue";
import axios from "axios";

    export default {
        name:"Blog",
        components:{
            TagsContainer,
            ArticleContainer,
        },
        data(){
            return{
                posts : null,
            }
        },
        async  mounted(){
            try {
                const article = await axios.get("http://localhost:8000/post/view/");
                this.posts = article.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>

<style scoped>
.blog{
    margin-top:40px;
    padding-bottom: 110px;
}
h2{
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    font-family: 'Samsung Sharp Sans Bold';
    color: #253B7C;
}
ArticleContainer{
    margin-top: 20px;
}
</style>
