<template>
  <div>
    <a href="" class="float-end contact-btn me-4">Contact Us</a>
    <p class="show-link">
      <router-link to="/">Home</router-link>&nbsp;/&nbsp;
      <router-link to="/services/our-services">Services</router-link
      >&nbsp;/&nbsp; Corporate Secretarial
    </p>
    <div class="about-content">
      <h3>CORPORATE SECRETARIAL SERVICE</h3>
      <p>
        Thida & Partners Ltd. provides the complete range of corporate
        secretarial services to corporates in Myanmar.
      </p>
      <ul>
        <li>Acting as a corporate secretarial agent</li>
        <li>Annual statutory and regulatory compliance</li>
        <li>Maintenance of statutory books and registers</li>
        <li>Enterprise support service</li>
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
