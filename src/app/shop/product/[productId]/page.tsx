import Product from "@/components/Product";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const page = ({ params }: { params: Params }) => {
  return (
    <>
      <Product
        productId={params?.productId}
        pathname={typeof window !== "undefined" ? window.location.pathname : ""}
      />
    </>
  );
};

export default page;
