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
                            <img :id="'brand-' + brand.id" :src="brand.image" alt="" class="brand rounded" style="width: 200px; height: auto;">
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
                            <img :id="'part-' + part.id" :src="'/images/' + part.name.toLowerCase() + '.jpg'" alt="" class="part rounded" style="width: 200px; height: auto;">
                            <h4 class="mt-3">{{ part.name }} - <b>€{{ part.agent_price }}</b></h4>
                        </div>
                    </div>
                    <div class="text-center">
                        <br><br><br> 
                        <h3 class="mb-4">Description</h3>
                        <textarea rows="5" class="form-control" placeholder="Enter order description here..." v-model="form.description" />
                    </div>

                    <div class="text-center">
                        <br><br><br> 
                        <h3 class="mb-4">Select Tax Option</h3>
                        <div class="form-check form-check text-left">
                            <input v-model="form.isTax" @change="checkPaymentOptions()" class="form-check-input" type="radio" name="taxOptions" id="withTax" value="yes">
                            <label class="form-check-label" for="withTax"><b>Payment With Tax</b></label>
                        </div>
                        <div class="form-check form-check text-left">
                            <input v-model="form.isTax" @change="checkPaymentOptions()" class="form-check-input" type="radio" name="taxOptions" id="withoutTax" value="no">
                            <label class="form-check-label" for="withoutTax"><b>Payment Without Tax</b></label>
                        </div>
                    </div>
                    
                    <div class="text-center">
                        <br><br><br> 
                        <h3 class="mb-4">Saved Addresses</h3>

                        <div class="form-check form-check text-left" v-for="address in $page.props.addresses">
                            <input v-model="form.address" class="form-check-input" type="radio" name="addressOptions" :id="'order' + address.id" :value="address.id">
                            <label class="form-check-label" :for="'order' + address.id"><b>{{address.title}}</b> | {{ address.address }} | Ph. {{ (address.phone) ?? "N/A" }}</label>
                        </div>
                        <div class="form-check form-check text-left">
                            <input v-model="form.address" class="form-check-input" type="radio" name="addressOptions" id="otherAddress" value="other">
                            <label class="form-check-label" for="otherAddress"><b>Other Address</b></label>
                        </div>
                    </div>

                    <div class="text-center" v-if="form.address == 'other'">
                        <textarea rows="5" class="form-control" placeholder="Enter address here..." v-model="form.address_text" />
                    </div>

                    <div class="text-left mt-5">
                        <h3 class="mb-3">Payment Method</h3>
                        <div class="form-check form-check">
                            <input v-model="form.payment_method" class="form-check-input" type="radio" name="paymentOptions" id="cash" value="Cash">
                            <label class="form-check-label" for="cash"><b>Cash On Delivery</b></label>
                        </div>
                        <div class="form-check form-check" v-if="form.isTax == 'yes'">
                            <input v-model="form.payment_method" class="form-check-input" type="radio" name="paymentOptions" id="card_on_delivery" value="Card On Delivery">
                            <label class="form-check-label" for="card_on_delivery"><b>Card On Delivery</b></label>
                        </div>
                        <div class="form-check form-check" v-if="form.isTax == 'yes'">
                            <input v-model="form.payment_method" class="form-check-input" type="radio" name="paymentOptions" id="card" value="Credit Card">
                            <label class="form-check-label" for="card"><b>Card Payment</b></label>
                        </div>
                    </div>
                    
                    <div class="text-left mt-5" :class="(form.payment_method == 'Credit Card') ? 'd-block' : 'd-none'">
                        <hr>

                        <div class="text-left mb-2">
                            <label><b>Card Holder Name</b></label>
                            <div class="form-group">
                                <input placeholder="Enter card holder name" v-model="form.card_holder_name" class="form-control" type="text" required>
                            </div>
                        </div>
                        
                        <div class="text-left mb-2">
                            <label><b>Card Holder Phone Number</b></label>
                            <div class="form-group">
                                <input placeholder="Enter card holder name" v-model="form.card_holder_phone_number" class="form-control" type="text" required>
                            </div>
                        </div>
                        
                        <div class="text-left mb-2">
                            <label><b>Card Information</b></label>
                            <div ref="card" style="border: 1px solid lightgray; padding: 0.7em; border-radius: 6px;"></div>
                            <span class="text-danger" v-if="cardErrorMessage">{{ cardErrorMessage }}</span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="text-left mt-3 col">
                        <h5 class="mb-3">Sub Total</h5>
                    </div>
                    <div class="text-right mt-3 col">
                        <h5 class="mb-3">€ {{ getPricing[2].toFixed(2) }}</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="text-left mt-0 col">
                        <h5 class="mb-3">Tax(%)</h5>
                    </div>
                    <div class="text-right mt-0 col">
                        <h5 class="mb-3">{{ getPricing[0] + "%" }}</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="text-left mt-0 col">
                        <h5 class="mb-3">Tax Amount</h5>
                    </div>
                    <div class="text-right mt-0 col">
                        <h5 class="mb-3">€ {{ getPricing[1].toFixed(2) }}</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="text-left mt-0 col">
                        <h5 class="mb-3">Grand Total</h5>
                    </div>
                    <div class="text-right mt-0 col">
                        <h5 class="mb-3">€ {{ getPricing[3].toFixed(2) }}</h5>
                    </div>
                </div>
    
                <div class="text-center mt-3">
                    <hr>
                    <button class="btn btn-primary btn-lg" :disabled="!(form.brand_id && form.product_id && form.parts.length && form.address) || btnDisabled" @click="createToken">Create Order</button>
                </div>
          </div>
  
        </div>
    </parent>
  </template>
  
  <script>
  import Parent from "../Parent.vue";
  import { loadStripe } from '@stripe/stripe-js'
  
  export default {
      components: {
        Parent
      },
      data() {
          return {
              brands: "",
              products: "",
              parts: "",
              form: {
                brand_id : "", 
                product_id : "", 
                parts : [],
                description : "",
                address : (this?.$page?.props?.addresses[0]?.id) ?? "other",
                address_text : "",
                cardToken : "",
                isTax : "yes",
                payment_method : "Credit Card",
                card_holder_name : this.$page.props.auth.user?.name,
                card_holder_phone_number : this.$page.props.auth.user?.mobile
              },
              stripe: null,
              card: null,
              cardErrorMessage: '',
              btnDisabled : false
          }
      },
  
      methods: {
          initializeStripe() {
            let _this = this;
            const stripePromise = loadStripe(_this.$page.props.pk)
            stripePromise.then((stripe) => {
                _this.stripe = stripe;
                _this.stripeLoaded = true
                let elements = _this.stripe.elements()
                _this.card = elements.create('card');
            });
          },
          createToken() {
            let _this = this;

            _this.btnDisabled = true;

            if (_this.form.payment_method != "Credit Card") {
                _this.saveOrders()
            }

            _this.cardErrorMessage = "";
            _this.stripe.createToken(_this.card).then(function(result) {
                if (result.error) {
                    _this.cardErrorMessage = (result?.error?.message) ?? "Payment cannot be made. Try again later.";
                    _this.btnDisabled = true;
                    return;
                }

                // console.log(JSON.stringify(result));
                // return;

                _this.form.cardToken = result.token.id;
                _this.saveOrders()
                
                _this.btnDisabled = false;
            });
          },
          saveOrders() {
            this.$inertia.post(route("agent.orders.save"), this.form);
          },
          selectBrand : function (brand) {
            this.form.brand_id = "";
            this.form.product_id = "";
            this.form.parts = [];

            this.products = "";
            this.parts = "";
            
            if (! $("#brand-" + brand.id).hasClass("active-item")) {
                $(".brand").removeClass("active-item");
                $("#brand-" + brand.id).addClass("active-item");

                this.form.brand_id = brand.id;
                this.products = brand.products;
            }
            else {
                $(".brand").removeClass("active-item");
            }
          },
          selectProduct : function (product) {
            this.form.product_id = "";
            this.form.parts = [];

            this.parts = "";

            if (! $("#product-" + product.id).hasClass("active-item")) {
                $(".product").removeClass("active-item");
                $("#product-" + product.id).addClass("active-item");

                this.form.product_id = product.id;
                this.parts = product.product_parts;

                let _this = this;

                setTimeout(() => {
                    _this.card.mount(this.$refs.card);
                }, 250);
            }
            else {
                $(".product").removeClass("active-item");
            }
          },
          selectPart : function (part) {
            if ($("#part-" + part.id).hasClass("active-item")) {
                $("#part-" + part.id).removeClass("active-item");
                this.form.parts = this.form.parts.filter(id => id !== part.id);
            }
            else {
                $("#part-" + part.id).addClass("active-item");
                if (!this.form.parts.includes(part.id)) {
                    this.form.parts.push(part.id);
                }
            }
          },
          checkPaymentOptions : function () {
            if (this.form.isTax == "no") {
                this.form.payment_method = "Cash"
            }
            else {
                this.form.payment_method = "Credit Card"
            }
          },
          filterPartsByIds : function (ids) {
                let parts = (this.parts && this.parts.length > 0) ? this.parts : [];
                return parts.filter(part => ids.includes(part.id));
            }
      },

      computed : {
        getPricing : function () {
            let taxPercentAge = 0;
            let taxAmount = 0;
            let subTotal = 0;
            let grandTotal = 0;

            if (this.form.isTax == "yes") {
                taxPercentAge = 21;
            }

            if (this.form.parts && this.form.parts.length > 0) {
                let parts = this.filterPartsByIds(this.form.parts);
                parts.forEach(part => {
                    subTotal = parseFloat(subTotal) + parseFloat(part.agent_price);
                });
            }

            if (subTotal > 0 && taxPercentAge > 0) {
                taxAmount = parseFloat(subTotal) * (parseInt(taxPercentAge) / 100);
            }

            grandTotal = parseFloat(subTotal) + parseFloat(taxAmount);

            return [
                taxPercentAge,
                taxAmount,
                subTotal,
                grandTotal,
            ];
        }
      },
  
      mounted() {
        this.brands = this.$page.props.brands;
        this.initializeStripe();
      }
  };
  </script>
  