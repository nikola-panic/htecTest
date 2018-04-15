module.exports = {
  elements: {
    emailField: {
      selector: 'input[name=email]',
      locateStrategy: 'css selector'
    },
    passField: {
      selector: 'input[name=password]',
      locateStrategy: 'css selector'
    },
    signInButton: {
      selector: 'button[type=submit]',
      locateStrategy: 'css selector'
    },
    playersButton: {
      selector: '//span[text()="Players"]',
      locateStrategy: 'xpath'
    },
    addNewButton: {
      selector: '//a[text()="Add New"]',
      locateStrategy: 'xpath'
    },
    firstNameField: {
      selector: 'input[name=firstName]',
      locateStrategy: 'css selector'
    },
    lastNameField: {
      selector: 'input[name=lastName]',
      locateStrategy: 'css selector'
    },
    pointsField: {
      selector: 'input[name=points]',
      locateStrategy: 'css selector'
    },
    savePlayerButton: {
      selector: 'input[type=submit][value=Save]',
      locateStrategy: 'css selector'
    },
    successAlert: {
      selector: 'div.alert-success',
      locateStrategy: 'css selector'
    },
    searchPlayer: {
      selector: 'input[type=search]',
      locateStrategy: 'css selector'
    },
    viewPlayerButton: {
      selector: 'i.glyphicon-eye-open',
      locateStrategy: 'css selector'
    },
    firstNameView: {
      selector: '/html/body/div/div/div/div/div/div/div[2]/p',
      locateStrategy: 'xpath'
    },
    lastNameView: {
      selector: '/html/body/div/div/div/div/div/div/div[3]/p',
      locateStrategy: 'xpath'
    },
    pointsView: {
      selector: '/html/body/div/div/div/div/div/div/div[5]/p',
      locateStrategy: 'xpath'
    },
    backFromPlayerViewButton: {
      selector: '//a[text()="Back"]',
      locateStrategy: 'xpath'
    },
    editPlayerButton: {
      selector: 'i.glyphicon-edit',
      locateStrategy: 'css selector'
    },
    deletePlayerButton: {
      selector: 'i.glyphicon-trash',
      locateStrategy: 'css selector'
    },
    emptyTableText: {
      selector: 'td.dataTables_empty',
      locateStrategy: 'css selector'
    }
  }
};