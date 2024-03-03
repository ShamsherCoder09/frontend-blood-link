const config = {
    url:  `https://api.countrystatecity.in/v1/countries/IN/states`,
    key: `UXBoNUs4d25CSVlPTEhVZE1wVHVHYkFXUnQ1WVFNaVNCTHhsb1RJeg==`
}

export async function useCity(stateCode){
    const res = await fetch(`${config.url}/${stateCode}/cities`, {headers: {"X-CSCAPI-KEY": config.key}})
    const data = await res.json();
    return data
}