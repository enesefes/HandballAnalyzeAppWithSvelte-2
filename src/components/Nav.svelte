<script>
	export let segment;
</script>
<svelte:head>
	<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/css/uikit.min.css" />

<!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.4.2/dist/js/uikit-icons.min.js"></script>
</svelte:head>



<nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li class="uk-active"><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
            
            <li><a aria-current='{segment === "oyuncuekle" ? "page" : undefined}' href='oyuncuekle'>oyuncu ekle</a></li>
            <li><a aria-current='{segment === "analiz" ? "page" : undefined}' href='analiz'>oyuncu analiz</a></li>
            <li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>
        </ul>

    </div>
</nav>
