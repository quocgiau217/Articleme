<template>
    <div class="write">
        <div class="container">
            <h2>Write Article</h2>
            <p>{{this.msg}}</p>
            <div class="mb-3">
                <input type="text" v-model="title" class="form-control" id="exampleFormControlInput1" placeholder="Title">
            </div>
            <div class="mb-3">
                <textarea class="form-control" v-model="description" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Description"></textarea>
            </div>
            <div class="mb-3">
                <input @change="handlFileUpload()" ref="file" type="file" class="form-control" id="exampleFormControlInput1" placeholder="Thumbnail">
            </div>
            <div class="mb-3">
                <input type="text" v-model="tags" name="product_tags" class="form-control" required="">
            </div>
            <div class="mb-3">
                <!-- <TextEditor /> -->
                <div class="editor">
                    <quill-editor  v-model:content="content" contentType="html" theme="snow" toolbar="full">

                    </quill-editor>
                </div>
            </div>
            <button class="btn" @click="postArticle()">Post Now</button>
        </div>
    </div>
</template>

<script>
import TextEditor from '../components/TextEditor.vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from 'axios';


export default {
    name: "Write",
    components: {
        TextEditor,
        QuillEditor

    },
    data() {
        return {
            content:"",
            title:"",
            description:"",
            tags:"",
            thumbnail:'',
            msg:'',
        }
    },

    methods: {
        handlFileUpload(){
            this.thumbnail = this.$refs.file.files[0];
        },
        async postArticle() {
          const user_id = localStorage.getItem("user_id");
          let formdata = new FormData();
          formdata.append("title",this.title);
          formdata.append("description",this.description);
          formdata.append("thumbnail",this.thumbnail);
          formdata.append("tags",this.tags);
          formdata.append("content",this.content);
          const token = JSON.parse(localStorage.getItem('user'));
          const headers = {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    };
          const res = await axios.post("http://localhost:8000/post/add/"+user_id, formdata, {headers:headers});
          this.$router.push("/blog");
          this.msg=res.data.msg;
        }
    }
}
</script>

<style scoped>
.editor {
    height: 400px;
    display: inline-block;
}

.btn {
    background: linear-gradient(180deg, #324FA4 7.27%, #253B7C 88.9%);
    color: #fff;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 14px;
    width: 167px;
    font-weight: 600;
    margin-bottom: 50px;
}

h2 {
    font-size: 32px;
    color: #253B7C;
    line-height: 40px;
    font-weight: 700;
    margin-top: 30px;
    text-align: center;
}
</style>
