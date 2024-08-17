// Created by mathclout 8/16/2024
// https://github.com/mathclout

/* 
    This section may be unnecessary depending on your implementation, 
    but you need to handle or manage events like focus, blur, paste, and input.
*/
document.addEventListener('DOMContentLoaded', () => {
    const numericInputs = document.querySelectorAll('input[name="numeric-input"]');
    numericInputs.forEach(numericInput => {
        // Clearing all existing events
        numericInput.removeEventListener('focus', handleFocusEvent);
        numericInput.removeEventListener('blur', handleBlurEvent);
        numericInput.removeEventListener('paste', handlePasteEvent);
        numericInput.removeEventListener('input', handleInputEvent);

        // Listening for all events
        formatTextValue(numericInput, parseInt(numericInput.attributes?.initialval?.nodeValue ?? 0));
        numericInput.addEventListener('focus', handleFocusEvent);
        numericInput.addEventListener('blur', handleBlurEvent);
        numericInput.addEventListener('paste', handlePasteEvent);
        numericInput.addEventListener('input', handleInputEvent);
    });
});

// only allows '-' and digits '0 -> 9'
const invalidPatternRegex = /[\x00-\x2B|\x2F|\x3A-\xFF]/g;

function formatTextValue(inputElement, value) {
    if (!inputElement || typeof value !== 'number') return;
    const { decimal = {} } = inputElement.attributes;
    inputElement.value = value.toFixed(decimal.nodeValue || 0);
}

// Remove this if you don't want to auto-select all content.
function handleFocusEvent(event) {
    if (!event.target) return;
    event.target.select();
}

function handleBlurEvent(event) {
    if (!event.target) return;
    let inputElement = event.target;
    let { minval: minimumValue = {}, maxval: maximumValue = {} } = inputElement.attributes;
    let inputElementValueAsFloat = parseFloat(inputElement.value?.replace(',', '.')) || 0;
    minimumValue = parseFloat(minimumValue.nodeValue ?? -Infinity);
    maximumValue = parseFloat(maximumValue.nodeValue ?? Infinity);
    // Clamp 'inputElementValueAsFloat' between 'minimumValue' and 'maximumValue'.
    inputElementValueAsFloat = (
        inputElementValueAsFloat >= maximumValue ? maximumValue : (
            inputElementValueAsFloat <= minimumValue ? minimumValue : inputElementValueAsFloat
        )
    );
    formatTextValue(inputElement, inputElementValueAsFloat);
}

function handlePasteEvent(event) {
    const pasteText = (event.clipboardData || window.clipboardData).getData("text");
    if (invalidPatternRegex.test(pasteText)) {
        return event.preventDefault();
    }
}

function handleInputEvent(event) {
    if (!event.target) return;
    const inputElement = event.target;
    inputElement.value = inputElement.value.replace(invalidPatternRegex, '');
    formatTextValue(inputElement, inputElement.value);
}