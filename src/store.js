import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productos: [],
        urlProductos: "http://localhost:3000/api/productos/",
        carrito: [],
    },
    actions: {
        async pedirProductos({ commit }) {
            try {
                let respuesta = await axios.get(this.state.urlProductos)
                let productos = respuesta.data
                commit('setProductos', productos)
            } catch (error) {
                console.error(error)
            }
        },
        buscarProducto({ commit }, producto) {
            console.log('Buscando coincidencias con: ' + producto)
            commit('buscar', producto)
        },
        agregar({ commit }, producto) {
            console.log('Agregando al carrito el producto: ' + producto)
            commit('add', producto)
        },
        eliminar({ commit }, index) {
            console.log('Eliminando elemento en la posicion: ' + index)
            commit('remove', index)
        },
        comprar({ commit }) {
            console.log('Elementos comprados: ' + this.state.carrito)
            commit('comprar')
        }
    },
    mutations: {
        setProductos(state, productos) {
            state.productos = productos
        },
        buscar(state, producto) {
            state.productos = state.productos.filter(p => {
                return p.producto.toLowerCase().includes(producto.toLowerCase())
            })
        },
        add(state, producto) {
            let prod = state.carrito.filter(p => {
                return p._id == producto._id
            })
            console.log('prod', prod)
            if (prod.length) {
                prod[0].cantidad += 1
            } else {
                producto.cantidad = 1
                state.carrito.push(producto)
            }
        },
        remove(state, index) {
            state.carrito.splice(index, 1)
        },
        comprar(state) {
            const usuario = {
                _id: localStorage.getItem("usuario_id"),
                nombre: localStorage.getItem("usuario_nombre"),
                apellido: localStorage.getItem("usuario_apellido"),
            }
            const respuesta = axios.post(state.urlProductos + "compra", { compras: state.carrito, usuario: usuario })
            state.carrito.splice(0, state.carrito.length)
            console.log(respuesta)
        }
    }
})
