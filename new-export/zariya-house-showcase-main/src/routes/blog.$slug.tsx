import { createFileRoute, notFound } from "@tanstack/react-router";
import { POSTS } from "./blog";
import { PageBanner, Breadcrumbs } from "@/components/layout/PageParts";
import { LuxButton } from "@/components/ui/lux-button";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | Zariya House Journal` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.image },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/blog/${loaderData.post.slug}` },
        ]
      : [{ title: "Article" }, { name: "robots", content: "noindex" }],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.post.slug}` }] : [],
  }),
  component: BlogDetail,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <div className="serif-display text-3xl">Article not found</div>
        <LuxButton href="/blog" variant="outline-gold" className="mt-6">Back to Journal</LuxButton>
      </div>
    </div>
  ),
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <PageBanner eyebrow={post.date} title={post.title} image={post.image} />
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Journal", href: "/blog" }, { label: post.title }]} />
      </div>
      <article className="mx-auto max-w-2xl px-6 py-8">
        <div className="serif-display text-2xl leading-relaxed text-charcoal">{post.excerpt}</div>
        <div className="gold-divider my-10" />
        <div className="space-y-6 text-charcoal/85 leading-relaxed">
          <p>
            The studio's rhythm is set by hands, not by clocks. A karigar leans in over the loupe, breathes shallow, and lets the stone find its bezel. This is the tempo of Zariya House — measured, unfailing, human.
          </p>
          <p>
            Whether the piece is a bridal choker whose completion marks the end of a season, or a minimal pendant meant to be worn every day of a life, the process is the same: sketch, mould, cast, set, finish, polish, present.
          </p>
          <p>
            We publish these notes so that the invisible work is a little less invisible — because when a piece finally reaches a hand, it should carry the memory of every hand that shaped it.
          </p>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center">
          <LuxButton href="/blog" variant="outline-gold">Read more field notes</LuxButton>
        </div>
      </article>
    </>
  );
}
