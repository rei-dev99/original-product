export default async function fetchCategories() {
  const res = await fetch("http://localhost:3001/categories", {
    cache: "no-store"
  });
  const categories = await res.json();

  return categories
}