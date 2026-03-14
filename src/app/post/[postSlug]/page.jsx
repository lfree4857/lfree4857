import BlogDetail from '../../../sections/BlogDetail';

export default function PostPage({ params }) {
  // In Next.js, we can pass params to the client component or let it read them via useParams from next/navigation
  return <BlogDetail />;
}
