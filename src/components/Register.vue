<template>
  <vue-form
    :state="formState"
    @submit.prevent="crearCuenta"
    class="container border rounded mt-5"
  >
    <h2 class="text-center">Registrarse</h2>
    <validate tag="div">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        class="form-control"
        v-model.trim="formData.email"
        autocomplete="off"
        required
      />
      <field-messages name="email" show="$dirty">
        <div slot="required" class="alert alert-danger mt-1">
          Campo requerido
        </div>
        <div slot="email" class="alert alert-danger mt-1">Email inválido</div>
      </field-messages>
    </validate>

    <validate tag="div">
      <label for="contrasenia">Contraseña</label>
      <input
        type="text"
        id="contrasenia"
        name="contrasenia"
        class="form-control"
        v-model.trim="formData.contrasenia"
        autocomplete="off"
        required
        :minlength="contraseniaMinLength"
        :maxlength="contraseniaMaxLength"
      />
      <field-messages name="contrasenia" show="$dirty">
        <div slot="required" class="alert alert-danger mt-1">
          Campo requerido
        </div>
        <div slot="minlength" class="alert alert-danger mt-1">
          Requiere mínimo {{ contraseniaMinLength }} caracteres
        </div>
        <div
          v-if="formData.contrasenia.length == contraseniaMaxLength"
          class="alert alert-danger mt-1"
        >
          Máximo {{ contraseniaMaxLength }} caracteres
        </div>
      </field-messages>
    </validate>

    <validate tag="div">
      <label for="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        class="form-control"
        v-model.trim="formData.nombre"
        autocomplete="off"
        required
        :minlength="nombreMinLength"
        :maxlength="nombreMaxLength"
      />
      <field-messages name="nombre" show="$dirty">
        <div slot="required" class="alert alert-danger mt-1">
          Campo requerido
        </div>
        <div slot="minlength" class="alert alert-danger mt-1">
          Requiere mínimo {{ nombreMinLength }} caracteres
        </div>
        <div
          v-if="formData.nombre.length == nombreMaxLength"
          class="alert alert-danger mt-1"
        >
          Máximo {{ nombreMaxLength }} caracteres
        </div>
      </field-messages>
    </validate>

    <validate tag="div">
      <label for="apellido">Apellido</label>
      <input
        type="text"
        id="apellido"
        name="apellido"
        class="form-control"
        v-model.trim="formData.apellido"
        autocomplete="off"
        required
        :minlength="nombreMinLength"
        :maxlength="nombreMaxLength"
      />
      <field-messages name="apellido" show="$dirty">
        <div slot="required" class="alert alert-danger mt-1">
          Campo requerido
        </div>
        <div slot="no-espacios" class="alert alert-danger mt-1">
          No se permiten espacios intermedios
        </div>
        <div slot="minlength" class="alert alert-danger mt-1">
          Requiere mínimo {{ nombreMinLength }} caracteres
        </div>
        <div
          v-if="formData.apellido.length == nombreMaxLength"
          class="alert alert-danger mt-1"
        >
          Máximo {{ nombreMaxLength }} caracteres
        </div>
      </field-messages>
    </validate>

    <validate tag="div">
      <label for="edad">Edad</label>
      <input
        type="number"
        id="edad"
        name="edad"
        class="form-control"
        v-model.number="formData.edad"
        autocomplete="off"
        required
        :min="edadMin"
        :max="edadMax"
      />
      <field-messages name="edad" show="$dirty">
        <div slot="required" class="alert alert-danger mt-1">
          Campo requerido
        </div>
        <div slot="min" class="alert alert-danger mt-1">
          Edad mínima {{ edadMin }} años
        </div>
        <div slot="max" class="alert alert-danger mt-1">
          Edad máxima {{ edadMax }} años
        </div>
      </field-messages>
    </validate>

    <validate tag="div">
      <label for="direccion">Direccion</label>
      <input
        type="text"
        id="direccion"
        name="direccion"
        class="form-control"
        v-model.trim="formData.direccion"
        autocomplete="off"
        required
        :minlength="nombreMinLength"
        :maxlength="nombreMaxLength"
      />
      <field-messages name="direccion" show="$dirty">
        <div slot="required" class="alert alert-danger mt-1">
          Campo requerido
        </div>
        <div slot="minlength" class="alert alert-danger mt-1">
          Requiere mínimo {{ nombreMinLength }} caracteres
        </div>
        <div
          v-if="formData.direccion.length == nombreMaxLength"
          class="alert alert-danger mt-1"
        >
          Máximo {{ nombreMaxLength }} caracteres
        </div>
      </field-messages>
    </validate>

    <validate tag="div">
      <label for="altura">Altura</label>
      <input
        type="number"
        id="altura"
        name="altura"
        class="form-control"
        v-model.number="formData.altura"
        autocomplete="off"
        required
        :min="min"
      />
      <field-messages name="altura" show="$dirty">
        <div slot="required" class="alert alert-danger mt-1">
          Campo requerido
        </div>
        <div slot="min" class="alert alert-danger mt-1">
          Debe ser un numero mayor a 0
        </div>
      </field-messages>
    </validate>

    <div class="row container d-flex justify-content-around">
      <button class="btn btn-success my-3 col-3" :disabled="formState.$invalid">
        Crear Cuenta
      </button>
      <router-link to="/login" class="col-5 text-center my-4"
        >Ya tengo una cuenta</router-link
      >
    </div>
  </vue-form>
</template>

<script>
export default {
  name: "src-componentes-formulario",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInitialData(),
      formState: {},
      nombreMinLength: 3,
      nombreMaxLength: 15,
      contraseniaMinLength: 5,
      contraseniaMaxLength: 15,
      edadMin: 18,
      edadMax: 130,
      min: this.altura > 0,
      url: "https://6175e83903178d00173daa13.mockapi.io/clientes",
    };
  },
  computed: {},
  mounted() {
    
  },

  methods: {
    getInitialData() {
      return {
        email: "",
        contrasenia: "",
        nombre: "",
        apellido: "",
        edad: "",
        direccion: "",
        altura: "",
      };
    },

    async enviarDatosAlServidor(usuarios) {
      try {
        let respuesta = await this.axios.post(this.url, usuarios, {
          "content-type": "application/json",
        });
        let datosRecibidos = respuesta.data;
        console.log("datosRecibidos POST", datosRecibidos);
        this.pedirDatosAlServidor();
        alert(`Cuenta creada con exito, bienvenido ${datosRecibidos.nombre} ${datosRecibidos.apellido}`)
        this.$router.push("/");
      } catch (error) {
        console.error("Error en envío de datos del formulario", error);
      }
    },

    async pedirDatosAlServidor() {
      try {
        let respuesta = await this.axios(this.url);
        let usuarios = respuesta.data;
        console.log("datos GET", usuarios);
        this.usuarios = usuarios;
      } catch (error) {
        console.error("Error en recepción de datos del servidor", error);
      }
    },

    crearCuenta() {
      let cuenta = { ...this.formData }
      console.log(cuenta)
      this.enviarDatosAlServidor(cuenta)
      this.formData = this.getInitialData()
      this.formState._reset()
    },
  },
};
</script>

<style scoped>
</style>