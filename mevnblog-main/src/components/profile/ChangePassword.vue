<template>
    <div class="edit-details">
        <div class="card mb-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Old Password</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="password" v-model="oldPassword" id="name">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">New Password</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="password" v-model="newPassword" id="name">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-12">
                        <button class="btn btn-info" @click="UpdatePassword()">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ChangePassword",
    data() {
        return {
            oldPassword: "",
            newPassword: "",
        }
    },
    methods: {
        async UpdatePassword() {
            try {
                const user_id = localStorage.getItem("user_id");
                const token = JSON.parse(localStorage.getItem('user'));
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                };
                const user = await axios.put("http://localhost:8000/user/update/password/" + user_id, { oldpassword:this.oldPassword, newpassword:this.newPassword }, { headers: headers });
                this.oldPassword="";
                this.newPassword="";
            } catch (error) {
                console.log(error);
            }
        }
    }

}
</script>

<style scoped>

</style>
