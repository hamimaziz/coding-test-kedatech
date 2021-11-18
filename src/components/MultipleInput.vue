<template>
    <div>
        <input-text v-for="(input, id) in multipleInputs" :key="id" v-bind="input" @input="(value) => updateData(id, value)" />
    </div>
</template>

<script>
export default {
    name: "Custom",
    components: {
        InputText: () => import("./InputText.vue"),
    },
    props: {
        inputs: { 
            type: Array, default() { return [] },
        },
    },
    data() {
        return {
            multipleInputs: this.inputs
        }
    },
    computed: {
        inputData() {
            return this.multipleInputs.map((input) => {
                return { val: input.val }
            })
        }
    },
    watch: {
        inputData() {
            this.$emit('input', this.inputData)
        }
    },
    methods: {
        updateData(id, val) {
            this.multipleInputs[id].val = val
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
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid gray;
}
input:focus,
input:hover {
    outline: none;
    border: 1px solid #409aff;
}
</style>
