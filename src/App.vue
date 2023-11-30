<!-- 
	START SCRIPT
-->

<script>
import axios from 'axios' //axios import
import AppHeader from './components/AppHeader.vue' //AppHeader import

export default {
	components: {
		AppHeader
	},
	data() {
		return {

		}
	},
	mounted() {
		this.connectBeer();
	},
	methods: {
		connectBeer() {
			axios.get(`https://api.openbrewerydb.org/v1/breweries?by_country=scotland&per_page=10`).then(result => {
				//console.log(result);
			});
		}
	}
}
</script>

<!-- 
	START TEMPLATE
-->

<template>
	contenuto
</template>

<!-- 
	START STYLE
-->

<style scoped>

</style>