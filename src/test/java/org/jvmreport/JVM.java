package org.jvmreport;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVM {

	public static void generateJvm(String json) {
		
		// File Location
		File f = new File("C:\\Users\\Mugesh G\\eclipse-workspace\\Cucumber12Pm\\JVMReports");
		
		// Add details to the report using Configuration class
		
		Configuration c = new Configuration(f, "Amazon & FaceBook");
		c.addClassifications("Platform Name ", "Windows");
		c.addClassifications("Platform version ", "10");
		c.addClassifications("Browser Name ", "Chrome");
		c.addClassifications("Browser version ", "99");
		c.addClassifications("Sprint ", "3");
		
		// Add json file paths into List<String>
		List<String> l = new ArrayList<String>();
		l.add(json);
		
		// Create object for ReportBuilder clas
		ReportBuilder r = new ReportBuilder(l, c);
		
		r.generateReports();
	}
}
