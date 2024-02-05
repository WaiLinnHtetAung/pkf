<template>
  <div>
    <p class="show-link">
      <router-link to="/">Home</router-link>&nbsp;/&nbsp;
      <router-link to="/about-us" @click="about">About-us</router-link
      >&nbsp;/&nbsp;One
    </p>
    <h4>PKF Myanmar</h4>
    <p style="text-indent: 50px">
      We are partnered with a global network of PKF international. Our director
      and members have operated under the PKF brand since 2018 and have stood as
      a private accounting firm since 2013. Our company represents our
      commitment to providing our clients with a consistent experience and for
      each member to be an Independent ethical professional accountant, improve
      client satisfaction and confidence, and for us to grow together.
    </p>
    <p style="text-indent: 50px">
      We are located in Yangon, the former capital and economic center of
      Myanmar, and is a member of PKF International's global family of legally
      independent firms. The firm is founded in 2013 by a partner with strong
      and big-firm audit and tax backgrounds. The firm’s founding partner lives
      in Yangon and is intensely involved in all of the firm’s services
      directing and working closely with the team rather than delegating them to
      the team. Dealing with Government is important to every deal and our team
      has invested extensively in technical assistance projects and advisory
      work with the Myanmar Government. Our partners and senior advisors liaise
      directly with their government counterparts. The unique combination of
      technical and practical knowledge allows us to deliver exceptional
      support, insight, and value at every stage of our clients' businesses. It
      is the firm’s objective to establish, implement, maintain, monitor, and
      enforce a quality control system that provides reasonable assurance that
      the partners and staff members of the firm comply with the International
      Standard on Quality Control (ISQC) 1, “Quality Control for Firms that
      Perform Audits and Reviews of Financial Statements, and Other Assurance
      and Related Services Engagements”, and that the firm’s engagement reports
      are appropriate for the circumstances.
    </p>
  </div>
</template>

<script>
export default {
  setup(prop, { emit }) {
    let about = () => emit("about");

    return { about };
  },
};
</script>

<style scoped></style>
