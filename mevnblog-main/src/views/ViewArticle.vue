<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <ViewArticleContainer :heading="post?.title" :thumbnail="post.thumbnail" :content="post.content" :tags="post.tags" :date = "post.created_at" :user_id="post.user_id" :user_name="author.name" :user_image="author.image" :user_about="author.about"/>
                    <PostComment  :id="article_id" :CommentUpdate="CommentTrigger"/>
                    <div v-for="item in comments">
                        <Comments :user_id="item.user_id" :msg="item.comment" :date="item.createdAt" :id="user_id" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="tags">
                        <h2>Tags</h2>
                        <hr class="line" />
                        <span v-for="i in tags">
                            <Tags :name="i" />
                        </span>
                    </div>
                    <RecentPost/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ViewArticleContainer from "../components/ViewArticleContainer.vue";
import PostComment from "../components/PostComment.vue";
import Comments from "../components/Comments.vue";
import Tags from "../components/Tags.vue";
import RecentPost from "../components/RecentPost.vue";
import axios from "axios";
export default {
    name: "ViewArticle",
    components: {
        ViewArticleContainer,
        PostComment,
        Comments,
        Tags,
        RecentPost,
    },
    data() {
        return {
            comments: [],
            tags: [
                'c++', 'JAVA', 'Web Developemt'
            ],
            post:[],
            author:[],
            article_id:"",
            commentwatcher: 0,
        };
    },
    methods:{
        CommentTrigger(){
            this.commentwatcher++;
        }
    },
    async created(){
        this.article_id = this.$route.params.id;
            try {
                const url= "http://localhost:8000/post/view/"+this.$route.params.id;
                const article = await axios.get(url);
                this.post = article.data;
                const xyz = await axios.get("http://localhost:8000/user/view/" + this.post.user_id);
                this.author = xyz.data;
                const commentData = await axios.get("http://localhost:8000/comment/view/"+this.$route.params.id); 
                this.comments = commentData.data;               
            } catch (error) {
                console.log(error);
            }
    },
    watch:{
        async commentwatcher(){
            const commentData = await axios.get("http://localhost:8000/comment/view/"+this.$route.params.id); 
            this.comments = commentData.data;      
        }
    }
};
</script>

<style scoped>
.tags {
    margin-top: 75px;
}

h2 {
    font-size: 24px;
    color: #253B7C;
    line-height: 40px;
    font-weight: 700;
}
</style>
