import { getPaginatedPosts } from '../lib/posts';
import moment from 'moment';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://www.imanol.work";
  let date = new Date().toISOString();
  const formatDate = "YYYY-MM-DD";
  date = moment(date).format(formatDate);

  const { posts } = await getPaginatedPosts();

  const staticPages = ["", "about", "blog", "projects"].map(
    (staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    }
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts
        .map((post) => {
          return `
            <url>
              <loc>${baseUrl}/${post?.slug}</loc>
              <lastmod>${moment(post?.modified).format(formatDate)}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${date}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;