import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineConfig({
    plugins: [
        vue(),
        laravel("config/vite.php"),
        vuetify(),
        Icons({ compiler: "vue3", autoInstall: true }),
        AutoImport({
            imports: ["vue", "@vueuse/core"],
            dts: "./auto-imports.d.ts",
            include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
            dirs: [
                "./resources/src/**",
                "./resources/src",
                "./resources/src/components",
            ],
            vueTemplate: true,
            resolvers: [IconsResolver()],
        }),
        Components({
            dirs: ["./resources/src"],
            dts: true,
            extensions: ["vue"],
            include: [/\.vue$/, /\.vue\?vue/],
            resolvers: [],
        }),
    ],
});
