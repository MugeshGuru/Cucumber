$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Amazon.feature");
formatter.feature({
  "name": "To validate the Login functionality of Amazon application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the Browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonLogin.to_launch_the_Browser_and_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the invalid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "To pass the invalid username",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonLogin.to_pass_the_invalid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the continue option",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.to_click_the_continue_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.to_pass_the_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.to_click_the_SignIn_button()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdef.AmazonLogin.to_click_the_SignIn_button(AmazonLogin.java:40)\r\n\tat ✽.To click the SignIn button(file:src/test/resources/Amazon.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To close the current page",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLogin.to_close_the_current_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the Browser and url",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonLogin.to_launch_the_Browser_and_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the valid username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Feature2"
    }
  ]
});
formatter.step({
  "name": "User has to pass the valid id",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonLogin.userHasToPassTheValidId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.userHasToClickTheContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the valid pw",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.userHasToPassTheValidPw()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click SignIn option",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonLogin.userHasToClickSignInOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the page",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonLogin.userHasToCloseThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FaceBook.feature");
formatter.feature({
  "name": "To validate the Login Functionality of FaceBook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to launch the Browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FaceBookLogin.user_has_to_launch_the_Browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with Valid username and Invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to pass the valid username to the Email field",
  "rows": [
    {
      "cells": [
        "Email1",
        "abc@gmail"
      ]
    },
    {
      "cells": [
        "Email2",
        "xyz@gmail"
      ]
    },
    {
      "cells": [
        "Email3",
        "lmn@gmail"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "FaceBookLogin.user_has_to_pass_the_valid_username_to_the_Email_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the invalid password to password field",
  "rows": [
    {
      "cells": [
        "Password1",
        "Password2",
        "Password3"
      ]
    },
    {
      "cells": [
        "jsjiisnl",
        "893898833",
        "fdsgtfgef"
      ]
    },
    {
      "cells": [
        "fdfstasdf",
        "23423242",
        "324434324"
      ]
    },
    {
      "cells": [
        "jdioowdjd",
        "ijijsdss",
        "356565755"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLogin.user_has_to_pass_the_invalid_password_to_password_field(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLogin.user_has_to_click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to navigate to the Invalid credentials page",
  "keyword": "And "
});
formatter.match({
  "location": "FaceBookLogin.user_has_to_navigate_to_the_Invalid_credentials_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FaceBookLogin.user_has_to_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To Validate the Positive \u0026 Negative combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To pass the value to \"\u003cUserName\u003e\" username",
  "keyword": "When "
});
formatter.step({
  "name": "To pass the Value to \"\u003cPassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "name": "To Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "To has to close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "java@gmail",
        "java123"
      ]
    },
    {
      "cells": [
        "Python@gmail",
        "python123"
      ]
    },
    {
      "cells": [
        "Sql@gmail",
        "sql456"
      ]
    },
    {
      "cells": [
        "Selenium@gmail",
        "selen780"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to launch the Browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FaceBookLogin.user_has_to_launch_the_Browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Positive \u0026 Negative combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To pass the value to \"java@gmail\" username",
  "keyword": "When "
});
formatter.match({
  "location": "FbCombination.to_pass_the_value_to_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the Value to \"java123\" password",
  "keyword": "And "
});
formatter.match({
  "location": "FbCombination.to_pass_the_Value_to_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbCombination.to_Click_the_Login_button()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdef.FbCombination.to_Click_the_Login_button(FbCombination.java:30)\r\n\tat ✽.To Click the Login button(file:src/test/resources/FaceBook.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To has to close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbCombination.to_has_to_close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to launch the Browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FaceBookLogin.user_has_to_launch_the_Browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Positive \u0026 Negative combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To pass the value to \"Python@gmail\" username",
  "keyword": "When "
});
formatter.match({
  "location": "FbCombination.to_pass_the_value_to_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the Value to \"python123\" password",
  "keyword": "And "
});
formatter.match({
  "location": "FbCombination.to_pass_the_Value_to_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbCombination.to_Click_the_Login_button()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdef.FbCombination.to_Click_the_Login_button(FbCombination.java:30)\r\n\tat ✽.To Click the Login button(file:src/test/resources/FaceBook.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To has to close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbCombination.to_has_to_close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to launch the Browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FaceBookLogin.user_has_to_launch_the_Browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Positive \u0026 Negative combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To pass the value to \"Sql@gmail\" username",
  "keyword": "When "
});
formatter.match({
  "location": "FbCombination.to_pass_the_value_to_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the Value to \"sql456\" password",
  "keyword": "And "
});
formatter.match({
  "location": "FbCombination.to_pass_the_Value_to_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbCombination.to_Click_the_Login_button()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdef.FbCombination.to_Click_the_Login_button(FbCombination.java:30)\r\n\tat ✽.To Click the Login button(file:src/test/resources/FaceBook.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To has to close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbCombination.to_has_to_close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to launch the Browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FaceBookLogin.user_has_to_launch_the_Browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Positive \u0026 Negative combinations",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To pass the value to \"Selenium@gmail\" username",
  "keyword": "When "
});
formatter.match({
  "location": "FbCombination.to_pass_the_value_to_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the Value to \"selen780\" password",
  "keyword": "And "
});
formatter.match({
  "location": "FbCombination.to_pass_the_Value_to_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbCombination.to_Click_the_Login_button()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdef.FbCombination.to_Click_the_Login_button(FbCombination.java:30)\r\n\tat ✽.To Click the Login button(file:src/test/resources/FaceBook.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To has to close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbCombination.to_has_to_close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});