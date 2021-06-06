import * as axios from "axios";


const instance=axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const charactersApi = {
     getCharacters(currentPage=1, countItemsOnPage=10) {
         return instance.get(`people/?page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    getCharacterById(currentPage=1, countItemsOnPage=10, id) {
         return instance.get(`people/${id}/`)
            .then(response => {
                return response.data
            })
    }
}



