import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';
export default defineConfig({
  plugins: [react(), tsconfigPaths(), crossOriginIsolation()],
});
