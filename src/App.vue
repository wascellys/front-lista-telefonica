<template>
<Menubar :model="items"  />

  <router-view />
</template>



<script>

export default {         
    data() {
        return {
            items: [
                {
                    label: 'Cadastro', icon: 'pi pi-fw pi-user-plus',   
                     to: '/cadastro'                                     
                },
                {
                    label: 'Contatos', icon: 'pi pi-fw pi-users',                    
                    to: '/contatos'  
                },                
            ]
        }
    }      
}
</script>

<style lang="css">
    body {
        margin:0px;        
    }    
</style>
