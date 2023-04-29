<template>
      <Header :logged="islogged"/>

  <RouterView :check="checkUser"/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
export default {
    name:'App',
    components:{
        Header
    },
    data(){
        return{
            islogged:false,
        }
    },
    methods:{
        checkUser(a){
            this.islogged = a;  
        }
    }
}
</script>

<style scoped>

</style>
