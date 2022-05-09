package org.stepdef;

import org.base.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass{

	@Before(order=5)
	public void browser2() {
		browserLaunch();
		windowMax();
		System.out.println("Hooks Before");
	}
	@Before(order=10)
	public void browser3() {
		findSysdate();	
	}
	//-------------------------------------------
	
	@After(order=35)
	public void close2() {
		System.out.println("Hooks After");
		closeBrowser();
	}
	@After(order=45)
	public void close3(Scenario s) {
		
		if (s.isFailed()) {
			
			TakesScreenshot ts = (TakesScreenshot)driver;
			byte[] ss = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(ss, "image/png");
			System.out.println("Failure :"+s.getName());
		}
		
		
	}
	
	
	
	
	
	
	
	
	
}
