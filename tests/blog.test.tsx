import { renderToStaticMarkup } from 'react-dom/server';
import BlogPage from '@/pages/blog';
import posts from '@/data/posts';

it('renders the published posts with links to their routes', () => {
  const markup = renderToStaticMarkup(<BlogPage />);
  expect(posts.length).toBeGreaterThan(0);
  for (const post of posts) {
    expect(markup).toContain(`href="/post/${post.slug}"`);
    expect(markup).toContain(post.title);
  }
});

it('keeps blog slugs unique and safe for a single URL segment', () => {
  const slugs = posts.map(post => post.slug);
  expect(new Set(slugs).size).toBe(slugs.length);
  for (const slug of slugs) {
    expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  }
});
