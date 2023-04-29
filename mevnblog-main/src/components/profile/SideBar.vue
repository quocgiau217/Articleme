<template>
    <div class="sidebar">
        <div class="card mt-3">
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                 <router-link class="link" to="/view/posts"> View Posts </router-link>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <router-link class="link" to="/view/comments"> View Comments </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar",
}
</script>

<style scoped>
.link{
    text-decoration: none;
    color: #000;
}
</style>
