const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js/init.js")
    .vue()
    .copy('node_modules/@mdi/font/fonts/', 'dist/fonts/')
    .postCss("resources/css/app.css", "public/css/init.css", [
        //
    ])
    .combine(
        [
            "public/css/init.css",
            "resources/js/app-assets/vendors/css/vendors-rtl.min.css",
            "resources/js/app-assets/css-rtl/bootstrap.css",
            "resources/js/app-assets/css-rtl/bootstrap-extended.css",
            "resources/js/app-assets/css-rtl/colors.css",
            "resources/js/app-assets/css-rtl/components.css",
            "resources/js/app-assets/css-rtl/themes/dark-layout.css",
            "resources/js/app-assets/css-rtl/themes/semi-dark-layout.css",
            "resources/js/app-assets/css-rtl/core/menu/menu-types/vertical-menu.css",
            "resources/js/app-assets/css-rtl/core/colors/palette-gradient.css",
            "resources/js/app-assets/css-rtl/pages/dashboard-ecommerce.css",
            "resources/js/app-assets/css-rtl/pages/card-analytics.css",
            "resources/js/app-assets/css-rtl/custom-rtl.css",
            "resources/js/assets/css/style-rtl.css",
            "resources/js/assets/css/style.css",
            "resources/js/app-assets/css/jquery_ui.css",
            "resources/js/app-assets/vendors/css/extensions/toastr.css",
            "resources/js/app-assets/css-rtl/plugins/extensions/toastr.css"
        ],
        "public/css/rtl/app.css"
    )
    .combine([
        "public/css/init.css",
        "resources/js/app-assets/vendors/css/vendors.min.css",
        "resources/js/app-assets/css/bootstrap.css",
        "resources/js/app-assets/css/bootstrap-extended.css",
        "resources/js/app-assets/css/colors.css",
        "resources/js/app-assets/css/components.css",
        "resources/js/app-assets/css/themes/dark-layout.css",
        "resources/js/app-assets/css/themes/semi-dark-layout.css",
        "resources/js/app-assets/css/core/menu/menu-types/vertical-menu.css",
        "resources/js/app-assets/css/core/colors/palette-gradient.css",
        "resources/js/app-assets/css/pages/dashboard-ecommerce.css",
        "resources/js/app-assets/css/pages/card-analytics.css",
        "resources/js/app-assets/css-rtl/custom-rtl.css",
        "resources/js/assets/css/style_en.css",
        "resources/js/assets/css/style.css",
        "resources/js/app-assets/css/jquery_ui.css",
        "resources/js/app-assets/vendors/css/extensions/toastr.css",
        "resources/js/app-assets/css-rtl/plugins/extensions/toastr.css"
    ],'public/css/app.css'
    )
    .combine(
        [
            "public/js/init.js",
            "resources/js/assets/js/flatpickr.js",
            "resources/js/app-assets/vendors/js/vendors.min.js",
            "resources/js/app-assets/js/core/app-menu.js",
            "resources/js/app-assets/js/core/app.js",
            "resources/js/app-assets/js/scripts/components.js",
            "resources/js/app-assets/vendors/js/extensions/toastr.min.js"
        ],
        "public/js/app.js"
    );
