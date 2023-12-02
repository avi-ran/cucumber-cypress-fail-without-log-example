Feature: duckduckgo.com
  Scenario: visiting the frontpage
    When I visit duckduckgo.com
    Then I see error logs on cypress debugger showing me the line of my script yielding the failing line
