# current-year [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/current-year.svg)](https://travis-ci.org/IonicaBizau/current-year/) [![Version](https://img.shields.io/npm/v/current-year.svg)](https://www.npmjs.com/package/current-year) [![Downloads](https://img.shields.io/npm/dt/current-year.svg)](https://www.npmjs.com/package/current-year) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get the current year.

## :cloud: Installation
    
```sh
$ npm i --save current-year
```

            
## :clipboard: Example

        

```js
const currentYear = require("current-year");

console.log(currentYear());
// => 2016

console.log(currentYear(true));
// => '2016'
```
    
## :memo: Documentation
        
### `currentYear(str)`
Get the current year.

#### Params
- **Boolean** `str`: If `true`, the result will be stringified.

#### Return
- **String|Number** The current year.

        
## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License
    
[MIT][license] © [Ionică Bizău][website]
    
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md