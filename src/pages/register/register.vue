<template>
  <q-card class="my-card">
    <q-card-section>
      <q-form class="q-gutter-md">
        <q-input rounded outlined label="Nama" />
        <q-input rounded outlined label="Nomor Telepon" />
        <q-input rounded outlined bg-color="grey-4"  label="Email" />
        <q-input rounded outlined label="Alamat" />
        <q-input rounded outlined label="Kode Pos" />
        <q-input rounded outlined label="Sekolah" />
        <q-input rounded outlined label="Tingkat" />
        <q-input rounded outlined label="Kelas" />
        <div>
            <q-btn unelevated class="btn-fixed-width" rounded color="grey-4" text-color="primary" size="md" label="Simpan" align="around" no-caps/>
</div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<style lang="stylus">
.my-card{
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 200px;
}
</style>
<script>
export default {



};
</script>
