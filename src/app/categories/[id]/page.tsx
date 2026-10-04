import EntityProducts from "@/app/_components/EntityProducts/EntityProducts";

export default async function CategoryProducts({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <EntityProducts id={id} type="category" />;
}