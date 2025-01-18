import Butter, { ButterStatic } from 'buttercms';

let butter: ButterStatic;

try {
  butter = Butter(process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY as string)
}
catch (e) {
  console.log(e)
}

export const getMainMenu = () => {
    butter.page.retrieve('navigation_menu', 'main-menu')
    .then(function(resp) {
        console.log('main menu response', resp.data)
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