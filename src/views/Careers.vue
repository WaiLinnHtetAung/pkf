<template>
    <section>
        <div class="career-header">
            <img src="../assets/images/carrer.jpg" alt="">
            <div class="career-form">
                <a href="" class="float-end">ALL JOB OPPORTUNITIES <i class="fa-solid fa-arrow-up"></i></a>
                <h2>Career <br> Opportunities</h2>
                <form action="">
                    <input type="text" placeholder="Enter job title, skill or city"> <br>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <small>Connect with our social media channels</small>
                <div class="social">
                    <router-link to="#"><i class="fa-brands fa-twitter"></i></router-link>
                    <router-link to="#"><i class="fa-brands fa-linkedin"></i></router-link>
                    <router-link to="#"><i class="fa-brands fa-facebook"></i></router-link>
                    <router-link to="#"><i class="fa-brands fa-instagram"></i></router-link>
                </div>
            </div>

            <div class="row mt-5 career-content">
                <CareerCategory :career = 'career'></CareerCategory>

                <div class="col-lg-9 col-md-8">
                    <div v-if="career == 'careers'">
                        <CareerPage></CareerPage>
                    </div>
                    <div v-if="career == 'junior-auditor'">
                        <JuniorAuditor></JuniorAuditor>
                    </div>
                </div>
          
            </div>
        </div>
    </section>
</template>

<script>
    import JuniorAuditor from '../components/JuniorAuditor'
import CareerPage from '../components/CareerPage'
import CareerCategory from '../components/CareerCategory'
import { onUpdated, onMounted } from 'vue'
export default {
        components: {JuniorAuditor,CareerPage, CareerCategory },
        props: ['career'],
        setup() {
            onUpdated(() => {
                window.scrollTo(0,0);
            })
            onMounted(() => {
                window.scrollTo(0,0)
            })
        }
    }
</script>

<style scoped>
    section {
        overflow-x: hidden;
    }
    .career-header {
        position: relative;
    }
    .career-header img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: center;
        filter: brightness(.6);
    }
    .career-form {
        position: absolute;
        top: 27%;
        left: 30%;
        transform: translate(-50%, -50%);
        padding: 1rem 1rem 2rem;
        color: #fff;
        background-color: rgba(0,79,156,.75);
        min-width: 400px;
    }
    .career-form a {
        color: #00b5e2;
        font-size: 12px;
    }
    .career-form .float-end i {
        color: #00b5e2;
        transform: rotate(45deg);
        margin-left: 5px;
    }
    .career-form h2 {
        color: #fff;
        margin-top: 60px;
        font-size: 25px;
    }
    .career-form input {
        margin: 25px 0 5px;
        border: none;        
        padding: 5px 10px;
        border-radius: 7px;
        font-size: 12px;
        width: 250px;
    }
    .career-form input::placeholder {
        font-size: 12px;
    }
    .career-form input:focus {
        outline: none;
    }
    .career-form button {
        border: none;
        padding: 3px 15px;
        background: #00b5e2;
        border-radius: 7px;
    }
    .career-form button i {
        color: #fff;
    }
    .career-form small {
        display: inline-block;
        color: #fff;
        margin-top: 30px;
    }
    .career-form .social {
        margin-top: .7rem;
        display: flex;
        gap: 1rem;
    }

    .career-form .fa-twitter {
        color: #00acee;
        font-size: 20px;
    }
    .career-form .fa-linkedin {
        color: #0A66C2;
        font-size: 20px;
    }
    .career-form .fa-facebook {
        color: #426cc7;
        font-size: 20px;
    }
    .career-form .fa-instagram {
        color: #d62976;
        font-size: 20px;
    }

   .career-content {
        padding: 20px 9%;
   }

   @media (max-width:990px) {
        .career-header img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            object-position: center;
            filter: brightness(.6);
        }
        .career-form {
            top: 20%;
            left: 30%;
            transform: translate(-50%, -50%);
            padding: .5rem 1rem 1rem;
            min-width: 350px;
        }
        .career-form h2 {
            color: #fff;
            margin-top: 40px;
            font-size: 22px;
        }
        .career-form input {
            margin: 15px 0 5px;
            border: none;        
            padding: 6px 10px;
            border-radius: 7px;
            font-size: 12px;
            width: 250px;
        }
        .career-form button {
            border: none;
            padding: 3px 15px;
            background: #00b5e2;
            border-radius: 7px;
        }
        .career-form button i {
            padding-top: 3px;
        }
        .career-form small {
            display: inline-block;
            color: rgb(240, 239, 239);
            margin-top: 30px;
        }
        .career-form .social {
            margin-top: .7rem;
            display: flex;
            gap: 1rem;
        }

        .career-form .fa-twitter {
            color: #00acee;
            font-size: 20px;
        }
        .career-form .fa-linkedin {
            color: #0A66C2;
            font-size: 20px;
        }
        .career-form .fa-facebook {
            color: #426cc7;
            font-size: 20px;
        }
        .career-form .fa-instagram {
            color: #d62976;
            font-size: 20px;
        }
   }

   @media (max-width:450px) {
        .career-header img {
            width: 100%;
            height: 270px;
            object-fit: cover;
            object-position: center;
            filter: brightness(.6);
        }
        .career-form {
            top: 13%;
            left: 43%;
            transform: translate(-50%, -50%);
            padding: .5rem 1rem 1rem;
            min-width: 300px;
        }
        .career-form a {
            color: #00b5e2;
            font-size: 11px;
        }
        .career-form h2 {
            color: #fff;
            margin-top: 15px;
            font-size: 18px;
        }
        .career-form input {
            margin: 10px 0 5px;
            border: none;        
            padding: 4px 10px;
            border-radius: 7px;
            font-size: 12px;
            width: 250px;
        }
        .career-form button {
            border: none;
            padding: 3px 15px;
            background: #00b5e2;
            border-radius: 7px;
        }
        .career-form button i {
            padding-top: 5px;
        }
        .career-form small {
            display: inline-block;
            color: rgb(240, 239, 239);
            margin-top: 10px;
        }
        .career-form .social {
            margin-top: .5rem;
            display: flex;
            gap: 1rem;
        }

        .career-form .fa-twitter {
            color: #00acee;
            font-size: 16px;
        }
        .career-form .fa-linkedin {
            color: #0A66C2;
            font-size: 16px;
        }
        .career-form .fa-facebook {
            color: #426cc7;
            font-size: 16px;
        }
        .career-form .fa-instagram {
            color: #d62976;
            font-size: 16px;
        }
        .career-content {
            display: flex;
            flex-direction: column-reverse;
        }
   }

</style>
