##### Shawn's solution for Ambassador Coding Challenge
#### Code Discription

##	Description of the problem and solution.
- This problem is a typical CRUD problem
  - The RESTful application need to be able to handle HTTP GET, POST and DELETE requests.
  - The front-end makes requests and parse the response data from backend, it should be intuitive, responsive.
  - The back-end should be able to handle create, read, update and delete operations. Sort data, manipulate data.
- Whether the solution focuses on back-end, front-end, full stack, or mobile.
  - The solution is focused on full stack. 
  - I have implemented all the requred features including add, edit, delete columns, sort table, and redirect to links, I also have a home button in the navigator, so user can navigate back to the main page.
-	Reasoning behind your technical choices, including architecture.
    - Architecture: ASP.NET MVC(model–view–controller) is a RESTful framework, Model represents shape of the data and business logic, it is a C# public class in our application; View(is called ClientApp in our application) is a user interface, it is implemented by React & Redux; Controller handles the user request, the class inherites .NET MVC Controller class so the framework handles requests for you. MVC is a loosely coupled framework therefore it is easy to write unit test. Another reason I chose ASP.NET core because I did't have enough time to learn Django REST api and I am most familiar with C#, thus I was able to develop the Referral Application rapidly.
    - View(React&Redux): I chose React & Redux which is recommanded by Ambassador, and I am also familar with React & Redux. On top of it, I used Material UI to create a beautiful and responsive UI. I really like react & redux, because they makes the state predictable; it is easy to maintain. it is also easy to test, we can call the mutation and dispatch from unit test code easily. I used Axios to implement the fully RESTful architecture, it handles httpGet, httpPost, and httpDelete requests, and it is also promise-based, therefore, the returned json data is processed in the promise delegation.
    - Controller(C#): In MVC framework the controller has The Select Tag Helper, i.e. [HttpPost],  [HttpGet], [HttpDelete] to receive the http requests. Due to the time limit, I had no time to setup a database, so data is stored in a static list in the controller class. I used Linq to query the data, because it is very easy to use, it integrats query capabilities directly into the C# language. 
    - Model(C#): As a part of MVC, All the data types are managed in the Model class. Since it is a small project, so the Model class is relative simple, just defines the LinkUrl and the count of clicks.  
  
-	Trade-offs you might have made
    - First of all, the trade off for using ASP.NET MVC is the techology is not used by Ambassador.
    - The disadvatange for asp.net is there is not too much third party support or libraries, not as convenient as Python frameworks, you just need to use pip to manage the packages
- Anything you left out, or what you might do differently if you were to spend additional time on the project.
  - I didn't have enough time to do the unit test.
- Link to the hosted application (where applicable).
    - https://shawn-code-challenge20190509092616.azurewebsites.net/ 

## Deployment Choice

https://shawn-code-challenge20190509092616.azurewebsites.net/ is my link, I have deployed on Azure. The reason is I had no time to learn how to deploy ASP.NET core on Heroku; This week was not a good week for me,we had a Ford vice-president level leader visiting our team, and we had to demo our works to the leadership, I had a lots of overtime. But I do have an unfinished project that is deployed in Heroku

## Show us your other projects! (optional)
A website I am trying to build for my fiance, just started it.
https://lit-cove-89268.herokuapp.com/
It is supposed to be a E-commerce page to promote her design shop, the project is written in node.js and vue.js
