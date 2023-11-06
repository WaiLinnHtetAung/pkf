<template>
  <div>
    <a href="" class="float-end contact-btn">Contact Us</a>
    <p class="show-link">
      <router-link to="/">Home</router-link>&nbsp;/&nbsp;
      <router-link to="/services/our-services">Services</router-link
      >&nbsp;/&nbsp; Audit & Assurance
    </p>
    <div class="about-content">
      <h3>Audit & Assurance</h3>
      <p>
        Our Assurance and Audit services team holds expertise in an array of
        businesses and offers every aspect from audits to internal reviews,
        ensuring our clients peace of mind that they are adhering to local and
        international corporate reporting standards. Our committed teams are
        ready to assist you in pursuing your business objectives.
      </p>
      <p>Our assurance services, including:</p>
      <ul>
        <li>Statutory Audit</li>
        <li>Internal Audit</li>
        <li>Financial Due Diligence</li>
        <li>Reporting accountant</li>
        <li>Governance, Risk and Control Assurance</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about-content p {
  font-size: 16px;
}

.about-content ul li {
  font-size: 16px;
  list-style: disc;
}
@media (max-width: 450px) {
  .about-content h3 {
    font-size: 20px;
  }
  .about-content p {
    font-size: 13px;
    color: rgb(79, 80, 81);
  }
}
</style>
