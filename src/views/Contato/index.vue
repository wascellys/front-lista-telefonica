<template>
    <div class="p-shadow-21">    
        <Toast />
        <Card>
            <template #title>
                Contatos
            </template>
            <template #content>
            <div>
                <div>
                    <DataTable :value="contatos" responsiveLayout="scroll">                        
                        <Column header="Nome">
                            <template #body="{data}">
                                {{data.nome}} {{data.sobrenome}}
                            </template></Column>
                        <Column field="telefone" header="Telefone"></Column>
                        <Column headerStyle="width:6rem" >
                            <template #body>
                                <Button icon="pi pi-pencil" class="p-button-sm p-button-rounded" @click="editarContato"/>    
                            </template>                            
                        </Column>
                        <Column headerStyle="width:6rem" >
                            <template #body="{data}">
                                <Button icon="pi pi-trash" class="p-button-danger p-button-sm p-button-rounded" @click="openModal(data)"/>
                            </template>                            
                        </Column>                                                
                    </DataTable>                    
                </div>
            </div>
            </template>
        </Card>

        <br>                                    
        
        <Dialog header="Confirmação" v-model:visible="display" :style="{width: '350px'}" :modal="true">
            <div class="confirmation-content">                
                <span> Deseja remover o contato <b>{{selectedContato.nome}} {{selectedContato.sobrenome}}</b> ?</span>
            </div>
            <template #footer>
                <Button label="Cancelar" icon="pi pi-times" @click="closeModal" class="p-button"/>
                <Button label="Deletar" icon="pi pi-check" @click="deleteContato(selectedContato)" class="p-button p-button-danger" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import contatoService from '../../services/contatoService'


export default {     
    created() {        
        this.getContatos()                     
    },

    mounted (){        
        
    },

    data () {                      
        return {
            contatos : {}, 
            display : false,
            selectedContato: null,                    
        }        
    },

    methods: {

        getContatos() {
            contatoService.getContato().then((response) => {
            this.contatos = response.data
            }) 
        }, 
        
        openModal(contato)
        {                        
            this.display = true   
            this.selectedContato = contato            
        },        
        closeModal ()
        {                        
            this.display = false
        },
        deleteContato (contato)
        {                            
            contatoService.deleteContato(contato.id)
            .then(() => {              
                this.display = false                  
                this.notifySuccess("Contato excluído com sucesso!")                  
                this.getContatos()                
            }).catch(() => {
                this.display = false  
                this.notifyError('Erro ao deletar o contato!')
            })          
        },

        editarContato()
        {                                 
            this.notifySuccess("Contato Editado")
            this.notifyError("Contato Editado")
            this.notifyInfo("Contato Editado")
                        
        },

        notifySuccess(mensagem) {
            this.$toast.add({severity:'success', summary: 'Sucesso', detail:mensagem, life: 3000});
        },
        notifyError(mensagem) {
            this.$toast.add({severity:'error', summary: 'Sucesso', detail:mensagem, life: 3000});
        },
        notifyInfo(mensagem) {
            this.$toast.add({severity:'info', summary: 'Sucesso', detail:mensagem, life: 3000});
        },
    },    
    
}
</script>
