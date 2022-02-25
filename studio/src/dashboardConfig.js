export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6218c450f9afd4a98d38fcf5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-xb7q3vat",
                  apiId: "3d2fef5f-2c54-4ec9-b808-6dc736803c4c",
                },
                {
                  buildHookId: "6218c450b97c47b4947deecc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-xe7phyrj",
                  apiId: "54afe6f2-49ad-4c18-9bec-de72849fb7f8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/simon824695173/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-xe7phyrj.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
