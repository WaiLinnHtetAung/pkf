<template>
    <div>
        <nav class="nav2 navbar navbar-expand-lg bg-light">
            <div class="container">
                <a class="navbar-brand" href="index.html"><img class="logo-text" src="../assets/images/logo.jpg" height="50"
                        alt="Hitachi, Ltd."></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link nav2-info-container" href=""><span>Products & Services</span></a>
                            <div class="dropdown">
                                <div class="fusion-megamenu-widgets-container second-level-widget">
                                    <div id="media_image-3" class="widget widget_media_image">
                                        <img src="../assets/images/logo.jpg"
                                            class="image wp-image-22968  attachment-full size-full" alt="">
                                    </div>
                                </div>
                                <ul>
                                    <li class="dropdown-link"><a href="#">Distribution Transformer<i
                                                class="uil uil-angle-right"></i></a></li>
                                    <li class="dropdown-link"><a href="#">Power Transformer<i
                                                class="uil uil-angle-right"></i></a></li>
                                    <li class="dropdown-link"><a href="#">Panel<i
                                                class="uil uil-angle-right"></i></a></li>
                                    <li class="dropdown-link"><a href="#">Package Type Transformer<i
                                                class="uil uil-angle-right"></i></a></li>
                                </ul>
                                <ul>
                                    <li class="dropdown-link"><a href="#">Installation Services<i
                                                class="uil uil-angle-right"></i></a></li>
                                    <li class="dropdown-link"><a href="#">After Sale Services<i
                                                class="uil uil-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav2-info-container" href="#"><span class="">About Us</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav2-info-container" href="#"><span class="">Certificates</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav2-info-container" href="#"><span class="">News</span></a>
                            <div class="dropdown">
                                <div class="fusion-megamenu-widgets-container second-level-widget">
                                    <div id="media_image-3" class="widget widget_media_image">
                                        <img src="../assets/images/logo.jpg"
                                            class="image wp-image-22968  attachment-full size-full" alt="">
                                    </div>
                                </div>
                                <ul>
                                    <li class="dropdown-link"><a href="#">Activities<i class="uil uil-angle-right"></i></a>
                                    </li>
                                    <li class="dropdown-link"><a href="#">History<i class="uil uil-angle-right"></i></a>
                                    </li>
                                </ul>
                                <ul>
                                    <li class="dropdown-link"><a href="nr.html">New release<i
                                                class="uil uil-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav2-info-container" href="carrers.html"><span class="">Careers</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style  scoped>
    img {
        width: 50px;
    }




/* ----- Start Dropdown Sub Menu ----- */

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    transform: translateY(10px);
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
}

.dropdown ul {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 10px 50px;
}

.dropdown ul li {
    margin: 10px 30px;
}

.zone-dropdown ul {
    display: flex;
    flex-basis: 30%;
    flex-direction: row;
    flex-wrap: wrap;
    width: 40rem;
}

.zone-dropdown ul .dropdown-link a {
    flex-basis: auto;
    width: 13rem;
    border-right: 1px solid #fff;
}

.dropdown-link>a {
    text-decoration: none;
    display: flex;
    color: #fff;
    padding: .5rem 0;
    font-size: 1rem;
    align-items: center;
    vertical-align: middle;
    transition: .3s;
}

.dropdown-link:hover>a {
    text-decoration: underline;
}

.dropdown-link:first-child:hover~.arrow {
    background-color: #3498db;
}

.dropdown-link {
    position: relative;
}

.dropdown-menu {
    padding: 8px 16px;
}

.dropdown-item {
    margin: 0 auto !important;
}

.dropdown.second {
    top: 0;
    left: 100%;
    padding-left: .8rem;
    cursor: pointer;
    transform: translateX(10px);
}

.fusion-megamenu-widgets-container {
    width: 25%;
    display: block;
    padding: 0 34px;
    margin: auto 10px auto 50px;
    line-height: 1.8;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    letter-spacing: 0;
    font-style: normal;
}

.widget_media_image {
    border-style: solid;
    border-color: transparent;
    border-width: 0px;
}

.wp-image-22968 {
    max-width: 100%;
    height: auto;
    border-style: none;
    vertical-align: top;
    overflow-clip-margin: content-box;
    overflow: clip;
    width: 249px;
    aspect-ratio: auto 249 / 83;
    height: 120px;
}

.nav-item:hover>.dropdown,
.dropdown-link:hover>.dropdown {
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
}

.dropdown-link .uil {
    font-size: 1.5rem;
    font-weight: 600;
    padding-top: auto;
    padding-bottom: auto;
    margin: auto 0 auto 10px;
    color: #c02;
    justify-content: inherit;
    vertical-align: middle !important;
}

@media (max-width: 850px) {
    .dropdown {
        top: 10%;
    }
    .fusion-megamenu-widgets-container {
        display: none;
    }
    .dropdown ul {
        margin: 10px 15px !important;
        transition: all 0.5s;
    }
    .dropdown ul li {
        margin: 10px 15px !important;
        transition: all 0.5s;
    }
}

@media (max-width: 450px) {
    .fusion-megamenu-widgets-container {
        display: none;
    }
    .dropdown ul {
        margin: 7px 3px !important;
        transition: all 0.5s;
    }
    .dropdown ul li {
        margin: 0 3px !important;
        transition: all 0.5s;
    }
    .portfolio-container {
        margin-right: 2.5rem !important;
    }
}


/* ----- End Dropdown Sub Menu ----- */




</style>
