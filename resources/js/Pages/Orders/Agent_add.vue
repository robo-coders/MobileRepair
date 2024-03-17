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

        <div class="p-5 card">
            <div class="text-center">
                <h3>Select Brand</h3>
                <div class="row mt-4">
                    <div class="col-4 m-auto" v-for="brand in brands" :key="brand.id" @click="selectBrand(brand)">
                        <img :id="'brand-' + brand.id" :src="'/' + brand.path" alt="" class="brand rounded" style="width: 200px; height: auto;">
                        <h4 class="mt-3">{{ brand.name }}</h4>
                    </div>
                </div>
            </div>

            <div class="text-center mt-3" v-if="products">
                <br><br><br>
                <h3>Select Product</h3>
                <div class="row mt-4">
                    <div class="col-4 m-auto" v-for="product in products" :key="product.id" @click="selectProduct(product)">
                        <img :id="'product-' + product.id" :src="'/' + product.path" alt="" class="product rounded" style="width: 200px; height: auto;">
                        <h4 class="mt-3">{{ product.name }}</h4>
                    </div>
                </div>
            </div>

            <div class="text-center mt-3" v-if="parts && parts.length">
                <br><br><br>
                <h3>Select Part</h3>
                <div class="row mt-4">
                    <div class="col-4 m-auto" v-for="part in parts" :key="part.id" @click="selectPart(part)">
                        <img :id="'part-' + part.id" :src="'/images/' + part.name + '.jpg'" alt="" class="part rounded" style="width: 200px; height: auto;">
                        <h4 class="mt-3">{{ part.name }}</h4>
                    </div>
                </div>
                <div class="text-center">
                    <br><br><br> 
                    <h3 class="mb-4">Description</h3>
                    <textarea rows="5" class="form-control" placeholder="Enter order description here..." v-model="form.description" />
                </div>
            </div>

            <div class="text-center mt-3" v-if="form.brand_id && form.product_id && form.part_id">
                <hr>
                <button class="btn btn-primary btn-lg" @click="saveOrders">Create Order</button>
            </div>
        </div>

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
            brands: "",
            products: "",
            parts: "",

            form: {
                brand_id : "", 
                product_id : "", 
                part_id : "",
                description : "",
            },
        }
    },

    methods: {
        saveOrders() {
            this.$inertia.post(route("agent.orders.save"), this.form);
        },
        selectBrand : function (brand) {
            if (brand.id != this.form.brand_id) {
                this.form.product_id = "";
                this.form.part_id = "";

                this.products = "";
                this.parts = "";
                
                $(".brand").removeClass("active-item");
                $("#brand-" + brand.id).addClass("active-item");
    
                this.form.brand_id = brand.id;
                this.products = brand.products;
            }
        },
        selectProduct : function (product) {
            if (product.id != this.form.product_id) {
                this.parts = "";
                this.form.part_id = "";
                
                $(".product").removeClass("active-item");
                $("#product-" + product.id).addClass("active-item");
    
                this.form.product_id = product.id;
                this.parts = product.product_parts;
            }
        },
        selectPart : function (part) {
            if (part.id != this.form.part_id) {
                $(".part").removeClass("active-item");
                $("#part-" + part.id).addClass("active-item");
    
                this.form.part_id = part.id;
            }
        }
    },

    mounted() {
        this.brands = this.$page.props.brands;
    },
};
</script>
