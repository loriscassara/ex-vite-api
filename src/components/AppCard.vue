<!-- 
	START SCRIPT
-->

<script>

	export default {
		name: 'AppCard',
		data() {
			return {
			
			}
		},
		props: [
			'name',
			'location',
			'text'
		]
	}

</script>

<!-- 
	START TEMPLATE
-->

<template>
	<!-- start deck card -->

	<div class="card">
		<h1 id="uppercase">{{ name }}</h1>
		<h3>{{ location }}</h3>
		<p id="italic">{{ text }}</p>
	</div>

</template>

<!-- 
	START STYLE
-->

<style scoped>
	/* start deck card */

	.card {
		background-color: gainsboro;
		padding: 1rem;
		margin: 0.5rem;
		border-radius: 1rem;
		width: 40%;
		transition: all .55s ease;
	}

	.card:hover {
		cursor: pointer;
		transform: scale(0.95);
		background-color: rgb(206, 205, 205);
	}

	#uppercase { text-transform: uppercase; }

	#italic { font-style: italic }

</style>