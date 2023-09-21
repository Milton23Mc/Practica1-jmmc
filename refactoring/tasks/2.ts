// class Product {
//     id: number;
//     name: string;
//     price: number;

//     constructor(id: number, name: string, price: number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
// }

// class Cart {
//     products: Product[] = [];

//     addProduct(product: Product) {
//         this.products.push(product);
//     }

//     calculateTotal(): number {
//         let total = this.products.reduce((acc, product) => acc + product.price, 0);

//         // Descuento: 10% si hay más de 5 productos
//         if (this.products.length > 5) {
//             total *= 0.9;
//         }

//         // Envío: $10 si la compra es menor a $50
//         if (total < 50) {
//             total += 10;
//         }

//         return total;
//     }
// }



class Product {
    constructor(public id: number, public name: string, public price: number) {}
}

class Cart {
    products: Product[] = [];

    constructor(public discountThreshold: number = 5, public shippingCostThreshold: number = 50) {}

    addProduct(product: Product) {
        this.products.push(product);
    }

    calculateTotal(): number {
        let totalPrice = this.products.reduce((acc, product) => acc + product.price, 0);

        // Aplicar descuento si se supera el umbral
        if (this.products.length > this.discountThreshold) {
            totalPrice *= 0.9;
        }

        // Agregar costo de envío si el total es inferior al umbral
        if (totalPrice < this.shippingCostThreshold) {
            totalPrice += 10;
        }

        return totalPrice;
    }
}

// Ejemplo de uso
const cart = new Cart(); // Puedes pasar valores personalizados para los umbrales aquí
cart.addProduct(new Product(1, "Producto 1", 20));
cart.addProduct(new Product(2, "Producto 2", 30));
cart.addProduct(new Product(3, "Producto 3", 40));
cart.addProduct(new Product(4, "Producto 4", 10));
cart.addProduct(new Product(5, "Producto 5", 15));
cart.addProduct(new Product(6, "Producto 6", 25));

const total = cart.calculateTotal();
console.log(`El total de la compra es: $${total}`);
