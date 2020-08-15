<svelte:head>
	<title>Oyuncu analiz</title>
</svelte:head>

<script>

	let duzMGol=0;
	let duzMkaleci=0;	
	let duzMaut=0;
	let duzMdirek=0;	
	let duzMblok=0;	

	let altiMGol=0;
	let altiMkaleci=0;
	let altiMaut=0;
	let altiMdirek=0;
	let altiMblok=0;
	
	let yediMGol=0;
	let yediMkaleci=0;
	let yediMaut=0;
	let yediMdirek=0;
	let yediMblok=0;

	let yedidokuzMGol=0;
	let yedidokuzMkaleci=0;
	let yedidokuzMaut=0;
	let yedidokuzMdirek=0;
	let yedidokuzMblok=0;

	let dokuzMGol=0;
	let dokuzMkaleci=0;
	let dokuzMaut=0;
	let dokuzMdirek=0;
	let dokuzMblok=0;


	let hizliMGol=0;
	let hizliMkaleci=0;
	let hizliMaut=0;
	let hizliMdirek=0;
	let hizliMblok=0;

	let duz=false;
	let alti=false;
	let yedi=false;
	let yedidokuz=false;
	let dokuz=false;
	let hizli=false;
	let oyuncular=false;
	let bolge=false;
	
	function altiGol(){
		altiMGol +=1;
		alti=false;
	}
	function altiKaleci(){
		altiMkaleci +=1;
		alti=false;

	}
	function altiAut(){
		altiMaut +=1;
		alti=false;

	}
	function altiDirek(){
		altiMdirek +=1;
		alti=false;

	}
	function altiBlok(){
		altiMblok +=1;
		alti=false;

	}

	function duzGol (){
		duzMGol +=1;
		duz=false;
	}
	function duzKaleci (){
		duzMkaleci +=1;
		duz=false;
	}
	function duzAut (){
		duzMaut +=1;
		duz=false;
	}
	function duzDirek (){
		duzMdirek +=1;
		duz=false;
	}
	function duzBlok (){
		duzMblok +=1;
		duz=false;
	}
	
	function yediGol (){
		yediMGol +=1;
		yedi=false;
	}
	function yediKaleci (){
		yediMkaleci +=1;
		yedi=false;
	}
	function yediAut (){
		yediMaut +=1;
		yedi=false;
	}
	function yediDirek (){
		yediMdirek +=1;
		yedi=false;
	}
	function yediBlok (){
		yediMblok +=1;
		yedi=false;
	}

	function yedidokuzGol(){
		yedidokuzMGol +=1;
		yedidokuz=false;
	}
	function yedidokuzKaleci(){
		yedidokuzMkaleci +=1;
		yedidokuz=false;

	}
	function yedidokuzAut(){
		yedidokuzMaut +=1;
		yedidokuz=false;

	}
	function yedidokuzDirek(){
		yedidokuzMdirek +=1;
		yedidokuz=false;

	}
	function yedidokuzBlok(){
		yedidokuzMblok +=1;
		yedidokuz=false;

	}

	function dokuzGol(){
		dokuzMGol +=1;
		dokuz=false;
	}
	function dokuzKaleci(){
		dokuzMkaleci +=1;
		dokuz=false;
	}
	function dokuzAut(){
		dokuzMaut +=1;
		dokuz=false;
	}
	function dokuzDirek(){
		dokuzMdirek +=1;
		dokuz=false;
	}
	function dokuzBlok(){
		dokuzMblok +=1;
		dokuz=false;
	}
	function hizliGol(){
		hizliMGol +=1;
		hizli=false;

	}
	function hizliKaleci(){
		hizliMkaleci +=1;
		hizli=false;

	}
	function hizliAut(){
		hizliMaut +=1;
		hizli=false;

	}
	function hizliDirek(){
		hizliMdirek +=1;
		hizli=false;

	}
	function hizliBlok(){
		hizliMblok +=1;
		hizli=false;

	}
	function duzac(){
		duz=true;
		bolge=false
	}
	function altiac(){
		alti=true;
		bolge=false

	}
	function yediac(){
		bolge=false
		yedi=true;
	}
	function yedidokuzac(){
		bolge=false
		yedidokuz = true;
	}
	function dokuzac(){
		bolge=false
		dokuz = true;
	}
	function hhac(){
		bolge=false
		hizli = true;
	}
	
	
	function bas (){
		oyuncular=true;
	}
	
	function bolgeler(){
		bolge=true;
		oyuncular=false;
	}

	let key;
	let keyCode;
	

	function handleKeydown(event) {
		key = event.key;
		keyCode = event.keyCode;
		if (keyCode==13){
			oyuncular=true;
		}
		else oyuncular=false;
		if (keyCode>48 && keyCode<55 && keyCode!=81 && duz!=true){
			bolge=true;
			oyuncular=false;
		}
		
		if (keyCode==81 && bolge==true ){
			duz=true;
			bolge=false;
		}
		if (keyCode==8){
			duz=false;
			
		}
		if (keyCode==17 && duz==true){
			duzMGol+=1;
			duz=false;			
		} else if (keyCode==17 && alti==true){
			altiMGol +=1;
			alti=false;
		}
		if (keyCode==38 && duz==true){
			duzMkaleci+=1;
			duz=false;

			
		} else if (keyCode==38 && alti==true){
			altiMkaleci +=1;
			alti=false;
		}
		if (keyCode==37 && duz==true){
			duzMblok+=1;
			duz=false;			
		} else if (keyCode==37 && alti==true){
			altiMblok +=1;
			alti=false;
		}
		if (keyCode==39 && duz==true){
			duzMaut+=1;
			duz=false;			
		} else if ( keyCode==39 && alti==true){
			altiMaut +=1;
			alti=false;
		}
		if (keyCode==40 && duz==true){
			duzMdirek+=1;
			duz=false;			
		} else if (keyCode==40 && alti==true){
			altiMdirek +=1;
			alti=false;
		}
		if (keyCode==87 && bolge==true ){
			alti=true;
			bolge=false;
		}
	}
