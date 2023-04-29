<template>
    <div>
     <div class="mt-4">
     <div class="row">
      <CategoryItem/>
     <CategoryItem/>
      <CategoryItem/>
      <CategoryItem/>
     </div>
     </div>
    </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
    export default {
        name: "CategoryCard",
        components:{
            CategoryItem,
        }
    }
</script>

<style scoped>

</style>
