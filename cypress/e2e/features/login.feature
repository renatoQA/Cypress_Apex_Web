Feature: Login APEX feature test case

        Scenario: Validate login valid in APEX QA Environment 
        Given Open the apex environment
        When I fill the username 
        And I fill the password 
        And Click on the SignIn button
        Then I logged in successfully 
