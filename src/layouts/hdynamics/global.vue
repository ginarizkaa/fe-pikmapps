<template>
  <q-header class="bg-global" >
    <q-toolbar class="bg-global">
      <q-btn flat icon="img:statics/icon/back1.png" style="margin-top:15px" @click="$router.go(-1)" />
      <p class="font3 fs2 blue" style="margin-top:31px;">{{$route.params.title}}</p>
    </q-toolbar>
  </q-header>
</template>