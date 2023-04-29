<template>
   <div class="write">
        <div class="container">
            <h2>Viết bài</h2>
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
            <button class="btn" @click="postArticle()">Đăng ngay</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"EditPost",
    }
</script>

<style scoped>

</style>
