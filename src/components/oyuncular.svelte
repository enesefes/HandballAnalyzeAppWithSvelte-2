<svelte:head>
	<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/css/uikit.min.css" />

<!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/js/uikit-icons.min.js"></script>
</svelte:head>

<script>
    import {db} from "./firestore.js";
    import User from "./oyuncu.svelte"
    
    
let users=[]
let name=""
let number=0;



db.collection('users').orderBy('created').onSnapshot( data => {
        users = data.docs
    })

    const addUser =()=>{
     const created = new Date().getTime();
        

     db.collection('users').add({ created, email, number })
     
     name=''
     number=''
     
 }
</script>


<!--#######################-->

    <h1 class="uk-heading-bullet">Oyuncu Ekleme Zamanı!</h1>
<p class="uk-heading-bullet">Oyuncu ekleme zamanı buraya takımnda ki oyuncuları ekleyebilirsin.</p>
    <div class="uk-text-center" uk-grid>
    
        <div class="uk-width-1">
            <div class="uk-card uk-card-default uk-card-body">
        
         <form class="uk-form-horizontal uk-margin-large" on:submit|preventDefault={addUser}>

                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input class="uk-input uk-form-width-large" type="text" bind:value={name} placeholder="Oyuncu adı soyadı">
                    </div>
                </div>
        <div class="uk-margin">
            <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: info"></span>
                <input class="uk-input uk-form-width-large" type="number" bind:value={number} placeholder="Oyuncu Numarası">
            </div>
        </div>
            <button class="uk-button uk-button-secondary uk-width-1-1" >Ekle</button>


        </form>

        </div>
    </div>
</div>
<div class="uk-child-width-expand@s" uk-grid>
<ul class="uk-list uk-list-striped">
    <li>Enes EFE
        <button class="uk-button uk-button-danger uk-button-small">Sil</button>
        <button class="uk-button uk-button-primary uk-button-small">Güncelle</button>
    </li>
    <li>Gizem Gök
        <button class="uk-button uk-button-danger uk-button-small">Sil</button>
        <button class="uk-button uk-button-primary uk-button-small">Güncelle</button>
    </li>
    <li>İsmet Kızıl
        <button class="uk-button uk-button-danger uk-button-small">Sil</button>
        <button class="uk-button uk-button-primary uk-button-small">Güncelle</button>
    </li>
</ul>
<ul class="uk-list uk-list-striped">
    <li>Enes EFE</li>
    <li>Gizem Gök</li>
    <li>İsmet Kızıl</li>
</ul>
</div>
            {#each users as user}
                  <User id={user.id} user={user.data()} />
            {/each}




<!--#######################-->