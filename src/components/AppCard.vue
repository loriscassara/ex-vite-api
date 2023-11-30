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
	<div>{{ name }} {{ location }} {{ text }}</div>
</template>

<!-- 
	START STYLE
-->

<style scoped>

</style>