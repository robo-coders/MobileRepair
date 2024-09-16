<template>
    <parent>
        <!-- Begin Page Content -->
        <div class="container-fluid text-center">

            <img src="images/logo.png" class="w-25" alt="">

            <!-- Page Heading -->
            <h1 class="h3 mt-5 mb-4 text-gray-800">Welcome to {{ $page.props.auth.user.role }} Dashboard</h1>

            <p>Reparapido is your go-to online portal for quick and convenient mobile repair services. With just a few clicks, you can schedule a repair technician to visit your doorstep and fix your phone on the spot. Our skilled professionals handle a wide range of issues, from screen replacements to battery fixes, ensuring your device is up and running in no time. Enjoy the ease of hassle-free repairs without leaving your home. Reparapido brings reliable, fast, and efficient mobile repair services directly to you.</p>

        </div>
        <!-- /.container-fluid -->
    </parent>
</template>

<script>
import Parent from "./Parent.vue"

export default {
    components : {
        Parent
    }    
}
</script>