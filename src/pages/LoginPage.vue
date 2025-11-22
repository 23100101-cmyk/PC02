<template>
  <div class="q-pa-xl flex flex-center column">
    <q-card class="q-pa-md" style="width: 350px">
      <q-card-section>
        <div class="text-h6">Iniciar sesión</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="email" label="Email" type="email" outlined class="q-mb-md" />
        <q-input v-model="password" label="Contraseña" type="password" outlined />
        <div v-if="error" class="text-negative q-mt-sm text-caption">
          {{ error }}
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="Ingresar" :loading="loading" @click="login" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      error: '',
    }
  },
  methods: {
    async login() {
      this.loading = true
      this.error = ''

      try {
        const response = await axios.post(
          'https://storedb-api.onrender.com/node-api/users/signin',
          {
            email: this.email,
            password: this.password,
          },
        )

        // Aquí depende de qué devuelva la API,
        // normalmente viene un token o datos de usuario
        console.log('Respuesta login:', response.data)

        // Si trae token, lo guardas:
        if (response.data.token) {
          localStorage.setItem('token', response.data.token)
        }

        // Redirigir a la página de Digimons (o lo que toque)
        this.$router.push('/digimons')
      } catch (err) {
        console.error(err)
        this.error = 'Correo o contraseña incorrectos'
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
