<template>
  <div class="table-responsive mt-5">
    <table class="table container border border-light">
      <tr class="bg-success text-white">
        <th>Imagen</th>
        <th>Producto</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Ingresar Nuevo Stock</th>
      </tr>
      <tr
        class="bg-dark text-white"
        v-for="(producto, index) in productos"
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
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      formData: this.getInitialData(),
      formState: {},
      productos: [],
      url: "http://localhost:3000/api/productos/",
      stock: [],
    };
  },
  mounted() {
    console.log("ApiRestFull -> mounted()");
    this.pedirProductos();
  },
  methods: {
    getInitialData() {
      return {
        stock: "",
      };
    },
    async pedirProductos() {
      try {
        let respuesta = await this.axios(this.url);
        let productos = respuesta.data;
        console.log("datos GET", productos);
        this.productos = productos;
      } catch (error) {
        console.error("Error en recepción de datos del servidor", error);
      }
    },
    async nuevoStock(id, index) {
      console.log("Nuevo Stock id: " + id );
      let stockNuevo = {stock: this.stock[index]}
      
      try {
        let respuesta = await this.axios.put(this.url + id, stockNuevo, {
          "content-type": "application/json",
        });

        console.log("AXIOS PUT PRODUCTOS", respuesta);
        this.pedirProductos()

      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>