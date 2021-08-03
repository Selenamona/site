import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "link": "about/join_us.html"
    },
    'next': {
        "link": "about/usage.html"
    },
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "about/team.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/team.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': undefined,
    'contributors': [],
    'date': "2021-08-03T06:41:08.385Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'sidebar': [
        {
            "link": "docs/index.html",
            "children": [
                {
                    "link": "docs/introduction.html",
                    "pagePath": "docs/introduction.md"
                },
                {
                    "link": "docs/usage.html",
                    "pagePath": "docs/usage.md"
                }
            ],
            "pagePath": "docs/README.md",
            "text": "docs/README.md"
        },
        {
            "link": "about/index.html",
            "expanded": false,
            "children": [
                {
                    "link": "about/join_us.html",
                    "pagePath": "about/join_us.md"
                },
                {
                    "link": "about/team.html",
                    "pagePath": "about/team.md"
                },
                {
                    "link": "about/usage.html",
                    "pagePath": "about/usage.md"
                }
            ],
            "pagePath": "about/README.md",
            "text": "about/README.md"
        }
    ]
};
