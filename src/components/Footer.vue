<template>
  <div class="section">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <h5>Follow Us</h5>
        <a href="#" class="link">
          <i class="fa-brands fa-twitter"></i>
          <p>Twitter</p>
        </a>
        <a href="#" class="link">
          <i class="fa-brands fa-linkedin-in"></i>
          <p>Linkedin</p>
        </a>
        <a href="#" class="link">
          <i class="fa-brands fa-youtube text-danger"></i>
          <p>Youtube</p>
        </a>
        <a href="#" class="link">
          <i class="fa-brands fa-facebook-f"></i>
          <p>Facebook</p>
        </a>
      </div>
      <div class="col-lg-3 col-md-6">
        <h5>Services</h5>
        <a class="service-link link" href="#">
          <i class="fa-solid fa-thumbs-up"></i>
          <p>Services</p>
        </a>
        <a class="service-link link" href="#">
          <i class="fa-solid fa-link"></i>
          <p>Userful Links</p>
        </a>
      </div>
      <div class="col-lg-3 col-md-6">
        <h5>About</h5>
        <a class="link" href="#">
          <i class="fa-solid fa-sitemap"></i>
          <p>Sitemap</p>
        </a>
        <a class="link" href="#">
          <i class="fa-solid fa-user"></i>
          <p>Carrers</p>
        </a>
        <a class="link" href="#">
          <i class="fa-solid fa-gavel"></i>
          <p>Legal</p>
        </a>
      </div>
      <div class="col-lg-3 col-md-6">
        <h5>PKFI</h5>
        <a class="pkf-link link" href="#">
          <i class="fa-solid fa-earth-americas"></i>
          <p>PKF International</p>
        </a>
        <a class="pkf-link link" href="#">
          <i class="fa-brands fa-twitter"></i>
          <p>PKFI on Twitter</p>
        </a>
      </div>
    </div>
  </div>
  <footer>
    <div class="row">
      <div class="col-lg-4 col-md-12 footer-contact-info">
        <div class="col-lg-12 col-md-4">
          <img src="../assets/images/logo.png" alt="" />
          <h2>PKF MYANMAR</h2>
          <h2>Thida & Partners Limited</h2>
        </div>
        <div class="col-lg-12 col-md-6">
          <div class="social">
            <i class="fa-solid fa-phone"></i>
            <span>+959 799907720 </span>
          </div>
          <div class="social">
            <i class="fa-solid fa-envelope"></i>
            <span>info@pkf.com.mm </span>
          </div>
          <div class="social">
            <i class="fa-solid fa-location-dot"></i>
            <span>
              11C, Stadium View Condo, Corner of Bomin Yaung Road and Mandalay
              Street, Mingalartaungnyunt Township, Yangon, Myanmar.
            </span>
          </div>
        </div>
      </div>
      <div class="col-lg-8 footer-content">
        <p class="pkf-info">
          <i class="fa-solid fa-circle-right"></i>
          <span>PKF Myanmar member of PKF International</span>
        </p>
        <p class="pkf-info">
          <i class="fa-solid fa-circle-right"></i>
          <span
            >PKF Myanmar is a member firm of the PKF International Limited
            family of legally independent firms and does not accept any
            responsibility or liability for the actions or inactions of any
            individual member or correspondent firm or firms.</span
          >
        </p>
        <p class="pkf-info">
          <i class="fa-solid fa-circle-right"></i>
          <span
            >PKF Myanmar is a member firm of the PKF International Limited
            family of legally independent firms and does not accept any
            responsibility or liability for the actions or inactions of any
            individual member or correspondent firm or firms.</span
          >
        </p>
      </div>
    </div>
    <hr />
    <div class="copy-right">
      <div><span>&copy;</span>2021 PKF MYANMAR</div>
      <div>Privacy Policy</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.section {
  padding: 30px 16%;
  background: #eee;
}
.section h5 {
  font-size: 16px;
  margin-bottom: 15px;
  padding-left: 10px;
}
.link {
  display: flex;
  gap: 0.5rem;
  justify-content: start;
  background: #00b5e2;
  margin-bottom: 0.3rem;
  width: 100px;
  padding: 3px 10px 0;
  height: 25px;
  border-radius: 12px;
  font-size: 12px;
  transition: 0.5s ease;
}
.link:hover {
  transform: scale(1.1);
}
.link i {
  margin-left: 5px;
  padding-top: 3px;
}

.service-link {
  width: 130px;
}
.pkf-link {
  width: 150px;
}
footer img {
  width: 30%;
}
footer {
  padding: 30px 9%;
}
footer h2 {
  margin: 20px 0;
  font-weight: bold;
  font-size: 20px;
  color: #6ebf08;
}
footer .social {
  display: flex;
  gap: 1rem;
  margin-bottom: 15px;
}
footer .social span {
  font-size: 13px;
  color: rgb(56, 51, 51);
}
footer .social i {
  font-size: 15px;
  color: #003594;
}
footer .pkf-info {
  font-size: 13px;
  display: flex;
  gap: 0.7rem;
}
footer .pkf-info i {
  padding-top: 5px;
  color: #003594;
}
footer .footer-content {
  padding: 90px 20px 10px;
}
.copy-right {
  display: flex;
  justify-content: space-between;
  padding: 0 3%;
}
.copy-right div {
  font-size: 10px;
}
.copy-right span {
  font-size: 13px;
  margin-right: 3px;
}

@media (max-width: 990px) {
  footer .footer-contact-info {
    display: flex;
    justify-content: space-between;
  }

  footer img {
    width: 50%;
  }
  footer .footer-content {
    padding: 40px 20px 10px;
  }
}

@media (max-width: 450px) {
  footer .footer-contact-info {
    display: block;
    justify-content: space-between;
  }
  footer img {
    width: 30%;
  }
}
</style>
