<template>
    <div class="recent-post">
        <h2>Recent Post</h2>
        <hr class="line">
        <div v-for="item in post">
            <RecentArticle :thumbnail="item.thumbnail" :heading="item.title" :id="item._id"/>
        </div>
    </div>
</template>

<script>
    import RecentArticle from './RecentArticle.vue';
    import axios from 'axios';
    export default {
        name:"RecentPost",
        components:{
            RecentArticle,
        },
        data(){
            return{
                post:[],
            }
        },
        async mounted(){
            const recent = await axios.get("http://localhost:8000/post/recent");
            this.post = recent.data;
        }
    }
</script>

<style scoped>
h2{
    font-size: 24px;
    color: #253B7C;
    line-height: 40px;
    font-weight: 700;
}
</style>
