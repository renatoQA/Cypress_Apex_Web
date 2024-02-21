const loginLocators = require("./locators/LoginLocators")
const homelocators = require("./locators/HomeLocators")


// Home page methods
class HomePage {

    searchOrder(order) {
        cy.get(homelocators.order_filter).click()
        cy.wait(2000)
        cy.get(homelocators.search_order).type(order)
        cy.xpath(homelocators.first_row_order_search).click()
        cy.wait(2000)
    }

    changeViewMode(){
        cy.xpath(homelocators.three_lines_button).click()
        cy.get(homelocators.single_row_view_button).click()
        cy.get(homelocators.quantity_field_area).should('be.visible', { timeout: 10000 });
    }

    changeQuantityValue(quantity){
        cy.get(homelocators.quantity_field_area).dblclick()
        cy.get(homelocators.quantity_field_input).clear()
        cy.wait(2000)
        cy.get(homelocators.quantity_field_input).type(quantity)
    }

    changeLocationValue(Newlocation){
        cy.get(homelocators.location_field_area).dblclick()
        cy.xpath(homelocators.location_search_modal).click()
        cy.xpath(homelocators.location_search_input).clear()
        cy.xpath(homelocators.location_search_input).type(Newlocation)
        cy.xpath(homelocators.location_modal_btn_search).click()
        cy.xpath(homelocators.location_first_row).should('be.visible', { timeout: 10000 });
        cy.xpath(homelocators.location_first_row).click()
    }

    saveDataTable() {
        cy.get(homelocators.save_button).click()
        cy.wait(2000)
    }
    
    validateNewValue(quantity) {
        
        cy.xpath(homelocators.three_lines_button).click()
        cy.get(homelocators.single_row_view_button).click()
        cy.get(homelocators.quantity_field_area).should('be.visible', { timeout: 10000 });
        cy.get(homelocators.quantity_field_area).dblclick()
        cy.get(homelocators.quantity_field_input)
          .invoke('val')
          .then((currentValue) => {
            expect(currentValue).to.equal(quantity);
          });
      }

      validateNewLocation(location) {    
        cy.xpath(homelocators.three_lines_button).click()
        cy.get(homelocators.single_row_view_button).click()
        cy.get(homelocators.location_field_area).should('be.visible', { timeout: 10000 });
        cy.get(homelocators.location_field_area).dblclick()
        cy.get(homelocators.location_field_input)
          .invoke('val')
          .then((currentValue) => {
            expect(currentValue).to.equal(location);
          });
      }
      
}




module.exports = new HomePage()