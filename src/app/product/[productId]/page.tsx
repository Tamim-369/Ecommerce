import Product from "@/components/Product";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const page = ({ params }: Params) => {
  return (
    <>
      <Product productId={params?.productId} />
    </>
  );
};

export default page;
