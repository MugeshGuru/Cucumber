package org.stepdef;

import org.base.BaseClass;
import org.junit.Assert;
import org.loc.LoginPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FbCombination extends BaseClass { // Scenario Outline

	LoginPojo l;
	

	@When("To pass the value to {string} username")
	public void to_pass_the_value_to_username(String email) {
		l = new LoginPojo();
	   fillText(l.getTxtEmail()	, email);
	}

	@When("To pass the Value to {string} password")
	public void to_pass_the_Value_to_password(String pass) {
		l = new LoginPojo();
		fillText(l.getTxtPass(), pass);
	}

	@When("To Click the Login button")
	public void to_Click_the_Login_button() {
		Assert.assertTrue(false);
		l = new LoginPojo();
		btnClick(l.getBtnClick());
	}

	@Then("To has to close the Browser")
	public void to_has_to_close_the_Browser() {
		System.out.println("Scenario Outline closed");
	  
	   
	}


	
}
