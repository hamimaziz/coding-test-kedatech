<template>
    <div class="page-layout">

        <h1>{{ msg }}</h1>

        <div class="radio-group-label">
            <span> Test Radio Button 1 </span>
        </div>
        <div class="radio-group">
            <radio-button v-bind="bindRadioA1" v-model="model.result1" />
            <radio-button v-bind="bindRadioB1" v-model="model.result1" />
        </div>
        <h4 class="result">
            <span>Result : </span>
            <span id="result-1">{{ model.result1 }} </span>
        </h4>

        <div class="radio-group-label">
            <span> Name </span>
        </div>
        <div class="radio-group">
            <radio-button v-bind="bindRadioA2" v-model="model.result2" />
            <radio-button v-bind="bindRadioB2" v-model="model.result2" />
            <radio-button v-bind="bindRadioC2" v-model="model.result2" />
        </div>
        <h4 class="result">
            <span>Result : </span>
            <span id="result-2">{{ model.result2 }} </span>
        </h4>

        <div class="radio-group-label">
            <span> Subcomponents! </span>
        </div>
        <div class="radio-group">
            <radio-button v-bind="bindRadioButton" v-model="model.result3" />
            <radio-button v-bind="bindCustomInputText" v-model="model.result3">
                <template #custom>
                    <input-text id="radio-input-text" placeholder="Hey!" @input="(value) => updateValue(value, 'bindCustomInputText', 'result3')" />
                </template>
            </radio-button>
            <radio-button v-bind="bindCustomInputDatePicker" v-model="model.result3">
                <template #custom>
                    <input-date-picker id="radio-date-picker" :value="bindCustomInputDatePicker.val" @input="(value) => updateValueDate(value, 'bindCustomInputDatePicker', 'result3')" />
                </template>
            </radio-button>
        </div>
        <h4 class="result">
            <span>Result : </span>
            <span id="result-3">{{ model.result3 }} </span>
        </h4>

        <div class="radio-group-label">
            <span> Subcomponents! </span>
        </div>
        <div class="radio-group">
            <radio-button id="radio-input-multiple-1" :val="modelMultipleInput1" v-model="model.result4">
                <template #custom>
                    <multiple-input :inputs="bindMultipleInput1" @input="(value) => updateMultiple(value, 'bindMultipleInput1', 'result4', 'modelMultipleInput1')" />
                </template>
            </radio-button>
            <radio-button id="radio-input-multiple-2" :val="modelMultipleInput2" v-model="model.result4">
                <template #custom>
                    <multiple-input :inputs="bindMultipleInput2" @input="(value) => updateMultiple(value, 'bindMultipleInput2', 'result4', 'modelMultipleInput2')" />
                </template>
            </radio-button>
        </div>
        <h4 class="result">
            <span>Result : </span>
            <span id="result-4">{{ model.result4 }} </span>
        </h4>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: { type: String, default: '' }
    },
    components: {
        RadioButton: () => import("./RadioButton.vue"),
        InputText: () => import("./InputText.vue"),
        MultipleInput: () => import("./MultipleInput.vue"),
        InputDatePicker: () => import("./InputDatePicker.vue"),
    },
    data() {
        return {
            bindRadioA1: { text: "Radio A", val: "Radio A", id: 'radio-a-1' },
            bindRadioB1: { text: "Radio B", val: "Radio B", id: 'radio-b-1' },
            
            bindRadioA2: { text: "Radio A", val: "Radio A", id: 'radio-a-2' },
            bindRadioB2: { text: "Radio B", val: "Radio B", id: 'radio-b-2' },
            bindRadioC2: { text: "Radio C", val: "Radio C", id: 'radio-c-2' },
            
            bindRadioButton: { text: "Radio button with label", val: "radio-button-with-label", id: 'radio-with-label' },
            bindCustomInputText: { val: "radio-button-input-text", id: 'radio-button-input-text' },
            bindCustomInputDatePicker: { val: new Date(), id: 'radio-button-input-date-picker' },

            bindMultipleInput1: [
                { placeholder: 'Input 1', val: '', id: 'multiple-input-1' },
                { placeholder: 'Input 2', val: '', id: 'multiple-input-2' },
                { placeholder: 'Input 3', val: '', id: 'multiple-input-3' },
            ],
            modelMultipleInput1: [
                { val: '' },
                { val: '' },
                { val: '' },
            ],
            bindMultipleInput2: [
                { placeholder: 'Input 4', val: '', id: 'multiple-input-4' },
                { placeholder: 'Input 5', val: '', id: 'multiple-input-5' },
                { placeholder: 'Input 6', val: '', id: 'multiple-input-6' },
            ],
            modelMultipleInput2: [
                { val: '' },
                { val: '' },
                { val: '' },
            ],

            model: {
                result1: '',
                result2: '',
                result3: '',
                result4: {}
            },
        };
    },
    methods: {
        updateValue(val, bindData, result) {
            if (this.model[result] === this[bindData].val) {
                this.model[result] = val
            }
            this[bindData].val = val
        },
        updateValueDate(date, bindData, result) {
            if (this.model[result] === this[bindData].val) {
                this.model[result] = date
            }
            this[bindData].val = date
            this[bindData].value = date
        },
        updateMultiple(val, bindData, result, model) {
            if (this.model[result] === this[model]) {
                this.model[result] = val
            }
            this[model] = val
            this[bindData].forEach((element, id) => {
                element.val = val[id].val
            });
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-layout {
    padding: 2rem 10rem;
}
.radio-group {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.radio-group-label {
    display: flex;
    font-weight: 600;
    padding: 0 5px;
    margin-top: 30px;
}
.result {
    margin: 0 5px;
    text-align: left;
}
</style>
