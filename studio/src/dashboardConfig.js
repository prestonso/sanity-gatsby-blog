export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc9414283025551eeb55d22',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-eayyxsvo',
                  apiId: '392927b4-2397-4f3f-a667-c47a7cad93b8'
                },
                {
                  buildHookId: '5fc941429d27013d3649c56a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hsqaonpn',
                  apiId: 'f06b0f7f-79db-4e60-a391-0da2e02774e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prestonso/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hsqaonpn.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
