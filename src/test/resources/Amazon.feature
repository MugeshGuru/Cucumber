@Feature1 @Feature2
Feature: To validate the Login functionality of Amazon application

Background:
		Given To launch the Browser and url
		
@Smoke
Scenario: To validate the invalid username and invalid password
	
		When To pass the invalid username 
		And To click the continue option
		And To pass the invalid password
		And To click the SignIn button
		Then To close the current page
		
Scenario: To validate the valid username and password
		When User has to pass the valid id
		And User has to click the continue button
		And User has to pass the valid pw
		And User has to click SignIn option
		Then User has to close the page
	
		
		

