module.exports = {
    'Log In': function (browser) {
        // Define page object
        var elements_page = browser.page.elements_page();

        // Open app url
        browser.url('http://internships-mobile.htec.co.rs/login');

        // Enter login credentials
        elements_page
            .setValue('@emailField', 'test.htecopen@htecgroup.com')
            .setValue('@passField', 'Test1234')
            .click('@signInButton');

        // Check if 'Players' button is visible
        // Verify login
        elements_page
            .assert.visible('@playersButton');

    },

    'Create and check player': function (browser) {
        // Define page object
        var elements_page = browser.page.elements_page();

        // Add new player
        elements_page
            .click('@playersButton')
            .waitForElementVisible('@addNewButton', 10000)
            .click('@addNewButton')
            .waitForElementVisible('@savePlayerButton', 10000)
            .setValue('@firstNameField', 'Nikola')
            .setValue('@lastNameField', 'Panić')
            .setValue('@pointsField', '50')
            .click('@savePlayerButton')
            .waitForElementVisible('@successAlert', 10000);
            
        elements_page
            .expect.element('@successAlert').text.to.equal('Player saved successfully.');

        // Check player properties
        elements_page
            .click('@searchPlayer')
            .setValue('@searchPlayer', 'Nikola Panić');

        browser.pause(1000);

        elements_page
            .click('@viewPlayerButton')
            .expect.element('@firstNameView').text.to.equal('Nikola');

        elements_page
            .expect.element('@lastNameView').text.to.equal('Panić');

        elements_page
            .expect.element('@pointsView').text.to.equal('50');

        elements_page
            .click('@backFromPlayerViewButton')
            .waitForElementVisible('@addNewButton', 10000);

    },

    'Edit and check player': function (browser) {
        // Define page object
        var elements_page = browser.page.elements_page();

        // Search for player
        elements_page
            .click('@searchPlayer')
            .setValue('@searchPlayer', 'Nikola Panić');

        browser.pause(1000);

        // Edit player
        elements_page
            .click('@editPlayerButton')
            .clearValue('@firstNameField')
            .setValue('@firstNameField', 'Nick')
            .clearValue('@lastNameField')
            .setValue('@lastNameField', 'Panic')
            .clearValue('@pointsField')
            .setValue('@pointsField', '33')
            .click('@savePlayerButton')
            .waitForElementVisible('@successAlert', 10000);

        elements_page
            .expect.element('@successAlert').text.to.equal('Player updated successfully.');

        // Check edited player properties
        elements_page
            .click('@searchPlayer')
            .setValue('@searchPlayer', 'Nick Panic')

        browser.pause(1000);

        elements_page
            .click('@viewPlayerButton')
            .expect.element('@firstNameView').text.to.equal('Nick');

        elements_page
            .expect.element('@lastNameView').text.to.equal('Panic');

        elements_page
            .expect.element('@pointsView').text.to.equal('33');

        elements_page
            .click('@backFromPlayerViewButton')
            .waitForElementVisible('@addNewButton', 10000);

    },

    'Delete player': function (browser) {
        // Define page object
        var elements_page = browser.page.elements_page();

        // Search for player
        elements_page
            .click('@searchPlayer')
            .setValue('@searchPlayer', 'Nick Panic');

        browser.pause(1000);

        elements_page
            .click('@deletePlayerButton');

        browser.pause(500).acceptAlert();

        elements_page
            .waitForElementVisible('@successAlert', 10000);

        elements_page
            .expect.element('@successAlert').text.to.equal('Player deleted successfully.');

        browser.refresh();

        // Check if player is deleted
        elements_page
            .click('@searchPlayer')
            .setValue('@searchPlayer', 'Nick Panic');

        browser.pause(1000);

        elements_page
            .expect.element('@emptyTableText').text.to.equal('No matching records found');

        browser.end();

    }

}