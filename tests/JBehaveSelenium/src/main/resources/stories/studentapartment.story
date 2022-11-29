Student Apartments story

Narrative:
As a student
I want to find an apartment
In order to have a place to live when I study

Scenario: Site can load and menu bar is shown
Given the student apartments site is displayed in the browser
When I wait for the page to load
Then the content Student Apartments is displayed

Scenario: Login using existing user
Given the student apartments site is displayed in the browser
When I try logging in using jens@gmail.com and jens123
Then the content My Profile is displayed inside .navbar

Scenario: Create account and use it to login
Given the student apartments site is displayed in the browser
When I try logging in using palle@gmail.com and verysecurepassword
Then the content Wrong username or password is displayed inside .modal-body
And the content My Profile is not displayed inside .navbar
When I close the modal
And I create a new account named Palle with the credentials palle@gmail.com and verysecurepassword
And I try logging in using palle@gmail.com and verysecurepassword
Then the content My Profile is displayed inside .navbar

Scenario: List property using visible as admin
Given the student apartments site is displayed in the browser
When I try logging in using jens@gmail.com and jens123
Then the content List your property is not displayed inside .navbar
When I click #logoutBtn
When I try logging in using admin and admin
Then the content List your property is displayed inside .navbar

Scenario: List property as admin
Given the student apartments site is displayed in the browser
And the admin is logged in
When I click #listPropertyBtn
And I wait for the #address element to be visible
And I type Landmandsgade 29 in #address
And I type Very nice apartment in #descriptionField
And I click #listApartmentSubmit
Then the content Landmandsgade 29 is displayed
And the content Very nice apartment is displayed

Scenario: Remove apartment from favorites
Given the student apartments site is displayed in the browser
When I try logging in using jens@gmail.com and jens123
And I click #myProfileBtn
And I click #profileFavoritesBtn
Then the content Nørregade is displayed
When I click .deleteFavoriteApartmentBtn
Then the content Nørregade is not displayed

Scenario: Sign contract
Given the student apartments site is displayed in the browser
When I try logging in using jens@gmail.com and jens123
And I click #myProfileBtn
And I click #profileContractsBtn
And I sign the shown contract
Then the content You have accepted Nørrevej 16 is displayed

Scenario: Reset password
Given the student apartments site is displayed in the browser
When I try logging in using jens@gmail.com and wrongPassword
Then the content Wrong username or password is displayed inside .modal-body
When I click #forgotPasswordBtn
And I type jens@gmail.com in #resetPasswordEmail
And I click #resetModalBtn
And I close the modal
And I try logging in using jens@gmail.com and resetPassword123
Then the content My Profile is displayed inside .navbar

Scenario: Search for apartments
Given the student apartments site is displayed in the browser
When I try logging in using jens@gmail.com and jens123
And I click #propertyForSaleBtn
Then there should be 9 visible properties
When I search for odense
Then there should be 6 visible properties
When I search for københavn
Then there should be 3 visible properties
When I search for the moon
Then there should be 0 visible properties