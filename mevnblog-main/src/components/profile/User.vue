<template>
    <div class="user">
        <div class="card">
            <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                    <img :src="`http://localhost:8000/${image}`" alt="Admin" class="rounded-circle"
                        width="150">
                    <div class="mt-3">
                        <h4>{{name}}</h4>
                        <p class="text-secondary mb-1">{{email}}</p>
                        <p class="text-muted font-size-sm">{{about}}</p>
                        <button class="btn btn-outline-primary">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "User",
    props:{
        image:String,
        name:String,
        email:String,
        about:String,
    }
}
</script>

<style scoped>
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}
</style>
