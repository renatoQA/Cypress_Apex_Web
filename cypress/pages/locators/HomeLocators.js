// All web elements 
class HomeLocators {

    // Data Table 
     header_home_locator = "#R81505143206470472651_heading"
     order_filter = "#C81505145973546472679_HDR"
     search_order = "#R81505144030784472659_ig_column_header_search"
     first_row_order_search = "//a[contains(@class, 'a-IRR-sortWidget-row')]"
     three_lines_button = "(//*[@class='a-Icon icon-ig-actions'])[3]"
     single_row_view_button = "#R81505144030784472659_ig_row_actions_menu_0i"
     save_button = "#B81505146236504472681"

     // Quantity Locators
     quantity_field_area = "#C81505145279802472672_RO"
     quantity_field_input = "#C81505145279802472672"

     // Location Locators
     location_search_modal = "//*[@class='a-Icon icon-popup-lov']"
     location_search_input = "//*[@class='a-PopupLOV-search apex-item-text']"
     location_modal_btn_search = "//*[@class='a-Icon icon-search']"
     location_field_area = "#C81505145721162472676_RO"
     location_first_row = "//li[@data-id='1' and contains(@class, 'a-IconList-item')]"
     location_field_input = "#C81505145721162472676"
     
 }
 
 module.exports = new HomeLocators();