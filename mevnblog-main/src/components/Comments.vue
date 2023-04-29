<template>
    <div class="comments">
        <div class="user">
            <div class="img">
                <img :src="`http://localhost:8000/${user.image}`">
            </div>
            <div class="info my-auto">
                <p class="mb-0">{{user.name}}</p>
                <span>{{ new Date(date).getHours() + ":" + new Date(date).getMinutes() + ", " + new Date(date).toDateString()}}</span>
            </div>
        </div>
        <div class="comment-container">
            <p>{{msg}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name:"Comments",
        data(){
            return{
                user:[],
            }
        },
        props:{
            user_id:String,
            msg:String,
            date:String,
        },
        async mounted(){
            const users = await axios.get("http://localhost:8000/user/view/"+this.user_id);
            this.user = users.data;
        }
    }
</script>

<style scoped>
    .user{
        display: flex;
    }
    .img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .info{
        margin-left: 20px;
        font-size: 12px;
    }
    .info p{
        font-size: 12px !important;
    }
    .comment-container{
        margin-top: 20px;
    }
    .comment-container p{
        font-size: 14px;
    }
</style>
