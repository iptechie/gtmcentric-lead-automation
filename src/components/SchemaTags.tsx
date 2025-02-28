
import { Helmet } from "react-helmet-async";

interface SchemaTagsProps {
  softwareAppSchema: any;
  organizationSchema: any;
}

export const SchemaTags = ({ softwareAppSchema, organizationSchema }: SchemaTagsProps) => {
  return (
    <Helmet>
      <title>GTMCentric | AI-Powered Lead Management & Sales Automation Solution</title>
      <meta name="description" content="Automate lead tracking, boost conversions, and grow your business with GTMCentric's AI-powered lead management and sales automation solution." />
      <meta name="keywords" content="GTMCentric, lead management, sales automation, GTM strategy, AI sales tools, lead tracking, sales conversion, sales process optimization" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://gtmcentric.com" />
      
      {/* Language */}
      <meta property="og:locale" content="en_US" />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="GTMCentric | AI-Powered Lead Management & Sales Automation Solution" />
      <meta property="og:description" content="Automate lead tracking, boost conversions, and grow your business with GTMCentric's AI-powered lead management and sales automation solution." />
      <meta property="og:url" content="https://gtmcentric.com" />
      <meta property="og:site_name" content="GTMCentric" />
      <meta property="og:image" content="https://gtmcentric.com/og-image.png" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="GTMCentric | AI-Powered Lead Management & Sales Automation Solution" />
      <meta name="twitter:description" content="Automate lead tracking, boost conversions, and grow your business with GTMCentric's AI-powered lead management and sales automation solution." />
      <meta name="twitter:image" content="https://gtmcentric.com/og-image.png" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(softwareAppSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};
