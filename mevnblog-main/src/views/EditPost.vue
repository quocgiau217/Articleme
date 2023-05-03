<template>
    <div class="write">
        <div class="container">
            <h2>Write Article</h2>

            <div class="mb-3">
                <input type="text" v-model="post.title" class="form-control" id="exampleFormControlInput1"
                    placeholder="Title">
            </div>
            <div class="mb-3">
                <textarea class="form-control" v-model="post.description" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Description"></textarea>
            </div>
            <div class="img">
                <img :src="`http://localhost:8000/${post.thumbnail}`" />
            </div>
            <div class="mb-3">
                <!-- <TextEditor /> -->
                <div class="editor">
                    <quill-editor v-model:content="post.content" @ready="onEditorReady($event)" contentType="html"
                        theme="snow" toolbar="full">

                    </quill-editor>
                </div>
            </div>
            <button class="btn" @click="postArticle()">Post Now</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import TextEditor from '../components/TextEditor.vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
    name: "EditPost",
    data() {
        return {
            post: {},
        }
    },
    components: {
        TextEditor,
        QuillEditor

    },
    methods: {
        async onEditorReady(e) {
            try {
                const url = "http://localhost:8000/post/view/" + this.$route.params.id;
                const article = await axios.get(url);
                const data = article.data;
                console.log(data);
                console.log(e);
                e.container.querySelector('.ql-editor').innerHTML = data.content
            } catch (error) {
                console.log(error);
            }

        },
        async getBook() {
            try {
                const url = "http://localhost:8000/post/view/" + this.$route.params.id;
                const article = await axios.get(url);
                this.post = article.data;
                console.log(this.post);
                // this.book.thumbnail = `http://localhost:3000/${this.book.thumbnail}`;
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async postArticle() {
            // console.log(1);
            let formdata = new FormData();
            formdata.append("id", this.post._id);
            formdata.append("title", this.post.title);
            formdata.append("description", this.post.description);
            formdata.append("content", this.post.content);
            const user_id = localStorage.getItem("user_id");
            console.log(user_id);
            const token = JSON.parse(localStorage.getItem('user'));
            console.log(token);
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };
            // const user = await axios.put("http://localhost:8000/user/update/" + user_id, formdata, { headers: headers });
            const res = await axios.put("http://localhost:8000/post/update/" + user_id,formdata, { headers: headers });
              this.$router.push("/view/posts");
            this.msg = res.data.msg;
            console.log(res.data.msg);
        },

    },
    created() {
        this.getBook();
    },
}
</script>

<style scoped>
.write {
    margin-top: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
}

.container {
  background-color: #fff;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
}

h2 {
  margin-top: 0;
  margin-bottom: 30px;
}

.form-control {
  border-radius: 5px;
}

.img {
  margin-bottom: 20px;
}

img {
  max-width: 100%;
}

.editor {
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.btn {
  background-color: #2ecc71;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

.btn:hover {
  background-color: #27ae60;
}

</style>
