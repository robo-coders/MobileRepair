<template>
    <div id="wrapper">

        <Sidebar />

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <Header />

                <slot />

            </div>


            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2024</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
    <!-- End of Content Wrapper -->
    </div>
</template>

<script>

import Sidebar from "./Partials/Sidebar.vue"
import Header from "./Partials/Header.vue"

export default {
    components : {
        Sidebar,
        Header
    }
}
</script>