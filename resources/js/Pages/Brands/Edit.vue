<template>
    
    <parent>
        <!-- Begin Page Content -->
        <div class="container-fluid">

          <div class="row">
              <div class="col">
                <h3 class="mb-4">Edit Brand</h3>
              </div>
              <div class="col text-right">
                <Link class="btn btn-primary" href="">Back</Link>
              </div>
            </div>

            <form @submit.prevent="updateBrand()" class="p-4 card">
                <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" v-model="form.name" class="form-control" id="name" aria-describedby="" placeholder="Enter brand name here">
                    <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                    <label for="">Description</label>
                    <textarea type="text" v-model="form.description" class="form-control" id="description" aria-describedby="" placeholder="Enter brand desc here" />
                    <span class="text-danger" v-if="errors.description">{{ errors.description }}</span>
                </div>

                 <div class="form-group">
                    <label>Logo</label>
                    <input type="file" accept="image/png, image/jpg, image/jpeg" class="form-control" @change="setLogoInRequest">
                    <span class="text-danger" v-if="errors.logo">{{ errors.logo }}</span>
                </div>
                <!-- <div class="form-group">
                    <label>Status:</label>
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-secondary">
                            {{ form.status === 'active' ? 'Deactivate' : 'Activate' }}
                        </button>
                    </div>
                </div> -->

                <div class="form-group" v-if="logoPreview">
                  <img :src="logoPreview" alt="logo" style="width: 150px; height: auto; border-radius: 1em; border: 1px dashed; padding: 5px;">
                </div>

                <hr>


                <button type="submit" class="btn btn-primary">Update</button>
            </form>

        </div>
        <!-- /.container-fluid -->
    </parent>
</template>

<script>
import Parent from "../Parent.vue"


export default {
  
  props: ["errors"],

  components: {
    Parent,
  },
  data() {
    return {
      logoPreview : (this.$page.props?.brand?.path) ? "/" + this.$page.props?.brand?.path : "",
      form: {
        id: this.$page.props.brand.id,
        name: this.$page.props.brand.name,
        description: this.$page.props.brand.description,
        logo : "", 
      },
    };
  },
  methods: {
    updateBrand() {
      this.$inertia.post(route("brands.update", { id: this.$page.props.brand.id }), this.form);
    },
    cancel() {
      // cancel function
    },

    setLogoInRequest : function (e) {
      this.form.logo = e.target.files[0]
      this.logoPreview = URL.createObjectURL(e.target.files[0]);
    }
  },
};
</script>