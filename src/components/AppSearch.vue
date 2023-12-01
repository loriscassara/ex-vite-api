<!-- 
	START SCRIPT
-->

<script>

    import { store } from '../store.js'

	export default {
		name: 'AppSearch',
		data() {
			return {
                store
			}
		},
        methods: {
            search() {
                this.$emit('search');
            }
        }
	}

</script>

<!-- 
	START TEMPLATE
-->

<template>
    <!-- start input search -->

    <div class="search-input">
        <input placeholder="Search.." v-model = "store.srString" @keyup.enter = "$emit('search')">
        <button id="button-search" @click = "search">Invia</button>
    </div>

</template>

<!-- 
	START STYLE
-->

<style scoped>
    /* start search input */

    .search-input {
        display: flex;
        justify-content: center;
        padding-top: 1rem;
    }

    #button-search { margin-left: 1rem; }

    #button-search:hover { cursor: pointer; }

</style>