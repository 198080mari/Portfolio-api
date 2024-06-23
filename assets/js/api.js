async function fetchProfileData() {  //fetch na url
    const url = '/assets/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()  //retorna convertido em json
}