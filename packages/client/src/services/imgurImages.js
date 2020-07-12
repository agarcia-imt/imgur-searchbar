const baseUrl = 'https://api.imgur.com/3/gallery';
// const apiToken = '06cc6583ade1284525a31cf21555cc757a6c7a87'

// const myHeaders = new Headers();
// myHeaders.append('Authorization', `Bearer ${apiToken}`)

const myHeaders = new Headers();
myHeaders.append('Authorization', 'Client-ID fb18bb38fa5f8a5');

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// const myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer 06cc6583ade1284525a31cf21555cc757a6c7a87");

    // const requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow'
    // };

    // fetch("https://api.imgur.com/3/gallery/hot/viral/day/?", requestOptions)
    //   .then(response => response.json())
    //   // .then(result => console.log(result))
    //   .then(imgurResponse => this.setState({ posts: imgurResponse.data, isFetch: false }))
    //   .catch(error => console.log('error', error));
    // console.log(await getHotImages());

export const getHotImages = async () => {
  const response = await fetch(`${baseUrl}/hot/viral/day/?`, requestOptions);
  const responseJson = await response.json();
  return responseJson
}

// const myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer 06cc6583ade1284525a31cf21555cc757a6c7a87");

    // const requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow'
    // };

    // fetch(`https://api.imgur.com/3/gallery/search/?q=${q}`, requestOptions)
    //   .then(response => response.json())
    //   .then(imgurResponse => this.setState({ posts: imgurResponse.data }))
    //   .catch(error => console.log('error', error));

export const getSearchImages = async (q) => {
  const response = await fetch(`${baseUrl}/search/?q=${q}`, requestOptions);
  const responseJson = await response.json();
  return responseJson
}

export default {
  getHotImages,
  getSearchImages
}
