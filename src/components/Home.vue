<template>
  <div class="table-responsive mt-5">
    <table class="table container">
      <tr class="bg-success text-white">
        <th></th>
        <th>Producto</th>
        <th>Stock</th>
        <th>Precio</th>
        <th></th>
      </tr>
      <tr
        class="bg-dark text-white"
        v-for="(producto, index) in productos"
        :key="index"
      >
        <td>
          <img :src="producto.imagen" width="50" :alt="producto.producto" />
        </td>
        <td>{{ producto.producto }}</td>
        <td>{{ producto.stock }}</td>
        <td>${{ producto.precio }}</td>
        <td>
          <button class="btn btn-success">Comprar</button>
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
      productos: [],
      url: "http://localhost:3000/api/users/",
    };
  },
  mounted() {
    console.log("ApiRestFull -> mounted()");
    this.pedirProductos()
  },
  methods: {
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
  },
};
</script>