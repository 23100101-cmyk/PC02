<template>
  <div class="q-pa-xl flex flex-center column">
    <q-card class="q-pa-md" style="width: 350px;">
      <q-card-section>
        <div class="text-h6">Iniciar Sesión</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="email" label="Email" />
        <q-input v-model="password" type="password" label="Password" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="Ingresar" @click="login" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const login = async () => {
      try {
        const res = await axios.post(
          "https://storedb-api.onrender.com/node-api/users/signin",
          {
            email: email.value,
            password: password.value
          }
        );

        localStorage.setItem("token", res.data.token);

        router.push("/digimons");
      } catch (err) {
        console.error(err);
        alert("Credenciales incorrectas");
      }
    };

    return { email, password, login };
  }
};
</script>
