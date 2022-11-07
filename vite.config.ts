import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { Vuetify3Resolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
    plugins: [
        vue(),
        laravel("config/vite.php"),
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
            resolvers: [Vuetify3Resolver()],
        }),
        Components({
            dirs: ["./resources/src"],
            dts: true,
            extensions: ["vue"],
            include: [/\.vue$/, /\.vue\?vue/],
            resolvers: [Vuetify3Resolver()],
        }),
    ],
});
