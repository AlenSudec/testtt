<template>
	<input type="text" v-model="testvalue" ref="inputRef" />
</template>

<script setup>
	import { ref, watch, defineProps, defineEmits, nextTick } from "vue";

	const props = defineProps(["modelValue"]);
	const emit = defineEmits(["update:modelValue"]);

	const testvalue = ref(props.modelValue);
	const inputRef = ref(null); // Reference to access the input DOM element

	// Watch for changes in `modelValue` (parent prop)
	watch(
		() => props.modelValue,
		(newValue) => {
			testvalue.value = newValue; // Sync the `testvalue` ref with the prop
		}
	);

	// Watch for changes in `testvalue` (local state) and handle validation
	watch(testvalue, (newValue, oldValue) => {
		if (newValue.length == 1) {
			// Preserve cursor position before modifying the value
			const input = inputRef.value;
			const cursorPos = input.selectionStart;

			// If the input contains "a", revert to the old value
			testvalue.value = oldValue;

			// Restore the cursor position after reverting the value
			nextTick(() => {
				input.setSelectionRange(cursorPos - 1, cursorPos - 1); // Move cursor back
			});
		} else {
			// Otherwise, emit the new valid value
			emit("update:modelValue", newValue);
		}
	});
</script>
