<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="user">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img :src="`http://localhost:8000/${user.image}`" alt="Admin" class="rounded-circle"
                                    width="150">
                                <div class="mt-3">
                                    <h4>{{ user.name }}</h4>
                                    <p class="text-secondary mb-1">{{ user.email }}</p>
                                    <p class="text-muted font-size-sm">{{ user.about }}</p>
                                    <a class="btn btn-outline-primary" @click="logout()">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SideBar />
            </div>
            <div class="col-md-8">
                <Editdetails :name="user.name" :about="user.about" :UpdateNow="UpdateData" />
                <UpdatePhoto :UpdateThis="UpdateData2" />
                <ChangePassword />
            </div>
        </div>
    </div>
</template>

<script>
import User from "../components/profile/User.vue";
import Editdetails from "../components/profile/Editdetails.vue";
import ChangePassword from "../components/profile/ChangePassword.vue";
import SideBar from "../components/profile/SideBar.vue";
import UpdatePhoto from "../components/profile/UpdatePhoto.vue";
import axios from "axios";
export default {
    name: "Profile",
    components: {
        User,
        Editdetails,
        ChangePassword,
        SideBar,
        UpdatePhoto,
    },
    inject:["store"],
    data() {
        return {
            user: [],
            updateval: 0,
        }
    },
    async created() {
        const user_id = localStorage.getItem("user_id");
        const user = await axios.get("http://localhost:8000/user/view/" + user_id);
        this.user = user.data;
    },
    methods: {
        UpdateData() {
            this.updateval++;
        },
        UpdateData2() {
            this.updateval++;
        },
        logout() {
            localStorage.clear();
            this.store.state.islogged = false;
            this.$router.push("/");
        }
    },
    watch: {
        async updateval(val) {
            const user_id = localStorage.getItem("user_id");
            const user = await axios.get("http://localhost:8000/user/view/" + user_id);
            this.user = user.data;
        },
    },
}
</script>

<style scoped>
.container {
    margin-top: 30px;
}

.card {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, .125);
    border-radius: .25rem;
}
</style>
