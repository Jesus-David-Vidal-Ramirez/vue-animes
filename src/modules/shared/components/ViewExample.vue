<template>
  <section class="container text-center">
    <div class="row d-block mt-5">
      <!-- Headers -->

      <div class="col mb-5">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid justify-content-center">
            <a class="navbar-brand" href="/">
              <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
              Titles
            </a>
          </div>
        </nav>
      </div>
      <!-- en cierto breakPoint en 767 quitar el border line
        y bajar los margenes entre bloques -->
      <div class="col mb-5">

        <div class="row">
          <div class="col-md-3 izquierda">

            <!-- <nav class="nav flex-column">
              <a class="nav-link active" href="#">Inicio</a>
              <a class="nav-link" href="#">Perfil</a>
              <a class="nav-link" href="#">Mensajes</a>
              <a class="nav-link" href="#">Configuración</a>
            </nav> -->

            <nav class="navbar navbar-expand-md bg-body-tertiary ">
              
                <!-- <a class="navbar-brand" href="#">Icon</a> -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                  <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                
              </div>
            </nav>
          </div>


          <div class="col-md-9 derecha">
            <div class="content d-flex flex-wrap justify-content-center">

              <div class="card mt-4 mx-3" style="width: 18rem">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                  class="img-fluid rounded-start" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card mt-4 mx-3" style="width: 18rem">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg"
                  class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card mt-4 mx-3" style="width: 18rem">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg"
                  class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card mt-4 mx-3" style="width: 18rem">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                  class="img-fluid rounded-start" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card mt-4 mx-3" style="width: 18rem">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg"
                  class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card mt-4 mx-3" style="width: 18rem">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg"
                  class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card mt-4 mx-3" style="width: 18rem">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg"
                  class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card mt-4 mx-3" style="width: 18rem">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                  class="img-fluid rounded-start" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card mt-4 mx-3" style="width: 18rem">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg"
                  class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div class="card mt-4 mx-3" style="width: 18rem">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg"
                  class="card-img-top" alt="..." />
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
          </div>
        </div>


      </div>

      <!-- Footer -->
      <div class="col mb-5">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4  d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
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
  </section>
</template>

<script>
export default {
  name: "Test",
};
</script>

<style lang="scss" scoped>
.list-menu {
  height: calc(100vh - 100px);
  border-right: 1px solid #2c3e50;
}
.derecha{
  border-left: 1px solid black ;
}
.izquierda{
  margin-top: 25vh;
}
@media (max-width: 769px) { 
  
    
  .derecha {
    border-left: none ;
  }
 }
</style>
