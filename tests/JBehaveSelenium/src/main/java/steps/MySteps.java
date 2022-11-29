package steps;

import org.jbehave.core.annotations.AfterStory;
import org.jbehave.core.annotations.Given;
import org.jbehave.core.annotations.Then;
import org.jbehave.core.annotations.When;
import org.jbehave.core.steps.Steps;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.List;

public class MySteps extends Steps {
	private String[] urls = new String[]{"http://localhost:3000/", "https://janiksunke.github.io/StudentApartment/"};
	private String getSiteUrl(){
		return urls[0];
	}

	private static final boolean doSlowRunthrough = false;

	private static WebDriver driver = null;
	private static WebDriver getDriver(){
		if(doSlowRunthrough) {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				System.out.println("Interrupted sleep!");
			}
		}
		return driver;
	}
	
	@Given("the browser is open")
	public void openBrowser () {
		
		if (getDriver() == null) {
			System.setProperty("webdriver.chrome.driver", "src/main/java/chromedriver_win32_107.exe");
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--disable-extensions");
			driver = new ChromeDriver(options);
			driver.manage().window().maximize();
		}
		driver.manage().deleteAllCookies();

	}

	@Given("the student apartments site is displayed in the browser")
	public void browseStudentApartments(){
		openBrowser();
		navigateToPage(getSiteUrl());
		final String homeLink = "#basic-navbar-nav > div > a:nth-child(1)";

		browserWaitForElement(homeLink);
		clickOn(homeLink);

		waitForFullLoad();
	}

	@Given("the admin is logged in")
	public void adminLogin(){
		attemptLogin("admin", "admin");
		browserWaitForElement("#logoutBtn");
	}

	@Given("the page $site is displayed")
	public void navigateToPage (String site) {
		driver.get(site);
	}

	@Given("I accept cookies")
	public void acceptCookies(){
		clickOn("body > div.cc-window.cc-banner.cc-type-info.cc-theme-block.cc-bottom.cc-color-override-414096280 > div > a");

		waitForFullLoad();
	}

	@When("I wait for the page to load")
	public void waitForPageLoad(){
		waitForFullLoad();
	}

	@When("I close the modal")
	public void closeModal(){
		clickOn("div.modal-header > button");
	}

	@When("I type $content in $selector")
	public void typeContent(String content, String selector){
		browserWaitForElement(selector);
		WebElement field = getDriver().findElement(By.cssSelector(selector));
		browserWaitForElement(field);
		field.click();
		field.clear();
		field.sendKeys(content);
	}

	@When("I try logging in using $username and $password")
	public void attemptLogin(String username, String password){
		clickOn("#loginBtn");
		browserWaitForElement("#email");
		typeContent(username, "#email");
		typeContent(password, "#password");
		clickOn("#loginModalBtn");
	}

	@When("I create a new account named $name with the credentials $username and $password")
	public void createAccount(String name, String username, String password){
		clickOn("#createAccountBtn");
		browserWaitForElement("#createEmail");
		typeContent(name, "#fullname");
		typeContent(username, "#createEmail");
		typeContent(password, "#createPassword");
		clickOn("#terms"); //Accept terms of use
		clickOn("#createAccountModalBtn");
		browserWaitForElement("#createAccountBtn"); //Just makes sure the modal closes completely
	}

	@When("I click $selector")
	public void clickOn(String selector){
		WebElement searchField = getDriver().findElement(By.cssSelector(selector));
		browserWaitForElement(searchField);
		searchField.click();
		waitForFullLoad();
	}

	@When("I sign the shown contract")
	public void signContract(){
		browserWaitForElement("#contractName");
		typeContent("Jens Kristian", "#contractName");
		clickOn("#signContractBtn");
		waitForFullLoad();
	}

	@When("I search for $city")
	public void searchForCity(String city){
		browserWaitForElement("#searchForProperties");
		typeContent(city, "#searchForProperties");
	}

	@Then("the URL should be $url")
	public void checkUrl(String url){
		Assert.assertEquals(url, driver.getCurrentUrl());
	}

	@Then("the content $content is displayed")
	public void checkContent (String content) {
		Assert.assertTrue("Page contain content?",getDriver().getPageSource().contains(content));
	}

	@Then("the content $content is not displayed")
	public void checkNoContent (String content) {
		Assert.assertFalse("Page contain content?",getDriver().getPageSource().contains(content));
	}

	@Then("the content $content is displayed inside $selector")
	public void checkContent (String content, String selector) {
		String sourceToCheck = driver.findElement(By.cssSelector(selector)).getAttribute("innerHTML");
		Assert.assertTrue("Page contain content?",sourceToCheck.contains(content));
	}

	@Then("the content $content is not displayed inside $selector")
	public void checkNoContent (String content, String selector) {
		String sourceToCheck = driver.findElement(By.cssSelector(selector)).getAttribute("innerHTML");
		Assert.assertFalse("Page does not contain content?",sourceToCheck.contains(content));
	}

	@Then("there should be $num visible properties")
	public void checkNumApartments(int num){
		WebElement propertiesContainer = getDriver().findElement(By.cssSelector("#propertiesContainer"));
		browserWaitForElement(propertiesContainer);

		List<WebElement> allProperties = propertiesContainer.findElements(By.cssSelector(".card"));

		Assert.assertTrue("Expected number of properties",allProperties.size() == num);
	}

	@When("I wait for the $selector element to be visible")
	public void browserWaitForElement(String selector){
		new WebDriverWait(driver, Duration.of(30, ChronoUnit.SECONDS)).until(
				ExpectedConditions.elementToBeClickable(By.cssSelector(selector)));
	}

	private void browserWaitForElement(WebElement element){
		new WebDriverWait(driver, Duration.of(30, ChronoUnit.SECONDS)).until(
				ExpectedConditions.elementToBeClickable(element));
	}

	private void waitForFullLoad(){
		new WebDriverWait(driver, Duration.of(30, ChronoUnit.SECONDS)).until(
				webDriver -> ((JavascriptExecutor) webDriver).executeScript("return document.readyState").equals("complete"));
	}

	@AfterStory
	public void closeSession() {
		driver.quit();
		driver = null;
	}
	
}