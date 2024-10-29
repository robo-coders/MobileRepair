<template>
    <parent>
        <!-- Begin Page Content -->
        <div class="container-fluid">

            <div class="row">
              <div class="col">
                <h3 class="mb-4">Edit Part</h3>
              </div>
              <div class="col text-right">
                <Link class="btn btn-primary" href="/parts">Back</Link>
              </div>
            </div>

            <form @submit.prevent="updatePart()" class="p-4 card">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Enter product name here">
                    <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea type="text" v-model="form.description" class="form-control" id="description" placeholder="Enter product desc here"/>
                    <span class="text-danger" v-if="errors.description">{{ errors.description }}</span>
                </div>
                <div class="form-group">
                    <label for="customer_price">Customer Price</label>
                    <input type="number" v-model="form.customer_price" class="form-control" id="customer_price" placeholder="Enter customer price">
                    <span class="text-danger" v-if="errors.customer_price">{{ errors.customer_price }}</span>
                </div>
                <div class="form-group">
                    <label for="agent_price">Agent Price</label>
                    <input type="number" v-model="form.agent_price" class="form-control" id="agent_price" placeholder="Enter agent price">
                    <span class="text-danger" v-if="errors.agent_price">{{ errors.agent_price }}</span>
                </div>

                <div class="form-group">
                    <label for="dropdown">Product</label>
                    <select class="custom-select" id="dropdown" v-model="form.product_id">
                        <option value="" disabled>-- Select Product --</option>
                        <option v-for="option in dropdownOptions" :key="option.id" :value="option.id">
                            {{ option.name }}
                        </option>
                    </select>
                    <span class="text-danger" v-if="errors.product_id">{{ errors.product_id }}</span>
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

  props: ["errors"],

  components: {
    Parent
  },
  data() {
        return {
            dropdownOptions: {},
            form: {
                id: this.$page.props.part.id,
                product_id: this.$page.props.part.product_id,
                brand_id: this.$page.props.part.brand_id,
                name : (this.$page.props.part && this.$page.props.part.name), 
                description : (this.$page.props.part && this.$page.props.part.description), 
                customer_price : (this.$page.props.part && this.$page.props.part.customer_price),
                agent_price : (this.$page.props.part && this.$page.props.part.agent_price),
            },
        }
    },

    methods: {
    updatePart() {
      this.$inertia.post(route("parts.update", { id: this.$page.props.part.id }), this.form);
    },
  },
    mounted() {
        this.dropdownOptions = this.$page.props.dropdownOptions;
    },
};
</script>
