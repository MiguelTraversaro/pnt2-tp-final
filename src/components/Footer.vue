<template>
  <footer>
    <div class="footer fixed-bottom border-top border-light p-2 bg-dark row text-center">
      <div class="container col">
        <a class="btn btn-link" href="#top">Inicio</a>
      </div>
      <div class="container col">
        <span class="text"></span>
      </div>
      <div class="container col">
        <button type="button" class="btn btn-link" data-toggle="modal" data-target="#formulario" data-whatever="@mdo">Tecno Hard</button>
      </div>
    </div>
    <div class="modal fade" id="formulario" tabindex="-1" aria-labelledby="formularioLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="formularioLabel">Nuevo email</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <vue-form :state="formState">
              <div class="modal-body">
                <validate tag="div">
                  <label for="mail">Email:</label>
                  <input type="text" class="form-control" id="mail" disabled :placeholder="email">
                </validate>
                <validate tag="div">
                  <label for="texto">Mensaje:</label>
                  <input type="text" class="form-control" id="texto" autocomplete="off">
                </validate>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <input type="submit" class="btn btn-primary" value="Enviar" data-dismiss="modal" @click="enviar">
              </div>
            </vue-form>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>  

export default {
    name: "Footer",
    data() {
      return {
        email: 'tecnohard@info.com',
        formState: {}
      }
    },
    methods: {
      enviar(){
        console.log({...this.formState})
        document.querySelector('#texto').value = ''
        this.formState._reset()
      }
    }
}
</script>

<style scoped>

</style>
