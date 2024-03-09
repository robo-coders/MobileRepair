<template>
  <parent>
    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <h3 class="mb-4">Create Orders</h3>
            </div>
            <div class="col text-right">
                <Link class="btn btn-primary" :href="route('agent.orders.index')">View Orders</Link>
            </div>
        </div>

        <form @submit.prevent="saveOrders()" class="p-4 card">
            <div class="form-group">
                <label for="dropdown">Choose Brand</label>
                <select class="custom-select" id="dropdown" v-model="form.id">
                    <option value="" disabled>-- Select Product --</option>
                    <option v-for="option in dropdownOptions" :key="option.id" :value="option.id">
                        {{ option.name }}
                    </option>
                </select>
            </div>  

            <div class="form-group">
                <label for="dropdown">Choose Product</label>
                <select class="custom-select" id="dropdown" v-model="form.id">
                    <option value="" disabled>-- Select Product --</option>
                    <option v-for="option in dropdownOptions" :key="option.id" :value="option.product_id">
                        {{ option.products[0].name}}
                    </option>
                </select>
            </div>  

            <div class="form-group">
                <label for="dropdown">Choose Product Part</label>
                <select class="custom-select" id="dropdown" v-model="form.id">
                    <option value="" disabled>-- Select Parts --</option>
                    <option v-for="option in dropdownOptions" :key="option.id" :value="option.product_part">
                        {{ option.products[0].product_parts[0].name}}
                    </option>
                </select>
            </div>  
            <button type="submit" class="btn btn-primary">Save</button>
        </form>

      </div>
  </parent>
</template>

<script>
import Parent from "../Parent.vue";

export default {

  components: {
    Parent,
  },
  data() {
    return {
        dropdownOptions: {},
        form: {
                id : "", 
            },
    }
  },

  methods: {
    saveOrders() {
      this.$inertia.post(route("agent.orders.save"), this.form);
    },
  },
  mounted() {
        this.dropdownOptions = this.$page.props.dropdownOptions;
    },
};
</script>
