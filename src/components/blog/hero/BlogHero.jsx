import BlogHeroContent from "./BlogHeroContent";
import useGetBlogHero from "../../../hooks/useGetBlogHero";
function BlogHero() {
  const { data, isLoading, isError, error } = useGetBlogHero();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((blogHero) => (
        <BlogHeroContent
          BlogHeroSubTitle={blogHero.subtitle}
          blogHeroImg={blogHero.image}
          blogHeroTitle={blogHero.title}
          id={blogHero.id}
          key={blogHero.id}
        />
      ))}
    </div>
  );
}

export default BlogHero;
