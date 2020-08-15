<script>

    import {db} from './firestore.js'
    export let id=""
    export let user ={}

    const deleteUser =()=>{
        db.collection('users').doc(id).delete()

        open=!open;
    }

</script>

    
    <input xs="1" sm="4"  type="number" bind:value={user.number}>
    <input  type="text" bind:value={user.name}>