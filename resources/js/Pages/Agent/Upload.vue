<template>
    
    <parent>
        <!-- Begin Page Content -->
        <div class="container-fluid">
            
            <div class="row">
              <div class="col">
                <h3 class="mb-4">Upload Documents</h3>
                <p class="text-muted mb-4">Please upload PDF documents only.</p>
              </div>
              <div class="col text-right">
                <Link class="btn btn-primary" href="/agent/applications">Back</Link>
              </div>
            </div>

            <form @submit.prevent="saveApplication" class="p-4 card">
                <div class="form-group">
                    <label>NIE/DNI/CIF</label>
                    <input type="file" accept="application/pdf" class="form-control" @change="setNieRequest">
                    <div v-if="errors.nie" class="text-danger">{{ errors.nie }}</div>
                </div>

                <div class="form-group">
                    <label>MODELO 036/037</label>
                    <input type="file" accept="application/pdf" class="form-control" @change="setModelorequest">
                    <div v-if="errors.modelo" class="text-danger">{{ errors.modelo }}</div>
                </div>

                <div class="form-group">
                    <label>Other Documents</label>
                    <input type="file" accept="application/pdf" class="form-control" @change="setOtherRequest">
                </div>
                <hr>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">Upload</button>
                </div>
                
            </form>

        </div>
        <!-- /.container-fluid -->
    </parent>
</template>

<script>
import Parent from "../Parent.vue";

export default {

  props: ["errors"],

  components: {
    Parent,
  },

  data() {

    return {

      form: {
        nie: "",
        modelo: "",
        others: "",
      },

    };

  },

  methods: {
    setNieRequest : function (e) {
      this.form.nie = e.target.files[0]
    },
    setModelorequest : function (e) {
      this.form.modelo = e.target.files[0]
    },
    setOtherRequest : function (e) {
      this.form.others = e.target.files[0]
    },
    saveApplication() {
      this.$inertia.post(route("agent.application.save"), this.form);
    },
    
  },
};
</script>
