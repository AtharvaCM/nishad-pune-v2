import Category from './Category';

export default function Categories({ categories }: Readonly<{ categories?: Sanity.BlogCategory[] }>) {
  if (!categories?.length) return null;

  return (
    <ul>
      {categories.map((category) => (
        <li key={category._id}>
          <Category value={category} />
        </li>
      ))}
    </ul>
  );
}
