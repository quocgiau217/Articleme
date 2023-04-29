<template>
    <div class="register">
        <div class="register-container">
            <div class="container">
                <h2>Register Now</h2>
                <p class="msg">{{msg}}</p>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="name">
                    <p class="error">{{nameError}}</p>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email">
                    <p class="error">{{emailError}}</p>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                    <p class="error">{{passwordError}}</p>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">About</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="about"></textarea>
                    <p class="error">{{aboutError}}</p>
                </div>
                <!-- <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Profile</label>
                    <input type="file" class="form-control" id="profile">
                </div> -->
                <div class="mb-3">
                    <button class="btn" @click="submitForm()">Register Now</button>
                </div>
                <div class="mb-3">
                    <router-link to="/signin">Signin here</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Register",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            about: "",
            passwordError: "",
            nameError: "",
            emailError: "",
            aboutError: "",
            msg: "",
        }
    },
    methods: {
        async submitForm() {
            this.passwordError = this.password.length > 6 ? "" : "Password should be grater than 6 characters";
            this.nameError = this.name != "" ? "" : "Name cannot be empty";
            this.emailError = this.email != "" ? "" : "Email cannot be empty";
            this.aboutError = this.about != "" ? "" : "About cannot be empty";
            if (!this.passwordError && !this.emailError && !this.nameError && !this.aboutError) {
                const userdata = {
                    name:this.name,
                    email: this.email,
                    password:this.password,
                    about:this.about
                }
                const register = await axios.post("http://localhost:8000/user/register", userdata);
                this.msg = register.data.msg;
                this.name = "";
                this.email = "";
                this.about = "";
                this.password = "";
            }
        },

    }
}
</script>

<style scoped>
.register-container {
    width: 50%;
    margin: auto;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 22px 5px rgb(0 0 0 / 10%);
    border-radius: 38px;
    height: auto;
    padding-bottom: 40px;
    padding-top: 40px;
    margin-top: 40px;
}

.register-container h2 {
    font-size: 28px;
    line-height: 40px;
    font-family: 'Samsung Sharp Sans Bold';
    color: #253B7C;
    text-decoration: none;
}

.btn {
    background: linear-gradient(180deg, #324FA4 7.27%, #253B7C 88.9%);
    color: #fff;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 14px;
    width: 167px;
    font-weight: 600;
}

.error {
    color: red;
}

.msg {
    color: #253B7C;
}

@media(max-width:600px) {
    .signin-container {
        width: 80%;
    }
}
</style>
