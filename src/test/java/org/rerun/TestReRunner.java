package org.rerun;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="@C:\\Users\\Mugesh G\\eclipse-workspace\\Cucumber12Pm\\src\\test\\resources\\Failure.txt",
glue="org.stepdef")
public class TestReRunner {

	
}
