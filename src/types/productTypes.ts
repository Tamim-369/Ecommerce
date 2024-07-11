interface ProductInterface {
    _id: number;

    thumbnail: string;
    images: Array<string>;
    name: string;
    descripton:string;

    specification: string;
    about: string;
    price: number;
    category: string;
    discount: number;
    brand: string;
    type: string;
}

export default ProductInterface

