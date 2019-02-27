const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Country = function () {
  this.text = null;
};

Country.prototype.getData = function () {

  const request = new RequestHelper ('https://restcountries.eu/rest/v2/all')
  request.get((data) => {
    this.text = data;
    console.log(data);
    PubSub.publish('Country:country-information-load', this.text)

    PubSub.subscribe('CountrySelectView:change', (evt) => {
      const selectedIndex = evt.detail;
      this.publishCountryDetail(selectedIndex);
    });
  });
};

Country.prototype.publishCountryDetail = function (selectedIndex) {
  const selectedCountry = this.data[selectedIndex];
  PubSub.publish('Country:selected-country-ready', selectedCountry)
};

module.exports = Country;
