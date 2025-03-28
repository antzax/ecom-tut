import ProductDetail from "@/components/ProductDetail";
import { stripe } from "@/lib/stripe";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });
  return <ProductDetail product={product} />;
}
