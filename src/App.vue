<script setup>
	import { useApi } from "./api/useApi";
	import { ref } from "vue";
	const { get } = useApi();

	const counter = ref(0);

	const fetch = async () => {
		if (counter.value > 2) {
			window.location.replace(window.location.href);
			console.log("Reloading page due to counter limit");
			return;
		}

		try {
			const response = await get("https://jsonplaceholder.typicode.com");

			counter.value += 1;
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};
</script>
<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/info">Info</router-link>
	</nav>
	<main>
		<router-view />
		<h1>TEST</h1>
		<button @click="fetch">fetch</button>
	</main>
</template>
<style scoped>
	header {
		line-height: 1.5;
	}

	.logo {
		display: block;
		margin: 0 auto 2rem;
	}

	@media (min-width: 1024px) {
		header {
			display: flex;
			place-items: center;
			padding-right: calc(var(--section-gap) / 2);
		}

		.logo {
			margin: 0 2rem 0 0;
		}

		header .wrapper {
			display: flex;
			place-items: flex-start;
			flex-wrap: wrap;
		}
	}
</style>
