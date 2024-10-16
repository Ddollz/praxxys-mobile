import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        products: [],
    }),
    actions: {
        addProduct(product) {
            product.quantityFinal = 1;
            product.holderPay = product.totalPay;
            this.products.push(product);
        },
        incrementQuantity(product) {
            let findProduct = this.products[product];
            if (findProduct) {
                if (findProduct.hasOwnProperty('quantityFinal')) {
                    findProduct.quantityFinal = findProduct.quantityFinal + 1;
                    findProduct.totalPay = findProduct.holderPay * findProduct.quantityFinal;
                }
                else {
                    findProduct.quantityFinal = 2;
                    findProduct.holderPay = findProduct.totalPay;
                    findProduct.totalPay = findProduct.holderPay * 2;
                }
            }
        },
        decrementQuantity(product) {
            let findProduct = this.products[product];
            if (findProduct && findProduct.quantityFinal > 1) {
                if (findProduct.hasOwnProperty('quantityFinal') ) {
                    findProduct.quantityFinal = findProduct.quantityFinal - 1;
                    findProduct.totalPay = findProduct.holderPay * findProduct.quantityFinal;
                }
                else {
                    findProduct.quantityFinal = 2;
                    findProduct.holderPay = findProduct.totalPay;
                    findProduct.totalPay = findProduct.holderPay * 2;
                }
            }
        },
    },
    getters: {
        getProductsLength: (state) => state.products.length,
        getProducts: (state) => state.products,
        getProductsTotalPay: (state) => {
            let total = 0;
            for (let i = 0; i < state.products.length; i++) {
                total += state.products[i].totalPay;
            }
            return total;
        },
    },
});