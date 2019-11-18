<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-header1">
      <q-toolbar class="bg-header2">
        <img src="statics/icon/back.png" height="30px" width="30px" />
        <p class="font3 fs2 blue" style="margin-top:16px; margin-left: 15px">MODUL</p>
        <q-space />
        <img src="statics/icon/calender.png" height="40px" width="40px" style="bottom : 0px" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-footer">
      <div class="row" style="text-align:center">
        <div class="col">
          <q-btn flat icon="img:statics/icon/menu1.png" style="font-size: 1.5rem;" to="/" />
        </div>
        <div class="col">
          <q-btn flat icon="img:statics/icon/menu1.png" style="font-size: 1.5rem;" to="/" />
        </div>
        <div class="col">
          <q-btn flat icon="img:statics/icon/menu1.png" style="font-size: 1.5rem;" to="/" />
        </div>
        <div class="col">
          <q-btn flat icon="img:statics/icon/menu1.png" style="font-size: 1.5rem;" to="/" />
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>