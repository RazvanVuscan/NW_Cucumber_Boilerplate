Feature: Google Search

  Scenario: Searching Google

    Given I open Google's search page
    Then The title is "Google"
    And The Google search form exists
    When I type "aaaaaaa" in the search box
    And I submit the search
