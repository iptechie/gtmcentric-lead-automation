
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1F2C]">
      <Helmet>
        <title>Page Not Found | GTMCentric</title>
        <meta name="description" content="The page you are looking for doesn't exist or has been moved." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="px-4 py-2 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
