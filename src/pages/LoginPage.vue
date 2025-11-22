<template>
  <q-page class="login-page flex flex-center">
    <div class="login-wrapper">
      <q-card flat bordered class="login-card">
        <!-- ENCABEZADO -->
        <q-card-section class="text-center">
          <q-icon name="pets" size="40px" class="q-mb-sm text-primary" />
          <div class="text-h5 text-weight-bold q-mb-xs">Iniciar sesión</div>
          <div class="text-caption text-grey-7">Ingresa para ver tus Digimons favoritos</div>
        </q-card-section>

        <q-separator spaced />

        <!-- MENSAJE DE ERROR -->
        <q-card-section v-if="error">
          <q-banner dense rounded class="bg-red-1 text-negative">
            {{ error }}
          </q-banner>
        </q-card-section>

        <!-- FORMULARIO -->
        <q-card-section class="q-gutter-md">
          <q-input
            v-model="email"
            type="email"
            label="Email"
            outlined
            dense
            clearable
            :rules="[(val) => !!val || 'Ingresa tu email']"
            prepend-inner-icon="email"
          />

          <q-input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Contraseña"
            outlined
            dense
            :rules="[(val) => !!val || 'Ingresa tu contraseña']"
            prepend-inner-icon="lock"
            :append-inner-icon="showPassword ? 'visibility_off' : 'visibility'"
            @click:append-inner="showPassword = !showPassword"
          />
        </q-card-section>

        <!-- BOTÓN -->
        <q-card-actions align="center" class="q-pb-lg q-pt-none">
          <q-btn
            label="INGRESAR"
            color="primary"
            unelevated
            class="full-width"
            :loading="loading"
            @click="login"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: 'guerrero@peru.com', // puedes dejarlo vacío si quieres
      password: '12345678', // solo para pruebas
      loading: false,
      error: '',
      showPassword: false,
    }
  },
  methods: {
    async login() {
      this.error = ''

      if (!this.email || !this.password) {
        this.error = 'Completa todos los campos.'
        return
      }

      this.loading = true
      try {
        const res = await axios.post('https://storedb-api.onrender.com/node-api/users/signin', {
          email: this.email,
          password: this.password,
        })

        // Si la API devuelve token, lo guardamos
        if (res.data && res.data.token) {
          localStorage.setItem('token', res.data.token)
        }

        // Redirigir a la página de Digimons
        this.$router.push('/digimons')
      } catch (err) {
        console.error(err)
        this.error = 'Email o contraseña incorrectos.'
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.login-page {
  background: linear-gradient(135deg, #1976d2, #42a5f5);
  min-height: 100vh;
}

.login-wrapper {
  width: 100%;
  max-width: 420px;
  padding: 16px;
}

.login-card {
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
}
</style>
