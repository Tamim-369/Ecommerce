import ProductInterface from "@/types/productTypes";

export function getDiscountedPrice(mainPrice:number,discount:number) {

    return (mainPrice * (100 - discount)) / 100

}

export function getProductUsingID(id:string, products:ProductInterface[]){

    return products.find((product:ProductInterface) => product._id === id)
}