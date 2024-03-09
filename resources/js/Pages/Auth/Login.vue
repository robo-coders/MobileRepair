<script>
export default {
    data () {
        return {
            invalidCredentials : false,
            errorMessage : "Invalid Login Credentials.",
            loginForm : {
                email: '',
                password: ''
            }
        }
    },
    methods : {
        login : function () {
            let _this = this;
            _this.invalidCredentials = false;
            _this.errorMessage = "";

            let config = {
                method: 'post',
                url: '/login',
                data : this.loginForm
            };

            axios.request(config)
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                _this.invalidCredentials = true;
                _this.errorMessage = (error?.response?.data?.message) ?? "Invalid Login Credentials";
            });

        }
    }
}
</script>

<template>
    <div class="container bg-primary">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                {{loginForm.email}}

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-imagee"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        <div class="alert alert-danger" v-if="invalidCredentials">
                                            {{ errorMessage }}
                                        </div>
                                    </div>
                                    <form @submit.prevent="login" class="user">
                                        <div class="form-group">
                                            <input type="email" v-model="loginForm.email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." required>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="loginForm.password" type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" required>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">Login</button>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>