</script>
{#if duz==false}
	<p>duz gözükmüyor</p>

{/if}
<svelte:window on:keydown={handleKeydown}/>
<div class="uk-inline">
    
		<span uk-icon="info"></span>
	
    <div uk-drop="mode: click">
		<div class="uk-card uk-card-body uk-card-default">Bu bölümde analizler yapabilir. Parametreler kısmında kullanmak istediğin
		parametreleri seçebilirsin.
		</div>
	</div>
</div>
	


<table class="uk-table uk-table-hover">

	<thead>
		<tr>
			<th>İsim Soyisim</th>
			<th>Düz Gol</th>
			<th>Düz Kaleci</th>
			<th>Düz Aut</th>
			<th>Düz Direk</th>
			<th>Düz Blok</th>
			<th>6M Gol</th>
			<th>6M Kaleci</th>
			<th>6M Aut</th>
			<th>6M Direk</th>
			<th>6M Blok</th>
			<th>7M Gol</th>
			<th>7M Kaleci</th>
			<th>7M Aut</th>
			<th>7M Direk</th>
			<th>7M Blok</th>
			<th>7-9M Gol</th>
			<th>7-9M Kaleci</th>
			<th>7-9M Aut</th>
			<th>7-9M Direk</th>
			<th>7-9M Blok</th>
			<th>9M Gol</th>
			<th>9M Kaleci</th>
			<th>9M Aut</th>
			<th>9M Direk</th>
			<th>9M Blok</th>
			<th>HH Gol</th>
			<th>HH Kaleci</th>
			<th>HH Aut</th>
			<th>HH Direk</th>
			<th>HH Blok</th>
			<th>Pas Hatası</th>
			<th>Top Kaybı</th>

		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Enes EFE</th>
			<th>{duzMGol}</th>
			<th>{duzMkaleci}</th>
			<th>{duzMaut}</th>
			<th>{duzMdirek}</th>
			<th>{duzMblok}</th>
			<th>{altiMGol}</th>
			<th>{altiMkaleci}</th>
			<th>{altiMaut}</th>
			<th>{altiMdirek}</th>
			<th>{altiMblok}</th>
			<th>{yediMGol}</th>
			<th>{yediMkaleci}</th>
			<th>{yediMaut}</th>
			<th>{yediMdirek}</th>
			<th>{yediMblok}</th>
			<th>{yedidokuzMGol}</th>
			<th>{yedidokuzMkaleci}</th>
			<th>{yedidokuzMaut}</th>
			<th>{yedidokuzMdirek}</th>
			<th>{yedidokuzMblok}</th>
			<th>{dokuzMGol}</th>
			<th>{dokuzMkaleci}</th>
			<th>{dokuzMaut}</th>
			<th>{dokuzMdirek}</th>
			<th>{dokuzMblok}</th>
			<th>{hizliMGol}</th>
			<th>{hizliMkaleci}</th>
			<th>{hizliMaut}</th>
			<th>{hizliMdirek}</th>
			<th>{hizliMblok}</th>

		</tr>
	</tbody>

</table>
<div class="uk-child-width-1-2" uk-grid>
    <div>
        <div class="uk-inline uk-dark">
            <img src="saha.png" alt="" on:click={bas}>
			{#if oyuncular == true && duz==false && alti==false && yedi==false && yedidokuz == false && dokuz==false && hizli==false}
			<button class="uk-position-absolute uk-transform-center" style="left: 12%; top: 10%" uk-marker on:click="{bolgeler }">1</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 19%; top: 10%" uk-marker on:click="{bolgeler}" >2</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 26%; top: 10%" uk-marker on:click="{bolgeler}" >3</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 33%; top: 10%" uk-marker on:click="{bolgeler}" >4</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 40%; top: 10%" uk-marker on:click="{bolgeler}" >5</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 47%; top: 10%" uk-marker on:click="{bolgeler}" >6</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 54%; top: 10%" uk-marker on:click="{bolgeler}" >7</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 61%; top: 10%" uk-marker on:click="{bolgeler}" >8</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 68%; top: 10%" uk-marker on:click="{bolgeler}" >9</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 75%; top: 10%" uk-marker on:click="{bolgeler}" >10</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 83%; top: 10%" uk-marker on:click="{bolgeler}" >11</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 13%; top: 30%" uk-marker on:click="{bolgeler}" >12</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 20%; top: 30%" uk-marker on:click="{bolgeler}" >13</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 27%; top: 30%" uk-marker on:click="{bolgeler}" >14</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 34%; top: 30%" uk-marker on:click="{bolgeler}" >15</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 41%; top: 40%" uk-marker on:click="{bolgeler}" >16</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 49%; top: 40%" uk-marker on:click="{bolgeler}" >17</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 57%; top: 40%" uk-marker on:click="{bolgeler}" >18</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 65%; top: 40%" uk-marker on:click="{bolgeler}" >19</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 73%; top: 40%" uk-marker on:click="{bolgeler}" >20</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 81%; top: 40%" uk-marker on:click="{bolgeler}" >21</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 89%; top: 40%" uk-marker on:click="{bolgeler}" >22</button>
			
			{/if}
			{#if duz == true}
			<button class="uk-position-absolute uk-transform-center" style="left: 11%; top: 30%" uk-marker on:click="{duzGol}" >Gol</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 11%; top: 20%" uk-marker on:click="{duzKaleci}" >Kaleci</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 20%; top: 30%" uk-marker on:click="{duzAut}" >Aut</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 11%; top: 40%" uk-marker on:click="{duzDirek}" >Direk</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 2%; top: 30%" uk-marker on:click="{duzBlok}" >Blok</button>
			{/if}
			{#if alti == true}
			<button class="uk-position-absolute uk-transform-center" style="left: 16%; top: 76%" uk-marker on:click="{altiGol}" >Gol</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 16%; top: 66%" uk-marker on:click="{altiKaleci}" >Kaleci</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 25%; top: 76%" uk-marker on:click="{altiAut}" >Aut</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 16%; top: 86%" uk-marker on:click="{altiDirek}" >Direk</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 7%; top: 76%" uk-marker on:click="{altiBlok}" >Blok</button>
			{/if}
			{#if yedi == true}
			<button class="uk-position-absolute uk-transform-center" style="left: 20%; top: 50%" uk-marker on:click="{yediGol}" >Gol</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 20%; top: 40%" uk-marker on:click="{yediKaleci}" >Kaleci</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 29%; top: 50%" uk-marker on:click="{yediAut}" >Aut</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 20%; top: 60%" uk-marker on:click="{yediDirek}" >Direk</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 11%; top: 50%" uk-marker on:click="{yediBlok}" >Blok</button>
			{/if}
			{#if yedidokuz == true}
			<button class="uk-position-absolute uk-transform-center" style="left: 25%; top: 34%" uk-marker on:click="{yedidokuzGol}" >Gol</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 25%; top: 24%" uk-marker on:click="{yedidokuzKaleci}" >Kaleci</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 34%; top: 34%" uk-marker on:click="{yedidokuzAut}" >Aut</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 25%; top: 44%" uk-marker on:click="{yedidokuzDirek}" >Direk</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 16%; top: 34%" uk-marker on:click="{yedidokuzBlok}" >Blok</button>
			{/if}
			{#if dokuz == true}
			<button class="uk-position-absolute uk-transform-center" style="left: 40%; top: 60%" uk-marker on:click="{dokuzGol}" >Gol</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 40%; top: 50%" uk-marker on:click="{dokuzKaleci}" >Kaleci</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 49%; top: 60%" uk-marker on:click="{dokuzAut}" >Aut</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 40%; top: 70%" uk-marker on:click="{dokuzDirek}" >Direk</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 31%; top: 60%" uk-marker on:click="{dokuzBlok}" >Blok</button>
			{/if}
			{#if hizli == true}
			<button class="uk-position-absolute uk-transform-center" style="left: 45%; top: 40%" uk-marker on:click="{hizliGol}" >Gol</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 45%; top: 30%" uk-marker on:click="{hizliKaleci}" >Kaleci</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 54%; top: 40%" uk-marker on:click="{hizliAut}" >Aut</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 45%; top: 50%" uk-marker on:click="{hizliDirek}" >Direk</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 36%; top: 40%" uk-marker on:click="{hizliBlok}" >Blok</button>
			{/if}


			{#if bolge==true}
			<button class="uk-position-absolute uk-transform-center" style="left: 11%; top: 30%" uk-marker on:click="{duzac}" >Düz</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 16%; top: 76%" uk-marker on:click="{altiac}" >6 metre</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 20%; top: 50%" uk-marker on:click="{yediac}" >7 metre</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 25%; top: 34%" uk-marker on:click="{yedidokuzac}" >7-9 metre</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 40%; top: 60%" uk-marker on:click="{dokuzac}" >9 metre</button>
			<button class="uk-position-absolute uk-transform-center" style="left: 45%; top: 40%" uk-marker on:click="{hhac}" >HH</button>
            {/if}
        </div>
    </div>
    
</div>
	
	
