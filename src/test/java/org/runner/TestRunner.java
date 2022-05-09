package org.runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvmreport.JVM;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources", glue="org.stepdef", monochrome=true,
				dryRun=false, strict=true, snippets=SnippetType.CAMELCASE, 
				plugin= {"html:target", "junit:JUnitReports\\junitrep.xml", "json:JsonReports\\jsonrep.json",
						"rerun:src/test/resources/Failure.txt"})

public class TestRunner { 

	@AfterClass
	public static void generateJvmReport() {
		
		JVM.generateJvm("C:\\Users\\Mugesh G\\eclipse-workspace\\Cucumber12Pm\\JsonReports\\jsonrep.json");
	}
	
}
