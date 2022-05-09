package org.loc;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AmazonPojo extends BaseClass{

	public AmazonPojo() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="ap_email")
	private WebElement txtEmail;
	
	@FindBy(id="continue")
	private WebElement clkContinue;
	
	@FindBy(name="password")
	private WebElement txtPass;
	
	@FindBy(id="signInSubmit")
	private WebElement clkSignIn;

	public WebElement getTxtEmail() {
		return txtEmail;
	}

	public WebElement getClkContinue() {
		return clkContinue;
	}

	public WebElement getTxtPass() {
		return txtPass;
	}

	public WebElement getClkSignIn() {
		return clkSignIn;
	}
	
	
	
}
