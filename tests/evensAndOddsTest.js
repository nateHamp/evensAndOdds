
var evensAndOddsPage

module.exports = {
    beforeEach: browser => {
        evensAndOddsPage = browser.page.evensAndOdds()
        evensAndOddsPage.navigate()
    },
    'Test Even and Odd Function': browser => {
        evensAndOddsPage
            .setValue('@inputLine1', '7,8')
            .click('@EObutton')
            .verify.containsText('@even', '8')
            .verify.containsText('@odd', '7')
    },
    'Filter Object Function': browser => {
        evensAndOddsPage
            
            .setValue('@inputLine2', 'hairColor')
            .click('@OFbutton')
            .verify.containsText('@objFiltered', 'Jeremy Schrader')

    },
    'Filter String Function': browser => {
        evensAndOddsPage
            .setValue('@inputLine3', 'Blake')
            .click('@nameFilterButton')
            .verify.containsText('@nameFilterResults', 'Blake')
    },
    'Palindrom Function': browser => {
        evensAndOddsPage
            .setValue('@inputLine4', 'tattarrattat')
            .click('@palindromeButton')
            .verify.containsText('@palindromeResults', 'true')
    },
    'Sum Function': browser => {
        evensAndOddsPage
            .setValue('@inputLine5', '10')
            .setValue('@inputLine6', '7')
            .click('@sumButton')
            .verify.containsText('@sumResults', '17')
    }
}