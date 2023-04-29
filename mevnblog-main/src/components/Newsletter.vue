<template>
    <div>
        <div class="newsletter">
            <div class="row">
                <div class="col-lg-6">
                    <h1>Subscribe to our newsletter</h1>
                </div>
                <div class="col-lg-6">
                    <form>
                        <input class="form-control me-2 search" type="email" placeholder="Enter Your Email">
                        <button class="btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Newsletter',
    }
</script>

<style scoped>
.newsletter{
    padding: 30px 30px;
    border-radius: 61px;
    background: #FFE598;
    position: relative;
    top: -50px;
    left: 0;
    right: 0;
    z-index: 2;
}
.newsletter h1{
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    font-family: 'Samsung Sharp Sans Bold';
    color: #253B7C;
}
form{
    background-color: #fff;
    padding: 10px 20px;
    width: 100%;
    border-radius: 50px;
}
form input{
    width: 68% !important;
    display: inline-block;
    border: none;
    height: 34px;
}

form input:enabled{
    box-shadow: none;
}

form button{
    background: linear-gradient(180deg, #324FA4 7.27%, #253B7C 88.9%);
    color: #fff;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 50px;
}
</style>
