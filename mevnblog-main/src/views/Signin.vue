<template>
    <div class="signin">
        <div class="signin-container">
            <div class="container">
                <h2>Sign In</h2>
                <p class="error">{{error}}</p>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" v-model="password">
                </div>
                <div class="mb-3">
                    <button class="btn" @click="login()">Signin</button>
                </div>
                <div class="mb-3">
                    <router-link to="/register">Register here</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Signin",
    data() {
        return {
            email: "",
            password: "",
            error:"",
        }
    },
    inject:["store"],
    methods:{
        async login(){
            const email = this.email;
            const password = this.password;
            try {
                const user = await axios.post("http://localhost:8000/user/login", {email:email,password:password});
                localStorage.setItem("user",JSON.stringify(user.data.access_token));
                localStorage.setItem("user_id",user.data.id);
                this.store.state.islogged = true;
                this.$router.push("/");
            } catch (error) {
                this.error = "User Unauthorized";
                this.email="";
                this.password="";
            }
        }
    },

}

</script>

<style scoped>
.signin-container {
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

.error{
    color: red;
}

.signin-container h2 {
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

@media(max-width:600px) {
    .signin-container {
        width: 80%;
    }
}
</style>
