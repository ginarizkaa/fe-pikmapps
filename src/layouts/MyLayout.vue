<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-footer">
        <div class="row" style="text-align:center">
          <div class="col">
            <q-btn flat icon="img:statics/icon/menu1.png" style="font-size: 1.5rem;" to="/mainmenu"/>
          </div>
          <div class="col">
            <q-btn flat icon="img:statics/icon/menu1.png" style="font-size: 1.5rem;" to="/mainmenu"/>
          </div>
          <div class="col">
            <q-btn flat icon="img:statics/icon/menu1.png" style="font-size: 1.5rem;" to="/mainmenu"/>
          </div>
          <div class="col">
            <q-btn flat icon="img:statics/icon/menu1.png" style="font-size: 1.5rem;" to="/mainmenu"/>
          </div>
        </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
