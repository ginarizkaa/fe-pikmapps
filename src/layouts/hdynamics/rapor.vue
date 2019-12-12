<template>
  <q-header class="bg-global" >
    <q-toolbar class="bg-global">
      <q-btn flat icon="img:statics/icon/back1.png" style="margin-top:15px" @click="$router.go(-1)" />
      <p class="font3 fs2 blue" style="margin-top:31px;">{{$route.params.title}}</p>
      <q-space />
      <q-btn icon="trending_up" color="positive" style="margin-top:15px;margin-right:15px" label="Grafik" no-caps to="/grafik/Grafik"/>
    </q-toolbar>
  </q-header>
</template>