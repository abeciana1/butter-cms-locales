
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

export interface BlogEngineTemplateDataI extends BlogEnginePostDataI {
    body: string;
    published: string;
    meta_description: string;
}