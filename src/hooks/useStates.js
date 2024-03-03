const config = {
    url:  `https://api.countrystatecity.in/v1/countries/IN`,
    key: `UXBoNUs4d25CSVlPTEhVZE1wVHVHYkFXUnQ1WVFNaVNCTHhsb1RJeg==`
}

export async function useStates(){
    const res = await fetch(`${config.url}/states`, {headers: {"X-CSCAPI-KEY": config.key}})
    const data = await res.json();
    return data
}