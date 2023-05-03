<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <h2>About Us</h2>
                <p>We are committed to providing you with the skills, knowledge and confidence you need to achieve your personal and professional goals
                </p>
                
            </div>
            <div v-for="n in 3" class="col-md-3">
                <FooterLinks :title="links.title[n-1]" :hyperlinks="links.hyperlinks[n-1]"/>
            </div>


        </div>
    </div>
</template>

<script>
    import FooterLinks from './FooterLinks.vue';
    export default {
        name:"MainFooter",
        components:{
            FooterLinks,
        },
        data(){
            return{
                links:{
                title:["Company","Product","Resource"],
                hyperlinks:[
                    [
                        {
                            name:"About Us",
                            link:"#"
                        },
                        {
                            name:"Contact Us",
                            link:"#"
                        },
                        {
                            name:"Follow Us",
                            link:"#"
                        },
                    ],
                    [
                        {
                            name:"About Us",
                            link:"#"
                        },
                        {
                            name:"Contact Us",
                            link:"#"
                        },
                        {
                            name:"Follow Us",
                            link:"#"
                        },
                    ],
                    [
                        {
                            name:"About Us",
                            link:"#"
                        },
                        {
                            name:"Contact Us",
                            link:"#"
                        },
                        {
                            name:"Follow Us",
                            link:"#"
                        },
                    ]
                ]

            }

            } 
        }
    }
</script>

<style scoped>
h2{
    font-size: 1.75rem !important;
    color: #fff;
    margin-bottom: 20px;
}
p{
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 20px;
    font-family: 'Samsung Sharp Sans Regular', sans-serif;
    color: #fff;
}
</style>
