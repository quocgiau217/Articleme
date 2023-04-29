<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="img-container container">
          <img src="../assets/img/banner.png" class="img" />
        </div>
      </div>
      <div class="col-md-6">
      <div class="container">
      <h1><span>Learn</span> Entrepreneurship From the best</h1>
      <p>Excel in your entrepreneurial journey by accomplishing your business goals through upskilling and personalized mentorship.</p>
      <a class="btn btn1 btn-lg">Get Started</a>
      <a class="btn btn2 btn-lg">Get Started</a>

      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.row {
  margin-top: 20px;
}
h1{
    font-size:48px;
    line-height:3.5rem;
    font-weight: 700;
    color: #253B7C;
    font-family: 'Samsung Sharp Sans Bold', sans-serif !important;
    margin-top:60px;
}
span{
    color:#52B6DF;
}
p{
    color:#6F6E6E;
    margin-top:20px;
    margin-bottom:20px;
}
.btn1{
    background: linear-gradient(180deg, #324FA4 7.27%, #253B7C 88.9%);
    color: #fff;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 14px;
    width: 167px;
    font-weight:600;
}

.btn2{
    background: #FFD84E;
    color: rgb(37, 59, 124);
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 14px;
    width: 167px;
    font-weight:600;


}


</style>
