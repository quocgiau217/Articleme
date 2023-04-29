<template>
    <div>
        <div class="article-title">
            <h2>{{heading}}</h2>
            <div class="article-info">
                <div class="author">
                    <div class="img">
                        <img :src="`http://localhost:8000/${user_image}`" />
                    </div>
                    <div class="author-des">
                        <p><a href="#">{{user_name}}</a></p>
                        <span>{{date}}</span>
                    </div>
                </div>
                <div class="social">
                    <span><a class="#"><i class="fa fa-facebook"></i></a></span>
                    <span><a class="#"><i class="fa fa-twitter"></i></a></span>
                    <span><a class="#"><i class="fa fa-instagram"></i></a></span>
                    <span><a class="#"><i class="fa fa-linkedin"></i></a></span>
                </div>
            </div>
            <hr>
        </div>
        <ArticleArea :thumbnail="thumbnail" :content="content"/>
        <hr class="line">
        <AuthorContainer :name="user_name" :image="user_image" :about="user_about" :id="user_id"/>
        <hr class="line">
    </div>
</template>

<script>
import ArticleArea from './ArticleArea.vue';
import AuthorContainer from './AuthorContainer.vue';
export default {
    name: "ViewArticleContainer",
    components: {
        ArticleArea,
        AuthorContainer,
    },
    methods:{
        // async getAuthor(user_id){
        //     const xyz = await axios.get("http://localhost:8000/user/view/"+this.user_id);
        //     this.author = xyz.data;
        // }
    },
    props: {
        heading: String,
        content: String,
        thumbnail: String,
        tags: Array,
        user_id:String,
        date: Date,
        user_name:String,
        user_image:String,
        user_about:String
    },

    data(){
        return{
            author:[],
        }
    },

    // async mounted(){
    //    this.getAuthor();
    // },
}
</script>

<style scoped>
.article-info {
    display: flex;
    justify-content: space-between;
}

.article-title {
    margin-top: 30px;
}

.article-title h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    font-family: 'Samsung Sharp Sans Bold';
    color: #253B7C;
}

.article-info .img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
}

.article-info .img img {
    width: 100%;
    height: 100%;
}

.author {
    display: flex;
}

.author .author-des {
    font-size: 10px;
    font-family: 'Samsung Sharp Sans medium', sans-serif !important;
    font-size: 10px;
    margin-left: 8px;
}

.author .author-des p {
    font-size: 13px;
    margin-bottom: -2px;
    margin-top: 4px;

}

.author .author-des p a {
    color: #000;
    text-decoration: none;
}

span a {
    color: #C4C4C4;
}

i {
    font-size: 20px;
    cursor: pointer;
}

.social {
    width: 100px;
    display: flex;
    justify-content: space-around;
}

.line {
    color: #000;
    border: 1px solid #000;
}
</style>
