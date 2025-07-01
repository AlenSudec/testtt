<template>
	<input :value="inputRef" @input="onChange" />
</template>

<script setup>
	import { ref, nextTick } from "vue";
	const inputRef = ref("");

	const onChange = (event) => {
		const old = inputRef.value;
    inputRef.value = event.target.value;
		if (event.target.value.includes("2")) {
      console.log(event.target.value);
			// inputRef.value = old;
      // event.target.value = old;
        	inputRef.value = old;
      
			return;
		}

	};
</script>
