<template>
  <q-header elevated >
    <q-toolbar class="bg-header5">
      <q-btn flat icon="img:statics/icon/back2.png" @click="$router.go(-1)" />
      <p class="font3 fs2 blue" style="margin-top:16px;">{{$route.params.title}}</p>
      <q-space />
      <!-- <img src="statics/icon/calender.png" height="40px" width="40px" style="bottom : 0px" /> -->
      <a href="https://chat.whatsapp.com/FdVIkY6D2jl4M74PyhVxRb">
      <q-btn
        unelevated
        rounded
        color="red"
        label="Konsultasi"
        no-caps
      />
      </a>
    </q-toolbar>
  </q-header>