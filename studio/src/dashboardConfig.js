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
                    "60a4b6b61c325270e81bc160",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-yxmo7p7n",
                  apiId: "f96885ce-bba6-4fd4-a309-81da10beb7ab",
                },
                {
                  buildHookId: "60a4b6b688010f60c66e8862",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-gr696ovw",
                  apiId: "f2f2a634-fa54-460f-9cc2-fcbc42493867",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ThomasLaukkanen/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-gr696ovw.netlify.app",
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
