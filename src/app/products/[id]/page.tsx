import EntityProducts from "@/app/_components/EntityProducts/EntityProducts";

export default async function BrandProducts({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <EntityProducts id={id} type="brand" />;
}