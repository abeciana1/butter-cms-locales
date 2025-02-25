import Butter, { ButterStatic } from 'buttercms';

let butter: ButterStatic;

try {
  butter = Butter(process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY as string)
}
catch (e) {
  console.log(e)
}

type PageLookUpT = {
  [key: string]: string;
}

export const pageTypeLookup: PageLookUpT = {
  "blog": "custom_blog_page"
}

export const getNavMenu = (isPreview: string, modelName: string, slug: string, locale: string = 'en') => {
    return butter.page.retrieve(modelName, slug, {
      preview: isPreview === 'preview=1' ? 1 : 0,
      alt_media_text: 1,
      locale: locale
    } as any)
    .then(function(resp) {
        return resp.data
    })
    .catch(function(resp) {
        console.log(resp)
    });
}

export const getPageData = (isPreview: string, slug: string, pageType = '*', locale: string = 'en', abTestCookie: 'a' | 'b' | '' = 'a') => {
  const page = slug === `/${locale}` ? `homepage-${abTestCookie}` : slug.split(`/${locale}`)[slug.split(`/${locale}`)?.length - 1]
  const butterSlug = page.split('/')[2]
  return butter.page.retrieve(pageType, (butterSlug || page), {
    preview: isPreview === 'preview=1' ? 1 : 0,
    alt_media_text: 1,
    levels: 3,
    locale: locale,
    "fields.version": abTestCookie
  } as any)
  .then(function(resp) {
      return resp.data
  })
  .catch(function(resp) {
      console.log('resp', resp)
  });
}

export const collectionDataFetch = (modelName: string, page_size: number = 10, page: number = 1, locale: string = 'en') => {
  return butter.content.retrieve([modelName], {
    page_size: page_size,
    page: page,
    alt_media_text: 1,
    locale: locale
  } as any)
  .then(function(resp) {
      return resp?.data?.data
  })
  .catch(function(resp) {
      console.log(resp)
  });
}

export const personalizationDataFetch = (modelName: string, page_size: number = 10, page: number = 1, cookieTarget: string, locale: string = 'en') => {
  return butter.content.retrieve([modelName], {
    page_size: page_size,
    page: page,
    alt_media_text: 1,
    "fields.cookie_target": cookieTarget,
    locale: locale
  } as any)
  .then(function(resp) {
      return resp?.data?.data
  })
  .catch(function(resp) {
      console.log(resp)
  });
}

export const blogPostDataFetch = (isPreview: string, path: string) => {
  const blogPath = path.split("/post/")[1]
  return butter.post.retrieve(blogPath, {
    preview: isPreview === 'preview=1' ? 1 : 0
  })
    .then(function(resp) {
      return resp?.data?.data
    })
    .catch(function(resp) {
        console.log(resp)
    });
}

interface BlogEngineListI {
  page: number;
  page_size: number;
  exclude_body: boolean;
  category_slug: string;
}

export const blogEnginePostListFetch = (params: BlogEngineListI) => {
  return butter.post.list(params)
  .then(function(resp) {
    return resp?.data?.data
  }).catch(function(resp) {
    console.log(resp)
  });
}