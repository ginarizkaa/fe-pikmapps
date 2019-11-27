<template>
  <q-header elevated class="bg-header3">
    <q-toolbar class="bg-header3">
      <q-btn flat icon="img:statics/icon/back.png" @click="$router.go(-1)" />
      <p class="font3 fs2" style="margin-top:16px;color:#fddc0d">{{$route.params.title}}</p>
      <q-space />
      <img src="statics/icon/calender.png" height="40px" width="40px" style="bottom : 0px" />
    </q-toolbar>
  </q-header>
</template>