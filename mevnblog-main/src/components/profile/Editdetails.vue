<template>
    <div class="edit-details">
        <div class="card mb-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" id="name" v-model="name">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">About</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <textarea id="about" cols="30" rows="5" v-model="about"></textarea>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-12">
                        <button class="btn btn-info" @click="UpdateUser()">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Editdetails",
    data() {
        return {
            name: this.name,
            about: this.about,
        }
    },
    props: {
        name: String,
        about: String,
        UpdateNow: Function,
    },
    methods: {
        async UpdateUser() {
            const user_id = localStorage.getItem("user_id");
            const token = JSON.parse(localStorage.getItem('user'));
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };
            const user = await axios.put("http://localhost:8000/user/update/" + user_id, { name: this.name, about: this.about }, { headers: headers });
            console.log(user)
            this.UpdateNow();
        }
    }
}
</script>

<style scoped>

</style>
