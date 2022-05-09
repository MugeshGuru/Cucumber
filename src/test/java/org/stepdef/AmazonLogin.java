package org.stepdef;

import org.base.BaseClass;
import org.junit.Assert;
import org.loc.AmazonPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class AmazonLogin extends BaseClass{
	AmazonPojo a;
	@Given("To launch the Browser and url")
	public void to_launch_the_Browser_and_url() {
	 
	   urlLaunch("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&");
	}

	@When("To pass the invalid username")
	public void to_pass_the_invalid_username() {
		a = new AmazonPojo();
	   fillText(a.getTxtEmail(), "arun@gmail.com");
	}

	@When("To click the continue option")
	public void to_click_the_continue_option() {
		a = new AmazonPojo();
		btnClick(a.getClkContinue());
	}

	@When("To pass the invalid password")
	public void to_pass_the_invalid_password() {
		a = new AmazonPojo();
		fillText(a.getTxtPass(), "2345678899");
	}

	@When("To click the SignIn button")
	public void to_click_the_SignIn_button() {
		Assert.assertTrue(false);
		a = new AmazonPojo();
		btnClick(a.getClkSignIn());
		
		
	}

	@Then("To close the current page")
	public void to_close_the_current_page() {
	   System.out.println("Close Amazon Browser");
	}

	//================//============
	

@When("User has to pass the valid id")
public void userHasToPassTheValidId() {
		a = new AmazonPojo();
	   fillText(a.getTxtEmail(), "Varun@gmail.com");
}

@When("User has to click the continue button")
public void userHasToClickTheContinueButton() {
	a = new AmazonPojo();
	btnClick(a.getClkContinue());
}

@When("User has to pass the valid pw")
public void userHasToPassTheValidPw() {
	a = new AmazonPojo();
	fillText(a.getTxtPass(), "12345abcd");
}

@When("User has to click SignIn option")
public void userHasToClickSignInOption() {
	
	a = new AmazonPojo();
	btnClick(a.getClkSignIn());
}

@Then("User has to close the page")
public void userHasToCloseThePage() {
  System.out.println("Close Amazon 2");
}

	
}
