Feature: Logout functionality

  Scenario: Successful logout 
    Given I am on the Sauce Demo login page
    When  I click on shopping badge
    When   I click on the burger menu
    And I click on the logout button
    Then I should be logged out successfully



