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
    // try {
    //     const response = butter?.page?.retrieve('navigation_menu', 'main-menu')
    
    //     console.log('getMainMenu response', response)
    //   }
    //   catch (e) {
    //     throw e.response.data.detail
    //   }
}