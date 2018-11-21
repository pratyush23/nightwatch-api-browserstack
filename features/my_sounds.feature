Feature: My Sounds

  As a user
  I want to be able to see the brand and series I subscribe to as individual items
  So that I can see the relevant information for each item

  Background:
    Given I am on the My Sounds page

  Scenario: Validate landing page of my Sounds
    Then the title is "BBC Sounds - My Sounds - Latest"
    And the upsell title is "All your favourite Sounds in one place"
