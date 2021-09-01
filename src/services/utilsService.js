
export default {
    alertSuccess(mensagem) {
        this.$toast.add({severity:'success', summary: mensagem, detail:'Order submitted', life: 3000});
    }
}

