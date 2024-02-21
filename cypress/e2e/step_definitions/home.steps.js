import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/homePage";

// SearchOrder:
When("I search the order {string}", (order) => {
    HomePage.searchOrder(order);
});
When("I change the view mode", () => {
    HomePage.changeViewMode();
});

// Quantity
When("fill the new value quantity {string}", (quantity) => {
    HomePage.changeQuantityValue(quantity);
    HomePage.saveDataTable();
});

Then("Validate the new quantity is {string}", (quantity) => {
    HomePage.validateNewValue(quantity);
})

// Location

When("fill the new location to {string}", (Newlocation) => {
    HomePage.changeLocationValue(Newlocation);
    HomePage.saveDataTable();
});

Then("Validate the new location is {string}", (location) => {
    HomePage.validateNewLocation(location);
})
