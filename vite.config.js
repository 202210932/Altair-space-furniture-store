import { resolve } from 'path'
import { defineConfig } from 'vite'

const nested = resolve(__dirname, 'pages')
export default defineConfig({
  nested, 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutUs: resolve(nested, 'AboutUs.html'),
        addtocart: resolve(nested, 'addtocart.html'),
        contact: resolve(nested, 'Contact.html'),
        hmpage: resolve(nested, 'Hmpage.html'),
        login: resolve(nested, 'Login.html'),
        product: resolve(nested, 'Product.html'),
      },
    },
  },
})