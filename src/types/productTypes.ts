interface ProductInterface {
    _id: string;

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
    sells:number;
}

export default ProductInterface

