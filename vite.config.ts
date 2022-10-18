import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
    plugins: [
        vue(),
        laravel("config/vite.php"),
        Components({
            dts: true,
            dirs: 'resources/src/components'
        })
    ],
});
