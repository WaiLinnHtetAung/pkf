<template>
  <div>
    <a href="" class="float-end contact-btn me-4">Contact Us</a>
    <p class="show-link">
      <router-link to="/">Home</router-link>&nbsp;/&nbsp; Services
    </p>
    <div class="about-content">
      <h3>Our Services</h3>
      <p>
        Our main services can be categorized as accounting and financial audit,
        tax compliance, tax due diligence and providing tax advisory. We provide
        clear advice in relation to Myanmar Financial Reporting Standards and
        ensure clear communication of goals to our clients. We draw our
        excellence from a strong team of professionals with extensive audit
        experience, strong local relationships and experienced local and
        international expertise in order to provide the best services to our
        clients and to build a strong relationship with them.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-content p {
  text-indent: 50px;
  font-size: 16px;
}
@media (max-width: 450px) {
  .about-content h3 {
    font-size: 20px;
  }
  .about-content p {
    font-size: 14px;
    color: rgb(79, 80, 81);
  }
}
</style>
