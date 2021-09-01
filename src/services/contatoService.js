import { http } from './config'

export default {
    getContato:() => {
        return http.get('users')
    },
    deleteContato: (contato) => {
        return http.delete('deletar/' +contato)
    }
}