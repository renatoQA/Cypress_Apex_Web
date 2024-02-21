Feature: Change some data from APEX Oracle Database

    Background: Validate login valid in APEX QA Environment
        Given Open the apex environment
        When I fill the username
        And I fill the password
        And Click on the SignIn button
        Then I logged in successfully


    Scenario: Validate when i change quantity order
        When I search the order "10"
        And I change the view mode
        And fill the new value quantity "20"
        Then Validate the new quantity is "20"

    Scenario: Validate when i change the order location
        When I search the order "10"
        And I change the view mode
        And fill the new location to "Deli"
        Then Validate the new location is "Deli"