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
                    <label for="name">Shop Name</label>
                    <input type="text" v-model="form.shop_name" class="form-control" id="name" placeholder="Enter shop name">
                    <!-- Display name validation errors -->
                    <div v-if="errors.shop_name" class="text-danger">{{ errors.shop_name }}</div>
                </div>

                <div class="form-group">
                    <label for="name">Shop Address</label>
                    <input type="text" v-model="form.shop_address" class="form-control" id="name" placeholder="Enter shop address">
                    <!-- Display name validation errors -->
                    <div v-if="errors.shop_address" class="text-danger">{{ errors.shop_address }}</div>
                </div>
                
                <div class="form-group">
                    <label for="name">Shop Landline #</label>
                    <input type="number" v-model="form.shop_landline" class="form-control" id="name" placeholder="Enter shop landline number">
                    <!-- Display name validation errors -->
                    <div v-if="errors.shop_landline" class="text-danger">{{ errors.shop_landline }}</div>
                </div>

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
        shop_name: "",
        shop_address: "",
        shop_landline: "",
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
