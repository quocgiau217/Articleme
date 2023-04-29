<template>
  <div class="row">
    <div class="col-md-12">
          <div class="item">
            <div class="blog-container">
              <div class="img-container">
                <img :src="`http://localhost:8000/${thumbnail}`" />
              </div>
              <div class="small-text">
                <div class="tag">
                  <span class="text-gray">{{tags}}</span>
                </div>
                <div class="date">
                  <span class="text-gray">{{date}}</span>
                </div>
              </div>
              <div class="blog-desc">
                <div class="blog-head">
                  <h2><router-link class="link" :to="`/article/view/${id}`">{{heading}}</router-link></h2>
                  <p>{{description}}</p>
                  <router-link class="read-more link" :to="`/article/view/${id}`">Read More</router-link>
                </div>
                <div class="sharing">
                  <div class="share"><i class="fa fa-share"></i>0 Share</div>
                  <div class="comments"><i class="fa fa-comment-o"></i>68 Comments</div>
                  <div class="views"><i class="fa fa-eye"></i>83k Views</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleContainer",
  props:{
    heading:String,
    description:String,
    thumbnail:String,
    tags:Array,
    id:String,
    date:Date,
  }
};
</script>

<style scoped>
  .item{
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 22px 5px rgb(0 0 0 / 10%);
    border-radius: 38px;
  }
  .blog-container{
    padding: 20px;
  }
  .blog-container .img-container{
    width: 100%;
    height: 410px;
    overflow: hidden;
    border-radius: 38px;
  }
  .blog-container .img-container img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .small-text{
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .small-text .text-gray{
    font-size: 16px;
    line-height: 20px;
    color: #AFAFAF;
  }
  h2{
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
  }
  h2 .link{
    font-size: 28px;
    line-height: 40px;
    font-family: 'Samsung Sharp Sans Bold';
    color: #253B7C;
    text-decoration: none;
  }
  p{
    font-family: 'Samsung Sharp Sans Medium', sans-serif !important;
    font-size: 1rem;
  }
  .read-more{
    color: rgba(255, 216, 78, 1);
    text-decoration: none;
  }
  .blog-head{
    margin-bottom: 50px;
  }
  .row{
    margin-top: 20px;
  }
  .sharing{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    color: #AFAFAF;
  }
  .share,.comments,.views{
    cursor: pointer;
  }
</style>
