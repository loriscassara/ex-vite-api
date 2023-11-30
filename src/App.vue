<!-- 
	START SCRIPT
-->

<script>
import axios from 'axios' //axios import
import AppCard from './components/AppCard.vue' //AppCard import
import AppDeckCard from './components/AppDeckCard.vue' //AppDeckCard import

export default {
	components: {
		AppCard,
		AppDeckCard
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
				//console.log(result.data);
			});
		}
	}
}
</script>

<!-- 
	START TEMPLATE
-->

<template>
	<AppDeckCard/>
</template>

<!-- 
	START STYLE
-->

<style scoped>

</style>