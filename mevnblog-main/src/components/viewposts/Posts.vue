<template>
    <div class="row">
        <div class="col-md-12">
            <div class="item">
                <div class="blog-container">
                    <div class="small-text">
                        <div class="date">
                            <span class="text-gray">{{ new Date(date).getHours() + ":" + new Date(date).getMinutes() +
                                    ", " + new Date(date).toDateString()
                            }}</span>
                        </div>
                    </div>
                    <div class="blog-desc">
                        <div class="blog-head">
                            <h2>
                                <router-link class="link" :to="`/article/view/${id}`">{{ heading }}</router-link>
                            </h2>
                            <p>{{ description }}</p>
                            <router-link class="read-more link" :to="`/article/view/${id}`">Read More</router-link>
                        </div>
                        <div class="sharing">
                            <router-link class="share" :to="`/post/edit/${id}`"><i class="fa fa-eye"></i>View</router-link>
                            <div class="comments" @click="Edit()"><i class="fa fa-pencil"></i>Edit</div>
                            <div class="views" @click="DeletePost()"><i class="fa fa-trash"></i>Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
export default {
    name: "Posts",
    props: {
        heading: String,
        description: String,
        //   thumbnail:String,
        //   tags:Array,
        id: String,
        date: Date,
        DataUpdate:Function,
    },
    methods: {
        async DeletePost() {
            const user_id = localStorage.getItem("user_id");
            console.log(user_id);
            const token = JSON.parse(localStorage.getItem('user'));
            console.log(token);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };
            const post_id = this.id;
            const data = {
                id: post_id
            }
            console.log(`http://localhost:8000/post/delete/${user_id}`);
            const res = await axios.delete(`http://localhost:8000/post/delete/${user_id}`,{data, headers:headers});
            console.log(res);
            // this.DataUpdate();
        },
        // view(){
        //     this.$router.push('Home') 
        // }
    }
};
</script>
  
<style scoped>
.item {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 22px 5px rgb(0 0 0 / 10%);
    border-radius: 38px;
}

.blog-container {
    padding: 20px;
}

.blog-container .img-container {
    width: 100%;
    height: 410px;
    overflow: hidden;
    border-radius: 38px;
}

.blog-container .img-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.small-text {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 2rem;
}

.small-text .text-gray {
    font-size: 16px;
    line-height: 20px;
    color: #AFAFAF;
}

h2 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
}

h2 .link {
    font-size: 28px;
    line-height: 40px;
    font-family: 'Samsung Sharp Sans Bold';
    color: #253B7C;
    text-decoration: none;
}

p {
    font-family: 'Samsung Sharp Sans Medium', sans-serif !important;
    font-size: 1rem;
}

.read-more {
    color: rgba(255, 216, 78, 1);
    text-decoration: none;
}

.blog-head {
    margin-bottom: 50px;
}

.row {
    margin-top: 20px;
}

.sharing {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    color: #AFAFAF;
}

.share,
.comments,
.views {
    cursor: pointer;
}
</style>
  