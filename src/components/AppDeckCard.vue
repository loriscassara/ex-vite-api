<!-- 
	START SCRIPT
-->

<script>
	
	import AppCard from './AppCard.vue'

	export default {
		name: 'AppCardDeck',
		components: {
			AppCard
		},
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {

		},
		props: [
			'subject'
		]
	}

</script>

<!-- 
	START TEMPLATE
-->

<template>
	<!-- start info container beers -->
	
	<AppCard :name = "subject.name" :location = "subject.city" :text = "subject.brewery_type" />

</template>

<!-- 
	START STYLE
-->

<style scoped>

</style>