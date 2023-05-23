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
                <a class=" link" href="#">
                    <i class="fa-solid fa-sitemap"></i>
                    <p>Sitemap</p>
                </a>
                <a class=" link" href="#">
                    <i class="fa-solid fa-user"></i>
                    <p>Carrers</p>
                </a>
                <a class=" link" href="#">
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
        <p>PKF Myanmar member of PKF International</p>
        <p>
            PKF Myanmar is a member firm of the PKF International Limited family of legally independent firms and does not accept any responsibility or liability for the actions or inactions of any individual member or correspondent firm or firms.
        </p>
        <p>
            "PKF" and the PKF logo are registered trademarks used by PKF International and member firms of the PKF International Network. They may not be used by anyone other than a duly licenced member firm of the Network.
        </p>
    </footer>
</template>

<script>
    export default {
        
    }
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
        gap: .5rem;
        justify-content: start;
        background: #00b5e2;
        margin-bottom: .3rem;
        width: 100px;
        padding: 3px 10px 0;
        height: 25px;
        border-radius: 12px;
        font-size: 12px;
        transition: .5s ease;
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
    footer {
        padding: 30px 9%;
    }
    footer p {
        font-size: 13px;
    }
</style>
