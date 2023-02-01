<script setup>
import { RouterLink, RouterView } from "vue-router";
//import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <div>
        <a class="navbar-brand" href="#"
          ><h1>
            <img src="./assets/MJU_LOGO.svg.png" width="100" height="100" />

            MJU
          </h1>
        </a>
      </div>
      <h6 style="color: black; margin-top: 6.5%;margin-right:9% ;">
        <div class="shadow-none p-3 bg-light rounded ">ยินดีต้อนรับเข้าสู่เว็บไซต์</div>
      </h6>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link" href="#"><RouterLink to="/">ข่าว</RouterLink> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                ><RouterLink to="/Subject">Subject</RouterLink></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                ><RouterLink to="/AddDrop">AddDrop</RouterLink></a
              >
            </li>
          </ul>
          <form class="d-flex mt-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>

  <div>พื้นที่หน้าจอหลัก<RouterView /></div>
</template>


