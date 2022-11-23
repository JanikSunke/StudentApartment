Sample story

Narrative:
As a web user
I want to do a search
In order to find a webpage
					 
Scenario: Browse AlexanderNorup.com to calculate TAX
Given the browser is open
And the page https://www.alexandernorup.com/ is displayed
And I accept cookies
When I click .projectCenter:nth-of-type(3)
And I type 10 in #totalPrice
Then the content EU Shipping Tax Calculator is displayed
And the content You end up paying: is displayed