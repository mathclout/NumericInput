# Numeric Input

**Numeric Input** is a fully functional numeric input field for HTML, powered entirely by JavaScript. It allows you to easily add a customizable numeric input to your project without the need for external libraries.

## Features

- **Compatibility**: Works in any web browser that supports JavaScript and HTML.
- **Customization**: Set a minimum and maximum value, initial value, and the number of decimal places.
- **Ease of Use**: Simply copy and paste the JavaScript code into your project and customize it as needed.

## Installation

No installation is required. Just include the JavaScript code in your project and hook it up to your HTML input elements as needed.

## Usage

Here's how to create and use the Numeric Input component:

### Example 1: Input with a Minimum and Maximum Value
Create an input with a minimum value of `-10.20` and a maximum value of `10.20`. The input value will be clamped to these limits, and any entered values will have `2` decimal places. The initial value is set to `0`.

```html
<input type="text" name="numeric-input" minval="-10.2" maxval="10.2" decimal="2">
```

### Example 2: Input with No Minimum and Maximum Values
Create an input with no minimum and maximum values, an initial value of `10`, and `2` decimal places.

```html
<input type="text" name="numeric-input" initialval="10" decimal="2">
```

### Example 3: Input with No Decimals
Create an input with no minimum and maximum values, an initial value of `0`, and no decimal places.
```html
<input type="text" name="numeric-input">
```

#### Note
You can enter a number in various formats, such as ".2", ",2", "0.2", or "0,2", and it will be interpreted as `0.2`. Additionally, typing ".", ",", ",0", ".0", or "0" will all result in the value `0`.

## Customization

You can easily customize the component to fit your needs:
- Minimum and Maximum Values: Define the range of allowable values using `minval` and `maxval` attributes.
- Initial Value: Set the default value using the `initialval` attribute.
- Decimal Places: Control the number of decimal places using the `decimal` attribute.

Feel free to modify the JavaScript code to suit your specific requirements.

## License
This project is open-source. You are free to use, modify, and distribute it in your projects.

## Contributions
Contributions are welcome! If you'd like to improve this project, please submit a pull request or open an issue.

## Contact
For questions or support, feel free to reach out.