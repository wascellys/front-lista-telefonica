<template>
     <div class="p-grid p-formgrid" style="margin-left:auto; margin-right:auto;">
            <div class="p-col-12 p-md-6">
        <Card >
            <template #title>
                Cadastro de Contatos
            </template>
            <template #content>
            <div class="p-fluid">
                <div class="p-field">
                    <label for="nome">Nome</label>
                    <InputText id="nome" type="text" />
                </div>
                <br>
                <div class="p-field">
                    <label for="sobrenome">Sobrenome</label>
                    <InputText id="sobrenome" type="text" />
                </div>
                <br>
                <div class="p-field">
                    <label for="telefone">Telefone</label>
                    <InputText id="telefone" type="number" />
                </div>
                <br>
                <Button label="Cadastrar" icon="pi pi-check" iconPos="right" />
            </div>
            
            </template>
        </Card>

        <br>                                                    
    </div>
     </div>
</template>

<script>



export default {     
    

    

    data () {                      
        return {
            contatos : {}, 
            display : false,
            selectedContato: null            
        }        
    },

    methods: {        
    },    
    
}
</script>
