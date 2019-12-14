<template>
  <q-header elevated class="bg-header7" >
    <q-toolbar class="bg-global">
      <q-btn flat icon="img:statics/icon/back1.png"  @click="$router.go(-1)" />
      <p class="font3 fs2 yellow" style="margin-top:16px;">{{$route.params.title}}</p>
    </q-toolbar>
  </q-header>
</template>