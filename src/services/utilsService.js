
// export default {
//     notifySuccess: () => {
//         this.$toast.add({severity:'success', summary: 'Sucesso', detail: "mensagem", life: 3000});
//     },
//     notifyError: () => {
//         this.$toast.add({severity:'error', summary: 'Erro', detail: "mensagem", life: 3000});
//     }
// }


export default {
    notifySuccess:() => {
        return this.$toast.add({severity:'success', summary: 'Sucesso', detail: "mensagem", life: 3000});
    },    
}

