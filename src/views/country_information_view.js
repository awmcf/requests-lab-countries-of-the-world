const PubSub = require('../helpers/pub_sub.js');

const CountryInformationView = function (container) {
  this.container = container;
};

CountryInformationView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected-country-ready', (evt) => {
    const country = evt.detail;
    this.render(country)
  });
};

CountryInformationView.prototype.render = function (country) {
  this.container.innerHTML = '';

  const countryName = this.createElement('h2', country.name);
  this.container.appendChild(countryName)

  const countryRegion = this.createElement('p', country.region);
  this.container.appendChild(countryRegion)

  const countryFlag = this.createImage('img', country.flag);
  this.container.appendChild(countryFlag)

};

CountryInformationView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = CountryInformationView;
