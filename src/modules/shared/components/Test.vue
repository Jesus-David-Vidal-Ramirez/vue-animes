<template>
  <!-- View Principal -->
  <div class="container text-center">
    <div class="row d-block mt-5">
      <!-- Headers -->
      <div class="col mb-5">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid justify-content-center">
            <a class="navbar-brand" href="/">
              <img
                src="@/assets/logo.svg"
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
              Titles
            </a>
          </div>
        </nav>
      </div>
      <!-- en cierto breakPoint en 770 poner justify-content-center
        y bajar los margenes entre bloques -->
      <div class="col mb-5 d-flex flex-wrap justify-content-center">
        <div class="card mt-4 mx-3" style="width: 18rem">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
            class="img-fluid rounded-start"
            alt="..."
          />

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card mt-4" style="width: 18rem">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card mt-4" style="width: 18rem">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card mt-4" style="width: 18rem">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/128.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card mt-4" style="width: 18rem">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/264.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card mt-4" style="width: 18rem">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/564.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card mt-4" style="width: 18rem">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/356.svg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="col mb-5">
        <footer
          class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
        >
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary"
              >© 2024 Company, Inc</span
            >
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <b-icon icon="whatsapp"></b-icon>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <b-icon icon="linkedin"></b-icon>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <b-icon icon="instagram"></b-icon>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <b-icon icon="youtube"></b-icon>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
  <!-- End View Principal -->

  
</template>

<script>
export default {
  name: "Test",
};
</script>

<style lang="scss" scoped></style>
