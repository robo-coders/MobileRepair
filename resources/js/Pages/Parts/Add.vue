<template>
    <parent>
        <!-- Begin Page Content -->
        <div class="container-fluid">

            <div class="row">
              <div class="col">
                <h3 class="mb-4">Create Part</h3>
              </div>
              <div class="col text-right">
                <Link class="btn btn-primary" href="/parts">View Products</Link>
              </div>
            </div>

            <form @submit.prevent="savePart()" class="p-4 card">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Enter product name here">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea type="text" v-model="form.description" class="form-control" id="description" placeholder="Enter product desc here"/>
                </div>
                <div class="form-group">
                    <label for="customer_price">Customer Price</label>
                    <input type="number" v-model="form.customer_price" class="form-control" id="customer_price" placeholder="Enter customer price">
                </div>
                <div class="form-group">
                    <label for="agent_price">Agent Price</label>
                    <input type="number" v-model="form.agent_price" class="form-control" id="agent_price" placeholder="Enter agent price">
                </div>
                
                <div class="form-group">
                    <label for="dropdown">Product</label>
                    <!-- is the below line correct ? as we getting product object -->
                    <select class="custom-select" id="dropdown" v-model="form.product_id">
                        <option value="" disabled>-- Select Product --</option>
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

  props: ["errors"],

  components: {
    Parent
  },
  data() {
        return {
            dropdownOptions: {},
            form: {
                id : "", 
                product_id: "",
                brand_id: "",
                name : "", 
                description : "", 
                customer_price : "", 
                agent_price : "", 
            },
        }
    },

    methods: {
    savePart() {
      this.$inertia.post(route("parts.save"), this.form);
    },
  },
    mounted() {
        this.dropdownOptions = this.$page.props.dropdownOptions;
    },
    watch: {
    'form.product_id': function(newVal, oldVal) {
      const selectedProduct = this.dropdownOptions.find(option => option.id === newVal);
      if (selectedProduct) {
        this.form.brand_id = selectedProduct.brand_id;
      }
    }
  }
};
</script>
