<template>
    <div class="edit-details">
        <div class="card mb-3 container">
            <div class="row">
                <div class="col-md-6">
                    <div class="upload-btn-wrapper d-flex flex-column align-items-center text-center">
                        <button class="btn1">Upload Image</button><br>
                        <input type="file" ref="file" name="myfile" accept="image/*" @change="PreviewImage" />
                    </div>
                    <div class="d-flex flex-column align-items-center text-center">
                        <button class="btn btn-outline-primary" @click="UpdatePhoto()">Update</button>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img :src="src" alt="Admin" class="rounded-circle">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "UpdatePhoto",
    data() {
        return {
            src: "http://127.0.0.1:5173/src/assets/img/default.jpg",
            file: "",
        }
    },
    props: {
        UpdateThis: Function,
    },
    methods: {
        PreviewImage(event) {
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.src = e.target.result;
                }
                this.image = input.files[0];
                reader.readAsDataURL(input.files[0]);
                this.file = this.$refs.file.files[0];

            }
        },
        async UpdatePhoto() {
            let formdata = new FormData();
            formdata.append("image", this.file);
            const user_id = localStorage.getItem("user_id");
            const token = JSON.parse(localStorage.getItem('user'));
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            };
            const user = await axios.put("http://localhost:8000/user/update/" + user_id, formdata, { headers: headers });
            console.log(user);
            this.src = "http://127.0.0.1:5173/src/assets/img/default.jpg";
            this.file = "";
            this.UpdateThis();

        }
    }

}
</script>

<style scoped>
.row {
    padding-top: 50px;
    padding-bottom: 50px;
}

.rounded-circle {
    width: 150px;
    height: 150px;
}

.upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
}

.btn1 {
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}

button {
    cursor: pointer;
}
</style>
