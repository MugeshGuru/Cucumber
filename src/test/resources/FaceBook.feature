@Feature1
Feature: To validate the Login Functionality of FaceBook application

  Background: 
    Given User has to launch the Browser and hit the url
@Sanity @Smoke
  Scenario: To validate login with Valid username and Invalid password
    When User has to pass the valid username to the Email field
      | Email1 | abc@gmail |
      | Email2 | xyz@gmail |
      | Email3 | lmn@gmail |
    And User has to pass the invalid password to password field
      | Password1 | Password2 | Password3 |
      | jsjiisnl  | 893898833 | fdsgtfgef |
      | fdfstasdf |  23423242 | 324434324 |
      | jdioowdjd | ijijsdss  | 356565755 |
    And User has to click the Login button
    And User has to navigate to the Invalid credentials page
    Then User has to close the Browser
    
@Regression
  Scenario Outline: To Validate the Positive & Negative combinations
    When To pass the value to "<UserName>" username
    And To pass the Value to "<Password>" password
    And To Click the Login button
    Then To has to close the Browser

    Examples: 
      | UserName       | Password  |
      | java@gmail     | java123   |
      | Python@gmail   | python123 |
      | Sql@gmail      | sql456    |
      | Selenium@gmail | selen780  |
