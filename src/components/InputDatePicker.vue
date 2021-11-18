<template>
    <div>
        <date-picker
            v-model="valueContent"
            placeholder="DD - MM - YYYY"
            format="DD - MM - YYYY"
            value-type="format"
            :editable="false"
            :clearable="false"
            :id="id"
        />
    </div>
</template>

<script>
import DatePicker from "vue2-datepicker";

export default {
    name: "InputDatePicker",
    components: { DatePicker },
    props: {
        value: { type: [String, Date], default: new Date() },
        id: { type: String, default: '' }
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
button {
    padding: 5px 10px;
}
input {
    padding: 8px 5px;
    border-radius: 8px;
    border: 2px solid gray;
}
input:focus {
    outline: none;
    border: 2px solid seagreen;
}
</style>
