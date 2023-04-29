<template>
    <div class="container">
        <div class="row mt-2">
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
                                    <a class="btn btn-outline-primary" @click="logout()">Đăng xuất</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SideBar />
            </div>
            <div class="col-md-8">
                <h4>Posts</h4>
                <div v-for="item in post">
                    <Posts :date="item.createdAt" :UpdateData="DataUpdate" :heading="item.title"
                        :description="item.description" :id="item._id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Posts from "../../src/components/viewposts/Posts.vue";
import SideBar from "../components/profile/SideBar.vue";

export default {
    name: "ViewPosts",
    components: {
        Posts,
        SideBar,
    },
    data() {
        return {
            user: [],
            post: [],
            updateval: 0,
        }
    },
    async created() {
        const user_id = localStorage.getItem("user_id");
        const user = await axios.get("http://localhost:8000/user/view/" + user_id);
        this.user = user.data;
        const token = JSON.parse(localStorage.getItem('user'));
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        const posts = await axios.get("http://localhost:8000/post/view/user/" + user_id, { headers: headers });
        this.post = posts.data;
    },
    methods: {
        logout() {
            localStorage.clear();
            this.store.state.islogged = false;
            this.$router.push("/");
        },
        UpdateData() {
            this.updateval++;
        }
    },
    watch: {
        async updateval(val) {
            const user_id = localStorage.getItem("user_id");
            const posts = await axios.get("http://localhost:8000/post/view/user/" + user_id, { headers: headers });
            this.post = posts.data;
        }
    }
}
</script>

<style scoped>
h4 {
    font-weight: 700;
}
</style>
