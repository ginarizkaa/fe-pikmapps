<template>
  <div>
    <div class="q-ma-md">
        <q-card class="card q-mt-md q-mb-md">
            <div class="row">
                <div class="col">
                    Cari Universitas
                </div>
                <div class="col-2" style="text-align:right">
                    <img src="statics/img/g2.png" height="43px" width="43px"  />
                </div>
                <div class="col-2">
                    <q-icon name="search" style="font-size: 43px;"/>
                </div>

            </div>
        </q-card>
        <q-card class="card q-mt-md q-mb-md">
        </q-card>
        <div style="text-align:right">
        <q-btn rounded class="font4" color="secondary" label="submit" style="width:40%;text-align:right" @click="sort2()"/>
        </div>
    </div>
    
  </div>
</template>
<style>
.card {
    height: 43px;
    background-color: #50e3c2
}
</style>