/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: "192.168.1.152", // Specify your desired IP address

    port: 3000, // Replace with your desired port number
  },
});
