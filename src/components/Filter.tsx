import ProductInterface from "@/types/productTypes";
import { getDiscountedPrice } from "@/utils/ProductUtils";
import { FaSearch } from "react-icons/fa";
import { MdManageSearch, MdOutlineManageSearch } from "react-icons/md";

const Filter = ({
  openFilter,
  makeFixed,
  setShopProducts,
  products,
  checkedFilter,
  setCheckedFilter,
  setCheckedOfferFilter,
  checkedOfferFilter,
  setProducts,
  allProducts,
}: {
  openFilter: boolean;
  makeFixed: boolean;
  setShopProducts: any;
  products: ProductInterface[];
  checkedFilter: string;
  setCheckedFilter: any;
  setCheckedOfferFilter: any;
  checkedOfferFilter: string;
  setProducts: any;
  allProducts: ProductInterface[];
}) => {
  const productFilter = async (type: string) => {
    if (type === "all") {
      await setShopProducts(allProducts);
      await setProducts(allProducts);
    }
    if (type === "lawToHigh") {
      await setProducts(
        products
          .filter((product: ProductInterface) => product.price > 0)
          .sort(
            (a: ProductInterface, b: ProductInterface) =>
              getDiscountedPrice(a.price, a.discount) -
              getDiscountedPrice(b.price, b.discount)
          )
      );
    }

    if (type === "highToLow") {
      await setProducts(
        products
          .filter((product: ProductInterface) => product.price > 0)
          .sort(
            (a: ProductInterface, b: ProductInterface) =>
              getDiscountedPrice(b.price, b.discount) -
              getDiscountedPrice(a.price, a.discount)
          )
      );
    }
    if (type === "bestSelling") {
      await setProducts(
        products
          .filter((product: ProductInterface) => product.price > 0)
          .sort((a: ProductInterface, b: ProductInterface) => b.sells - a.sells)
      );
    }
    if (type === "discount") {
      await setShopProducts(
        products.filter((product: ProductInterface) => product.discount >= 20)
      );
    }
    if (type == "bestPrice") {
      await setShopProducts(
        products.filter((product: ProductInterface) => product.discount >= 5)
      );
    }
  };
  return (
    <>
      <div
        className={`w-full  lg:w-3/12 min-h-56 ${
          openFilter ? "grid" : "hidden"
        } grid-cols-2 sticky lg:flex justify-center lg:flex-col  lg:justify-start items-center rounded-md border shadow-sm p-4 gap-2 min-[1024px]:${
          makeFixed ? "fixed top-32" : ""
        }`}
      >
        <div className="flex flex-col w-full justify-start items-center">
          <h1 className="w-full text-lg font-semibold text-black text-left border-b border-zinc-300 pb-[0.05rem]">
            Sort by
          </h1>
          <div className="flex gap-2 font-semibold text-black py-2 flex-col justify-start w-full items-center">
            <div className="flex gap-2 justify-start w-full items-center">
              <input
                type="radio"
                name=""
                id="all"
                className=" accent-primary h-4 w-4"
                onChange={() => {
                  productFilter("all");

                  setCheckedFilter("all");
                  setCheckedOfferFilter("all");
                }}
                checked={checkedFilter == "all" ? true : false}
              />
              <label htmlFor="all">All</label>
            </div>
            <div className="flex gap-2 justify-start w-full items-center">
              <input
                type="radio"
                name=""
                id="bestSelling"
                className=" accent-primary h-4 w-4"
                onChange={() => {
                  productFilter("bestSelling");

                  setCheckedFilter("bestSelling");
                }}
                checked={checkedFilter == "bestSelling" ? true : false}
              />
              <label htmlFor="bestSelling">Best Selling</label>
            </div>
            <div className="flex gap-2 justify-start w-full items-center">
              <input
                type="radio"
                name=""
                id="lowToHigh"
                className=" accent-primary h-4 w-4"
                onChange={() => {
                  productFilter("lawToHigh");

                  setCheckedFilter("lawToHigh");
                }}
                checked={checkedFilter == "lawToHigh" ? true : false}
              />
              <label htmlFor="lowToHigh">Low to high</label>
            </div>
            <div className="flex gap-2 justify-start w-full items-center">
              <input
                type="radio"
                name=""
                id="highToLow"
                className=" accent-primary h-4 w-4"
                onChange={() => {
                  productFilter("highToLow");

                  setCheckedFilter("highToLow");
                }}
                checked={checkedFilter == "highToLow" ? true : false}
              />
              <label htmlFor="highToLow">High to low</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:mt-0  w-full justify-start items-center">
          <h1 className="w-full text-lg font-semibold text-black text-left border-b border-zinc-300 pb-[0.05rem]">
            Price
          </h1>
          <form className="flex flex-col w-full justify-start items-start">
            <div className="flex lg:flex-row flex-col  gap-2 font-semibold text-black py-2 justify-center w-full items-center">
              <div className="w-full lg:w-6/12">
                <input
                  type="number"
                  className="py-2 px-3  w-full bg-zinc-100 focus:outline-none rounded-md"
                  name="low"
                  id="low"
                  placeholder="Lowest"
                  required
                />
              </div>
              <div className="w-full lg:w-6/12">
                <input
                  type="number"
                  className="py-2 px-3  w-full bg-zinc-100 focus:outline-none rounded-md"
                  name="high"
                  id="high"
                  placeholder="Highest"
                  required
                />
              </div>
            </div>
            <div className="w-full lg:w-2/12 lg:mb-2">
              <button
                type="submit"
                className="flex gap-1 text-white py-1 px-2  bg-primary rounded-md  justify-center items-center"
              >
                <span className="font-semibold lg:flex hidden">Filter</span>
                <span className="font-semibold lg:hidden flex">
                  Start filter
                </span>
                <MdOutlineManageSearch className="text-2xl" />
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full justify-start items-center">
          <h1 className="w-full text-lg font-semibold text-black text-left border-b border-zinc-300 pb-[0.05rem]">
            Offers
          </h1>
          <div className="flex flex-col gap-2 font-semibold text-black py-2 justify-center w-full items-center">
            <div className="flex gap-2 justify-start w-full items-center">
              <input
                type="radio"
                name=""
                id="exclusiveType"
                className=" accent-primary h-4 w-4"
                onChange={() => {
                  productFilter("bestPrice");

                  setCheckedFilter("bestPrice");
                }}
                checked={checkedFilter == "bestPrice" ? true : false}
              />
              <label htmlFor="exclusiveType">Best Price</label>
            </div>
            <div className="flex gap-2 justify-start w-full items-center">
              <input
                type="radio"
                name=""
                id="discountedType"
                className=" accent-primary h-4 w-4"
                onChange={() => {
                  productFilter("discount");

                  setCheckedFilter("discount");
                }}
                checked={checkedFilter == "discount" ? true : false}
              />
              <label htmlFor="discountedType">Discount</label>
            </div>
          </div>
        </div>
        {/* <div className="filter">2</div> */}
      </div>
    </>
  );
};

export default Filter;
