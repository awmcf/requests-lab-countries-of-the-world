const PubSub = require('../helpers/pub_sub.js');

const CountrySelectView = function (element) {
  this.element = element;
};

CountrySelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-information-load', (evt) => {
    const allCountries = evt.detail;
    console.log(allCountries);
    this.populate(allCountries);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('CountrySelectView:change', selectedIndex);
  });

};

CountrySelectView.prototype.populate = function (countryData) {
  countryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name
    option.value = index;
    this.element.appendChild(option);


  });
};

module.exports = CountrySelectView;
