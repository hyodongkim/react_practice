import { defineConfig } from 'vite';
import refresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    build:{
        outDir:"build"
    },
    server:{
        port:3000,
        open:true
    },
    plugins:[refresh()]
});