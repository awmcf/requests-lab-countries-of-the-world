const Country = require('./models/country.js');
const CountrySelectView = require('./views/country_select_view')
const CountryInformationView = require('./views/country_information_view')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#countries');
  const countryDropdown = new CountrySelectView(selectElement);
  countryDropdown.bindEvents();

  const countryContainer = document.querySelector('div#country');
  const countryInformationView = new CountryInformationView(countryContainer);
  countryInformationView.bindEvents();

  const country = new Country();
  country.getData();

});
