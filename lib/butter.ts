import Butter, { ButterStatic } from 'buttercms';

let butter: ButterStatic;

try {
  butter = Butter(process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY as string)
}
catch (e) {
  console.log(e)
}

export const getMainMenu = (isPreview: string) => {
    return butter.page.retrieve('navigation_menu', 'main-menu', {
      preview: isPreview === 'preview=1' ? 1 : 0,
      alt_media_text: 1
    })
    .then(function(resp) {
        return resp.data
    })
    .catch(function(resp) {
        console.log(resp)
    });
}

export const getPageData = (isPreview: string, slug: string) => {
  const page = slug === '/' ? 'homepage' : slug.split('/')[1]
  return butter.page.retrieve('*', page, {
    preview: isPreview === 'preview=1' ? 1 : 0,
    alt_media_text: 1,
    levels: 3
  })
  .then(function(resp) {
      return resp.data
  })
  .catch(function(resp) {
      console.log(resp)
  });
}

export const collectionDataFetch = (modelName: string, page_size: number = 10, page: number = 1) => {
  return butter.content.retrieve([modelName], {
    page_size: page_size,
    page: page,
    alt_media_text: 1,
  })
  .then(function(resp) {
      return resp?.data?.data
  })
  .catch(function(resp) {
      console.log(resp)
  });
}