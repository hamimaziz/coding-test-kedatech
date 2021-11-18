<template>
    <div>
        <input
            v-model="valueContent"
            :placeholder="placeholder"
            :id="id"
            @input="$emit('eventChange', $event)"
        />
    </div>
</template>

<script>
export default {
    name: "Custom",
    props: {
        placeholder: { type: String, default: '' },
		value: { type: [Number, String], default: null },
        id: { type: String, default: '' }
    },
    computed: {
        valueContent: {
			get() {
				return this.value
			},
			set(value) {
				this.$emit('input', value)
			}
		}
    }
};
</script>

<style scoped>
button {
    padding: 5px 10px;
}
input {
    padding: 6px 5px;
    margin: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid gray;
}
input:focus, input:hover {
    outline: none;
    border: 1px solid #409aff;
}
</style>
