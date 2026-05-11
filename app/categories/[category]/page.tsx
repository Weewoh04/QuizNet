import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { QuizCard } from "@/components/QuizCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, categoryMap } from "@/data/categories";
import { getQuizzesByCategory } from "@/lib/quiz";
import type { CategorySlug } from "@/lib/types";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const item = categoryMap.get(category as CategorySlug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.name} Quizzes`,
    description: item.description,
    openGraph: {
      title: `${item.name} Quizzes`,
      description: item.description
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const item = categoryMap.get(category as CategorySlug);

  if (!item) {
    notFound();
  }

  const categoryQuizzes = getQuizzesByCategory(item.slug);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Category"
          title={`${item.name} quizzes`}
          description={item.description}
        />
        <AdSlot variant="top-banner" />
        {categoryQuizzes.length ? (
          <div className="quiz-grid">
            {categoryQuizzes.map((quiz) => (
              <QuizCard key={quiz.slug} quiz={quiz} />
            ))}
          </div>
        ) : (
          <div className="prose-card">
            <p>New quizzes for this category are coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
