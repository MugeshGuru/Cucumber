package org.stepdef;

import java.util.List;
import java.util.Map;

import org.base.BaseClass;
import org.loc.LoginPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FaceBookLogin extends BaseClass{ // Scenario
	
	LoginPojo l;
	@Given("User has to launch the Browser and hit the url")
	public void user_has_to_launch_the_Browser_and_hit_the_url() {
	    
	    urlLaunch("https://www.facebook.com/"); 
	}

	@When("User has to pass the valid username to the Email field")
	public void user_has_to_pass_the_valid_username_to_the_Email_field(io.cucumber.datatable.DataTable d) {
		l = new LoginPojo();
		Map<String, String> mp = d.asMap(String.class, String.class);
		fillText(l.getTxtEmail(), mp.get("Email3"));
	}

	@When("User has to pass the invalid password to password field")
	public void user_has_to_pass_the_invalid_password_to_password_field(io.cucumber.datatable.DataTable d) {
		l = new LoginPojo();
		List<Map<String, String>> mp = d.asMaps();
		fillText(l.getTxtPass(), mp.get(2).get("Password2"));
	}

	@When("User has to click the Login button")
	public void user_has_to_click_the_Login_button() {
		l = new LoginPojo();
		btnClick(l.getBtnClick());
	}

	@When("User has to navigate to the Invalid credentials page")
	public void user_has_to_navigate_to_the_Invalid_credentials_page() {
	    System.out.println("User navigate to Invalid credential page");
	}

	@Then("User has to close the Browser")
	public void user_has_to_close_the_Browser() {
	  // closeBrowser();
		System.out.println("Close Browser");
	}


	
}
