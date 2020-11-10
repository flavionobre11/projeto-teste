import { http } from './config'

export default {
    listar:() => {
        return http.get('funcionario')
    },

    salvar:(funcionario) =>{
        return http.post('funcionario', funcionario)
    },

    atualizar:(funcionario) => {
        return http.put('funcionario/{funcionario:_id}', funcionario)
    },

    deletar:(funcionario) => {
        return http.delete('funcionario/{funcionario:_id}', { data:funcionario })
    }
}