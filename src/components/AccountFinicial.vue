<template>
  <div>
    <a href="" class="float-end contact-btn me-4">Contact Us</a>
    <p class="show-link">
      <router-link to="/">Home</router-link>&nbsp;/&nbsp;
      <router-link to="/services/our-services">Services</router-link
      >&nbsp;/&nbsp; Accounting & Finicial Report
    </p>
    <div class="about-content">
      <h3>Accounting and Financial Reporting</h3>
      <p>
        Thida & Partners Ltd. provides comprehensive accounting services and
        assists you in the preparation of financial reports in accordance with
        the local and international corporate reporting standards.
      </p>
      <ul>
        <li>Bookkeeping</li>
        <li>Management Reports</li>
        <li>Statutory Accounting</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 450px) {
  .about-content h3 {
    font-size: 19px;
  }
  .about-content p {
    font-size: 12px;
    color: rgb(79, 80, 81);
  }
}
</style>
