<template>
    <div class="comments">
        <h2>Comments</h2>
        <hr />
        <div class="form">
            <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" v-model="msg"></textarea>
            </div>
            <div class="mb-3 row g-2">
                <div class="col-8">
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="Email: name@example.com">
                </div>
                <div class="col-4">
                    <button class="cmt-btn" @click="postComment()">Post Comment</button>
                </div>
            </div>
            <p class="error">{{error}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "PostComment",
    data() {
        return {
            msg: "",
            error: "",
        }
    },
    props:{
        CommentUpdate:Function,
    },
    inject:["store"],
    methods: {
        async postComment() {
            if (this.msg == "") {
                this.error = "Please write some message";
            }
            else {
                if (this.store.state.islogged == false) {
                    this.error = "Sign in before commenting";
                } else {
                    const post_id = this.$route.params.id;
                    const user_id =  localStorage.getItem("user_id");
                    const token = JSON.parse(localStorage.getItem('user'));
                    const headers = {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    };
                    const addcomment = await axios.post("http://localhost:8000/comment/add/"+user_id,{post_id:post_id, user_id:user_id, comment:this.msg, },{headers:headers});
                    this.error = addcomment.data.msg;
                    this.msg = "";
                    this.CommentUpdate();
                }
            }
        }
    },

};
</script>

<style scoped>
h2 {
    font-size: 24px;
    color: #253b7c;
    font-family: "Samsung Sharp Sans Bold", sans-serif;
}

hr {
    color: #000;
    border: 1px solid #000 !important;
    background: rgba(37, 59, 124, 1);
}

.comments {
    margin-top: 40px;
}

textarea {
    border-color: #000 !important;
}

.cmt-btn {
    width: 100%;
    border-radius: 0px;
    border: none;
    font-size: 14px;
    line-height: 50px;
    color: #000;
    padding: 0px 20px;
    background-color: rgba(255, 216, 78, 1);
}

input {
    height: 50px;
    border-color: #000;
}

.error {
    color: red;
}
</style>
