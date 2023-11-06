<template>
  <div>
    <a href="" class="float-end contact-btn me-4">Contact Us</a>
    <p class="show-link">
      <router-link to="/">Home</router-link>&nbsp;/&nbsp;
      <router-link to="/services/our-services">Services</router-link
      >&nbsp;/&nbsp; Advisory
    </p>
    <div class="about-content">
      <h3>Advisory Services</h3>
      <p>
        Our qualified team assists you in managing the required transitional
        modifications and ensuring compliance with the approved accounting
        standards while upholding the appropriate levels of operating
        efficiencies.
      </p>
      <p>We provide advisory services, including:</p>
      <ul>
        <li>Valuation service</li>
        <li>Corporate restructuring</li>
        <li>Financial Reporting Standards compliance advisory</li>
        <li>Fraud investigation</li>
        <li>Insolvency</li>
        <li>Equity compensation</li>
        <li>Goodwill impairment</li>
        <li>Intellectual property, brand, and other intangible asset</li>
        <li>Acquisition</li>
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
    font-size: 20px;
  }
  .about-content p {
    font-size: 12px;
    color: rgb(79, 80, 81);
  }
}
</style>
