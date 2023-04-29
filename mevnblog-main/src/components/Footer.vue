<template>
    <div>
       <div class="footer">
        <Newsletter/>
        <MainFooter/>
       </div>
    </div>
</template>

<script>
    import Newsletter from './Newsletter.vue';
    import MainFooter from './MainFooter.vue';
    export default {
    name: "Footer",
    components: { Newsletter, MainFooter,}
}
</script>

<style scoped>
.footer{
    background: linear-gradient(180deg, #324FA4 7.27%, #253B7C 88.9%);
    border-radius: 34px;
    padding: 0px 60px;
    position: relative;
}
</style>
