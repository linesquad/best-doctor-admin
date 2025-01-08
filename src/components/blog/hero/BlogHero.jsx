import useGetHeroImage from "../../../hooks/useGetHeroImage";
import BlogHeroContent from "./BlogHeroContent";
function BlogHero() {
  const { data, isLoading, isError, error } = useGetHeroImage();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      {data.map((blogHero) => (
        <BlogHeroContent
          BlogHeroSubTitle={"Dreams of life remains till the heart beats"}
          blogHeroImg={blogHero.top_pic}
          blogHeroTitle={"Dreams of life remains till the heart beats"}
          id={blogHero.id}
          key={blogHero.id}
        />
      ))}
    </div>
  );
}

export default BlogHero;
