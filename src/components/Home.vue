<template>
  <div class="table-responsive mt-5">
     <Carrito/>
    <table class="table container border border-light">
      <tr class="bg-success text-white">
        <th>Imagen</th>
        <th>Producto</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Ingresar Nuevo Stock</th>
        <th></th>
      </tr>
      <tr
        class="bg-dark text-white"
        v-for="(producto, index) in this.$store.state.productos"
        :key="index"
      >
        <td>
          <img
            :src="producto.imagen"
            width="100"
            class="bg-light"
            :alt="producto.producto"
          />
        </td>
        <td>{{ producto.producto }}</td>
        <td>{{ producto.stock }}</td>
        <td>${{ producto.precio }}</td>
        <td class="text-center">
          <input class="input col" v-model="stock[index]" :state="formState"/>
          <br />
          <button class="btn btn-info mt-2 col" @click.prevent="nuevoStock( producto._id, index )" v-if="stock[index]>0">
            Nuevo Stock
          </button>
          <div class="alert alert-danger col p-1 border-0 m-0" v-else v-show="( stock[index]!=null && stock[index]!='' )">Ingresar número positivo</div>
        </td>
        <td><button class="btn btn-success" @click="agregar(index)" :disabled="!producto.stock > 0">Agregar al carrito</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Carrito from './Carrito.vue'
export default {  
  name: "Home",
  components: {
    Carrito
  },
  data() {
    return {
      formData: this.getInitialData(),
      formState: {},
      stock: []
    };
  },
  mounted() {
    console.log("ApiRestFull -> mounted()");
    this.$store.dispatch('pedirProductos')
  },
  methods: {
    getInitialData() {
      return {
        stock: "",
      };
    },
    async nuevoStock(id, index) {
      console.log("Nuevo Stock id: " + id );
      let stockNuevo = {stock: this.stock[index]}
      
      try {
        let respuesta = await this.axios.put(this.$store.state.urlProductos + id, stockNuevo, {
          "content-type": "application/json",
        });

        console.log("AXIOS PUT PRODUCTOS", respuesta);
        this.$store.dispatch('pedirProductos')

      } catch (error) {
        console.error(error);
      }
    },
    agregar(index){
      console.log(index)
      let producto = this.$store.state.productos[index]
      this.$store.dispatch('agregar', producto)
    }
  },
};
</script>