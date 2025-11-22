<template>
  <q-layout view="lHh Lpr lFf">
    <!-- CABECERA SENCILLA -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Digimon App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- AQUÍ SE RENDERIZAN LAS PÁGINAS -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>
