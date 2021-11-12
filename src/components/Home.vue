<template>
  <div class="table-responsive mt-5">
    <table class="table container border border-light">
      <tr class="bg-success text-white">
        <th>Imagen</th>
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
        <td>
          <input class="input" />
          <br />
          <button class="btn btn-info mt-2" @click="nuevoStock(producto._id)">
            Nuevo Stock
          </button>
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
      url: "http://localhost:3000/api/productos/",
      stock: 14
    };
  },
  mounted() {
    console.log("ApiRestFull -> mounted()");
    this.pedirProductos();
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
    async nuevoStock(id) {
      console.log("Nuevo Stock: " + id );

      try {
        let respuesta = await this.axios.put(this.url + id, {
          "content-type": "application/json",
        });

        let user = respuesta.data;
        console.log("AXIOS PUT USUARIOS", user);

        let index = this.usuarios.findIndex((usuario) => {
          console.log(usuario.id, user.id);
          return usuario.id == user.id;
        });
        //https://www.w3schools.com/jsref/jsref_splice.asp
        this.usuarios.splice(index, 1, user);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>