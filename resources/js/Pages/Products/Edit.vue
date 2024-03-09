<template>
    <parent>
        <!-- Begin Page Content -->
        <div class="container-fluid">

            <div class="row">
                <div class="col">
                    <h3 class="mb-4">Edit Product</h3>
                </div>
                <div class="col text-right">
                    <Link class="btn btn-primary" href="/products">Back</Link>
                </div>
            </div>

            <form @submit.prevent="updateProduct()" class="p-4 card">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Enter product name here">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea v-model="form.description" class="form-control" id="description" placeholder="Enter product desc here"/>
                </div>
                
                <div class="form-group">
                    <label>Image</label>
                    <input type="file" accept="image/png, image/jpg, image/jpeg" class="form-control" @change="setImageInRequest">
                    <!-- <span class="text-danger" v-if="errors.logo">{{ errors.logo }}</span> -->
                </div>

                <div class="form-group" v-if="imagePreview">
                  <img :src="imagePreview" alt="Image" style="width: 150px; height: auto; border-radius: 1em; border: 1px dashed; padding: 5px;">
                </div>

                <hr>
                
                <div class="form-group">
                    <label for="role">Brand</label>
                    <select class="custom-select" id="dropdown" v-model="form.brand_id">
                        <option value="">-- Select Brand --</option>
                        <option v-for="option in dropdownOptions" :key="option.id" :value="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>
        <!-- /.container-fluid -->
    </parent>
</template>

<script>
import Parent from "../Parent.vue"

export default {
  components: {
    Parent
  },
  data() {
        return {
            dropdownOptions: {},
            imagePreview : (this.$page.props?.product?.path) ? "/" + this.$page.props?.product?.path : "",
            
            form: {
                id: this.$page.props.product.id,
                brand_id: this.$page.props.product.brand_id,
                name : this.$page.props.product.name,
                description : this.$page.props.product.description,
                path : this.$page.props.product.path,
            },
        }
    },

    methods: {
    updateProduct() {
      this.$inertia.post(route("products.update", { id: this.$page.props.product.id }), this.form);

    },
    setImageInRequest : function (e) {
        this.form.path = e.target.files[0]
        this.imagePreview = URL.createObjectURL(e.target.files[0]);
    }
  },
    mounted(){
        this.dropdownOptions = this.$page.props.dropdownOptions
    },
};
</script>
