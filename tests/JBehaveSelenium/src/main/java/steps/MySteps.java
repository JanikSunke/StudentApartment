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

public class MySteps extends Steps {
	private String[] urls = new String[]{"http://localhost:3000/", "https://janiksunke.github.io/StudentApartment/"};
	private String getSiteUrl(){
		return urls[1];
	}

	private static WebDriver driver = null;
	
	@Given("the browser is open")
	public void openBrowser () {
		
		if (driver == null) {
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

	@When("I type $content in $selector")
	public void typeContent(String content, String selector){
		browserWaitForElement(selector);
		WebElement field = driver.findElement(By.cssSelector(selector));
		System.out.println("Found element");
		browserWaitForElement(field);
		System.out.println("Will click element");
		field.click();
		field.sendKeys(content);
	}

	@When("I click $selector")
	public void clickOn(String selector){
		WebElement searchField = driver.findElement(By.cssSelector(selector));
		browserWaitForElement(searchField);
		searchField.click();
		waitForFullLoad();
	}

	@When("I search for $query")
	public void searchFor (String query) {
		WebElement cookieOption = driver.findElement(By.xpath("//*[@id=\"W0wltc\"]/div"));
		WebElement searchField = driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input"));
		WebElement searchButton = driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[2]/div[2]/div[5]/center/input[1]"));
		cookieOption.click();
		searchField.sendKeys(query);
		searchField.sendKeys(" ");
		searchButton.click();
	}

	@Then("the URL should be $url")
	public void checkUrl(String url){
		Assert.assertEquals(url, driver.getCurrentUrl());
	}

	@Then("the content $content is displayed")
	public void checkContent (String content) {
		Assert.assertTrue("Page contain content?",driver.getPageSource().contains(content));
	}


	private void browserWaitForElement(String selector){
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