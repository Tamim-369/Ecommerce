export function getDiscountedPrice(mainPrice:number,discount:number) {

    return (mainPrice * (100 - discount)) / 100

}