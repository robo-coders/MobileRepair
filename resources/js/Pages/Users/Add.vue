<template>
    <parent>
        <!-- Begin Page Content -->
        <div class="container-fluid">

            <div class="row">
              <div class="col">
                <h3 class="mb-4">Create User</h3>
              </div>
              <div class="col text-right">
                <Link class="btn btn-primary" href="/users">View Users</Link>
              </div>
            </div>

            <form @submit.prevent="saveUser()" class="p-4 card">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Enter name">
                    <!-- Display name validation errors -->
                    <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Enter email">
                    <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
                </div>
                <div class="form-group">
                    <label for="mobile">Mobile</label>
                    <input type="number" v-model="form.mobile" class="form-control" id="mobile" placeholder="Enter mobile">
                    <div v-if="errors.mobile" class="text-danger">{{ errors.mobile }}</div>
                </div>
                <div class="form-group">
                    <label for="role">Role</label>
                    <select v-model="form.role" class="form-control" id="role">
                        <option value="">-- Select User Type --</option>
                        <option value="Admin">Admin</option>
                        <option value="Agent">Agent</option>
                        <option value="Driver">Driver</option>
                        <option value="Customer">Customer</option>
                    </select>
                    <div v-if="errors.role" class="text-danger">{{ errors.role }}</div>
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
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
            form: {
                name: '',
                email: '',
                mobile: '',
                role: ''
            }
        }
    },
    methods: {
        saveUser() {
            this.$inertia.post(route("users.save"), this.form);
        }
    }
};
</script>