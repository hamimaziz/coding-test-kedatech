<template>
    <div>
        <div class="radio-item">
            <input
                v-model="valueContent"
                :id="id"
                :name="name"
                :value="val"
                type="radio"
            />
            <span v-if="text" class="label">{{ text }}</span>
            <div class="custom-slot">
                <slot name="custom" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputRadio",
    props: {
        name: { type: String, default: null },
        id: { type: String, default: null },
        text: { type: String, default: null },
        val: { type: [Number, String, Boolean, Date, Object, Array], default: null },
        value: { type: [Number, String, Boolean, Date, Object, Array], default: null },
    },
    computed: {
        valueContent: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
};
</script>

<style scoped>
.radio-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
}
.label {
    margin-left: 2rem;
}
.custom-slot {
    margin-left: 2rem;
}
</style>
