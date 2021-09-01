<template>
<Message severity="success">Bem-vindo ao PrimeVue</Message>
    <div class="p-shadow-21">
        <Card>
            <template #title>
                Contatos
            </template>
            <template #content>
            <div>
                <div>
                    <DataTable :value="contatos" responsiveLayout="scroll" selectionMode="single">                        
                        <Column header="Nome">
                            <template #body="{data}">
                                {{data.nome}}
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
                <span> Deseja remover o contato <b>{{selectedContato.nome}}</b> ?</span>
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
import utilsService from '../../services/utilsService'
import { useToast } from "primevue/usetoast"


export default {
    name : "Contatos",            

    created() {        
        contatoService.getContato().then((response) => {
            this.contatos = response.data
        })                
        this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
    },

    mounted (){
        console.log("MONTOU")
        const toast = useToast()
        toast.add({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
    },

    data () {                      
        return {
            contatos : {}, 
            display : false,
            selectedContato: null            
        }        
    },

    methods: {
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
                utilsService.alertSuccess('Contato deletado!')
            }).catch(() => {
                this.display = false  
                utilsService.alertSuccess('Erro ao deletar o contato!')
            })          
        },

        editarContato()
        {
            console.log("CLICOU")            
            this.$toast.add({
                severity:'success', 
                summary: 'Success Message', 
                detail:'Order submitted', 
                life: 3000});            
        }
    },    
    
}
</script>
