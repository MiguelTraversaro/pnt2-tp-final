<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <img src="@/assets/logo.png" height="50px" alt="logo" class="ml-5">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse ml-5" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/"
            >Inicio<span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <ul class="navbar-nav ml-5">
          <li class="nav-item active">
            <router-link class="nav-link" to="/login"
              >Ingresar<span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/register"
              >Registrarse<span class="sr-only">(current)</span></router-link
            >
          </li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>
