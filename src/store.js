import { reactive } from 'vue'

export const store = reactive({
    urlApi: 'https://api.openbrewerydb.org/v1/breweries?by_country=scotland',
    srString: ''
});