import Link from "next/link";
import type { CategorySlug } from "@/lib/types";

type CategoryCardProps = {
  slug: CategorySlug;
  name: string;
  description: string;
  count: number;
};

export function CategoryCard({ slug, name, description, count }: CategoryCardProps) {
  return (
    <Link className="category-card" href={`/categories/${slug}`}>
      <span className="category-count">{count} quizzes</span>
      <h3>{name}</h3>
      <p>{description}</p>
    </Link>
  );
}
