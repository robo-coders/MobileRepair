<template>
    <parent>
        <!-- Begin Page Content -->
        <div class="container-fluid">

            <div class="row">
                <div class="col">
                    <h3 class="mb-4">Create Product</h3>
                </div>
                <div class="col text-right">
                    <Link class="btn btn-primary" href="/products">View Products</Link>
                </div>
            </div>

            <form @submit.prevent="saveProduct()" class="p-4 card">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Enter product name here">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea type="text" v-model="form.description" class="form-control" id="description" aria-describedby="" placeholder="Enter product desc here" />
                </div>

                <div class="form-group">
                    <label>Image</label>
                    <input type="file" accept="image/png, image/jpg, image/jpeg" class="form-control" @change="setImageInRequest">
                    <!-- <span class="text-danger" v-if="errors.logo">{{ errors.logo }}</span> -->
                </div>

                <div class="form-group" v-if="imagePreview">
                  <img :src="imagePreview" alt="Prouct Image" style="width: 150px; height: auto; border-radius: 1em; border: 1px dashed; padding: 5px;">
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
                <button type="submit" class="btn btn-primary">Save</button>
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
            imagePreview : "",
            dropdownOptions: {},
            form: {
                brand_id: "",
                name : "", 
                description : "", 
                path : "", 
            },
        }
    },

    methods: {
        saveProduct() {
            this.$inertia.post(route("products.save"), this.form);
        },
        setImageInRequest : function (e) {
            this.form.path = e.target.files[0]
            this.imagePreview = URL.createObjectURL(e.target.files[0]);
        }
    },
    mounted() {
        this.dropdownOptions = this.$page.props.dropdownOptions;
    }
};
</script>
