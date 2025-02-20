
interface BlogSeoI {
    title: string;
    description: string;
    open_graph_image: string;
}

interface BlogCategory {
    meta?: {
        id: string;
    };
    label: string;
}

export interface BlogPostDataI {
    slug: string;
    published: string;
    fields: {
        seo: BlogSeoI;
    };
    category: BlogCategory[];
}

export interface BlogEnginePostDataI {
    featured_image: string;
    seo_title: string;
    slug: string;
    summary: string;
}

export interface BlogEngineTemplateDataI {
    body: string;
    published: string;
    featured_image: string;
    seo_title: string;
}

export interface BlogPageSeoI {
    seo_title: string;
    featured_image: string;
    meta_description: string;
}

export interface BlogPageDataI {
    seo_title: string;
    featured_image: string;
    body: string;
    published: string;
}