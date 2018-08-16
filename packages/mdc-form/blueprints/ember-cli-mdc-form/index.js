/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall () {
    return this.addAddonsToProject ({
      packages: [
        {name: 'ember-cli-mdc-textfield'},
        {name: 'ember-cli-mdc-button'},
        {name: 'ember-cli-mdc-select'},
        {name: 'ember-cli-mdc-switch'}
      ]
    });
  }
};
