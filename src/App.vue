<!-- 
	START SCRIPT
-->

<script>

	import axios from 'axios' //axios import
	import AppCard from './components/AppCard.vue' //AppCard import
	import AppDeckCard from './components/AppDeckCard.vue' //AppDeckCard import
	import AppSearch from './components/AppSearch.vue' //AppSearch import
	import { store } from './store.js' //store import

	export default {
		components: {
			AppCard,
			AppDeckCard,
			AppSearch
		},
		data() {
			return {
				beers: '',
				store
			}
		},
		mounted() {
			this.connectBeer();
		},
		methods: {
			connectBeer() {
				let address = this.store.urlApi;

				if (this.store.srString.length) {
					address = `${this.address.urlApi}&by_postal=${this.store.srString}&per_page=10`;
					axios.get(`${address} `).then(result => {
						this.beers = result.data;
					});
				} else {
					axios.get(`${address}&per_page=10`).then(result => {
						this.beers = result.data;
					})
				}
			}
		}
	}

</script>

<!-- 
	START TEMPLATE
-->

<template>

	<h1 id="title">Breweries in Scotland</h1>

	<!-- start input beers -->

	<AppSearch @search = "connectBeer" />

	<!-- start info container beers -->
	
	<div class="deck">
		<AppDeckCard v-for = "beer in this.beers" :subject = "beer" />
	</div>

</template>

<!-- 
	START STYLE
-->

<style scoped>

	#title {
		display: flex;
		justify-content: center;
		padding-top: 1rem;
	}

	/* start deck */

	.deck {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding-top: 1rem;
	}

</style>