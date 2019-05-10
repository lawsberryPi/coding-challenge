##### Shawn's solution for Ambassador Coding Challenge
#### Code Discription

###	Description of the problem and solution.
- This problem is a typical CRUD problem, user can manage their referral links using this portal easily. 
  - The api need to be able to handle HTTP GET, POST and DELETE requests.
  - The front end should be intuitive, responsive and be able to perform table sorting. 
  - The back end should be able to handle create, read, update and delete operations.
- Whether the solution focuses on back-end, front-end, full stack, or mobile.
  - The solution is focused on full stack. 
-	Reasoning behind your technical choices, including architecture.
    - Architecture: ASP.NET MVC(model–view–controller) is a RESTful framework, Model represents shape of the data and business logic, it is a C# class in our application; View is a user interface, it is implemented by React & Redux; Controller handles the user request, the class inherites .NET MVC Controller class so the framework handles requests for you. MVC is a loosely coupled framework therefore it is easy to write unit test. Another reason I chose ASP.NET core because I did't have enough time to learn Django REST api and I am most familiar with C#, thus I was able to develop the Referral Application rapidly.
    - View(React&Redux): I chose React & Redux which is recommanded by Ambassador, and I am also pretty familar with it. On top of it, I used Material UI to create a beautiful and responsive UI. I really like react and react & redux, because they makes the state predictable; it is easy to maintain, because the heavy logics are in mutation and dispatch. it is also easy to test, we can call the mutation and dispatch from unit test code easily. I used AXIOS to implement the fully RESTful architecture, it handles httpGet, httpPost, and httpDelete, and it is promise-based. The returned json data is processed in the promise delegation.
    - Controller(C#): In MVC framework the controller has The Select Tag Helper [HttpPost],  [HttpGet], [HttpDelete] to receive the http requests. The data is stored in a static list in my controller, due to the time limit, I had no time to setup a database. I use Linq to query the data, because it is very easy to use, it integrats query capabilities directly into the C# language. As a part of MVC All the data type are managed in the Model class. 
    - Model(C#): Since it is a small project, so the Model class is relative simple, just keep in track with the LinkUrl and count the clicks.  
  
-	Trade-offs you might have made
    - First of all, the trade off for using ASP.NET MVC is the techology is not used by Ambassador.
    - The disadvatange for asp.net is there is not too much third party support, not as convenient as Python frameworks, you just need to use pip to manage the packages
- Anything you left out, or what you might do differently if you were to spend additional time on the project.
  - I didn't have enough time to do the unit test.
- Link to the hosted application (where applicable).
    - https://shawn-code-challenge20190509092616.azurewebsites.net/ 

#### Deployment Choice

https://shawn-code-challenge20190509092616.azurewebsites.net/ is my link, I have deployed on Azure. The reason is I had no time to learn deploy ASP.NET core on Heroku; This week was not a good week for me,we have a Ford vice-president level leader to visit our team, and we had to perform a demostration, I had a lots of overtime, so I had no time to learn Heroku asp.net deployment. But I do have an unfinished project that is deployed in Heroku

## Show us your other projects! (optional)
a website I am trying to build for my fiance, just started it.
https://lit-cove-89268.herokuapp.com/
It is supposed to be a E-commerce page to promote her design shop, the project is written in node.js and vue.js
