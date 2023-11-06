<template>
  <section>
    <div class="contact-header">
      <img src="../assets/images/contact-us.jpg" alt="" />
      <h2>
        CONTACT PKF MYANMAR <br />
        HEAD OFFICE IN YANGON
      </h2>
    </div>
    <div class="contact-content">
      <p class="show-link">
        <router-link to="/">Home</router-link>&nbsp;/&nbsp; Contact PKF Myanmar
      </p>
      <div class="row mt-5 contact-info">
        <h3>Thank you for your interest in PKF Myanmar</h3>
        <p>
          We'll help direct your enquiry to the right place. You can start with
          the form below or use our firm search:
        </p>

        <p>
          <span class="fw-bold">Contact a specific member firm? <br /></span>
          Please find the firm you are looking for in our Firm Search - click
          here and use the contact form provided.
        </p>

        <p>
          <span class="fw-bold">Looking for recruitment opportunities?</span
          ><br />
          Please search for the firm of interest using our Firm Search - click
          here and contact the firm using the details provided.
        </p>
      </div>
    </div>
    <div class="row mt-5 form">
      <div class="col-lg-6 ps-0">
        <form action="">
          <div class="form-group mb-2">
            <label for="">Full Name <span>*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group mb-2">
            <label for="">Email <span>*</span></label>
            <input type="email" class="form-control" />
          </div>
          <div class="form-group mb-2">
            <label for="">Phone Number <span>*</span></label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group mb-2">
            <label for="">Message <span>*</span></label>
            <textarea
              class="form-control"
              name=""
              id=""
              cols="30"
              rows="4"
            ></textarea>
          </div>
          <div class="form-group mb-1">
            <label class="text-muted">
              We will only use your personal information to handle your enquiry,
              see our policies, click to confirm <span>*</span>
            </label>
          </div>
          <div class="form-group mb-3">
            <input type="checkbox" class="me-2" />
            <label for=""
              >Yes, I give permission to store and process my data</label
            >
          </div>
          <div class="text-start">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div class="col-lg-6 text-center map ps-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21805.962517665175!2d96.14998484085122!3d16.814390059575214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ecbe9bf93d69%3A0xc3f3f04845cf0bd!2sChatrium%20Hotel%20Royal%20Lake%20Yangon!5e0!3m2!1sen!2smm!4v1684902135208!5m2!1sen!2smm"
          width="500"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUpdated } from "vue";
export default {
  setup() {
    onUpdated(() => {
      window.scrollTo(0, 0);
    });
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.contact-content {
  position: relative;
}
.contact-header img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.6);
}
.contact-header h2 {
  position: absolute;
  top: 40%;
  left: 25%;
  transform: translate(-50%, -50%);
  color: #fff;
  background: rgb(28, 72, 185, 0.75);
  font-size: 22px;
  padding: 40px 40px;
  font-weight: bold;
}
.contact-content {
  padding: 20px 17%;
}
.contact-info h3 {
  color: cornflowerblue;
  font-size: 25px;
}
.contact-info p {
  font-size: 13px;
}
form {
  width: 350px;
}

form label {
  font-size: 13px;
}
form span {
  color: red;
}
form input,
form textarea {
  border-radius: 7px;
  resize: none;
  font-size: 12px;
}
form button {
  font-size: 13px;
  border: none;
  background: #6fbf08;
  padding: 5px 20px;
  border-radius: 7px;
}
.form {
  padding: 30px 17%;
}

@media (max-width: 990px) {
  .contact-header h2 {
    top: 32%;
    left: 30%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    padding: 20px 30px;
  }
  .form {
    margin: 0 auto !important;
  }

  .form form {
    margin: 0 auto 30px !important;
  }
}

@media (max-width: 450px) {
  .contact-header img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.6);
    position: relative;
  }
  .contact-content {
    padding: 20px 10%;
  }
  .contact-header h2 {
    top: 27%;
    left: 30%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    padding: 15px 20px;
  }
  .form {
    margin: 0 auto !important;
    padding: 10px 8%;
    width: auto !important;
  }

  .form form {
    margin: 0 auto 30px !important;
    width: 300px;
  }
  .contact-info h3 {
    color: cornflowerblue;
    font-size: 20px;
  }
  .contact-info p {
    font-size: 12px;
  }
  .map iframe {
    width: 100% !important;
  }
}
</style>
