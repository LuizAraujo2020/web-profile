
async function fetchProfileData() {
    // const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json'

    const url = 'https://raw.githubusercontent.com/LuizAraujo2020/web-profile/main/data/profile.json?token=GHSAT0AAAAAACJHBYQKEYJOTUHULLGTKZ3AZJ645WQ'
    const fetching = await fetch(url)
    return await fetching.json()
}