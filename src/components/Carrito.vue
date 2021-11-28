<template>

  <section class="src-components-carrito">
    <div class="float-right mr-3 tp-2">
      <button :class="clase()" @click="mostrarCarrito,cambiar()" data-toggle="modal" data-target="#carrito"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="50" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg> 
      ({{ this.$store.state.carrito.length }})</button>
    </div>
    <div class="modal fade" id="carrito" tabindex="-1" aria-labelledby="carritoLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div v-if="calcularTotalCarrito() > 0" class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="carritoLabel">Carrito</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
              <tr v-for="(producto, index) in this.$store.state.carrito" :key="index">
                <td><img :src="producto.imagen" width="100" class="bg-light" :alt="producto.producto"></td>
                <td>{{ producto.producto }}</td>
                <td>${{ producto.precio }}</td>
                <td>{{producto.cantidad}}</td>
                <td><button type="button" class="close" aria-label="Close" @click="eliminar(index)">
                <span aria-hidden="true">&times;</span></button></td>
              </tr>
              <tr>
                <td></td>
                <td class="font-weight-bolder">TOTAL:</td>
                <td></td>
                <td class="font-weight-bolder">${{ total }}</td>
                <td></td>
              </tr>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-success" data-dismiss="modal" @click="comprar()">Comprar</button>
          </div>
        </div>
        <div v-else-if="calcularTotalCarrito() == 0 && comprado" class="alert alert-success">
          Productos comprados.
        </div>
        <div v-else class="alert alert-warning">
          No hay productos en este carrito.
        </div>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-carrito',
    props: [],
    mounted () {

    },
    data () {
      return {
        total: this.calcularTotalCarrito(),
        comprado: false,
      }
    },
    methods: {
      mostrarCarrito(){
        this.total = this.calcularTotalCarrito()
      },
      calcularTotalCarrito(){
        let total = 0
        for(let p of this.$store.state.carrito){
          total += p.precio * p.cantidad
        }
        return total
      },
      eliminar(index){
        this.$store.dispatch('eliminar', index)
        this.total = this.calcularTotalCarrito()
      },
      comprar(){
        this.$store.dispatch("comprar")
        this.comprado = true
      },
      clase(){
        let style = 'btn btn-success'
        if(this.$store.state.carrito.length == 0){
          style = 'btn btn-danger'
        }
        return style
      },
      cambiar(){
        this.comprado=false
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>