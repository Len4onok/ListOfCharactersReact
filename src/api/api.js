import * as axios from "axios";


const instance=axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const charactersApi = {
     getCharacters(currentPage=1, searchValue='') {
         return instance.get(`people/?search=${searchValue}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    getCharacterById(currentPage=1, id) {
         return instance.get(`people/${id}/`)
            .then(response => {
                return response.data
            })
    }
}



