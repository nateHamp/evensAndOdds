
module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        inputLine1: {
            selector: '//input[@class="inputLine"]',
            locateStrategy: 'xpath',
        },
        EObutton: 'button[name="evenOddButton"]',
        even: 'span[name="evenResults"]',
        odd: 'span[name="oddResults"]',
        inputLine2:'input[name="objectFilterInput"]',
        OFbutton: 'button[name="objectFilterButton"]',
        objFiltered: 'span[name="objectFilterResults"]',
        inputLine3: 'input[id="nameFilterInput"]',
        nameFilterButton: 'button[id="nameFilterButton"]',
        nameFilterResults: 'span[name="nameFilterResults"]',
        inputLine4: 'input[name="palindromeInput"]',
        palindromeButton: 'button[name="palindromeButton"]',
        palindromeResults: 'span[name="palindromeResults"]',
        inputLine5: 'input[name="sumInput1"]',
        inputLine6: 'input[name="sumInput2"]',
        sumButton: 'button[name="sumButton"]',
        sumResults: 'span[name="sumResults"]',
    }
    
}