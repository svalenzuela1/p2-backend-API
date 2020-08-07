# Project Overview

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description, Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Begin Working On Back-end | Complete
|Day 3| Working RestAPI | Complete
|Day 4| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 5| MVP & Bug Fixes | Complete
|Day 6| Final Touches and Present | Complete

## Project Description

For this project, I will be making an e-commerce website for videogames. I will begin my backend api that will be responsible for bringing in the images or gifs to the front-end. I will then utilize jQuery to make on click buttons to have totals add up. 

## Time/Priority Matrix 
[Prioritized](https://res.cloudinary.com/stephaniev/image/upload/v1596221373/BACKEND_-_Time_Priority_Matrix_tvbp0q.png) 

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Models | H | 4hrs | 8hr | 8hr|
| Routes | H | 4hrs | 6hr | 6hr|
| CRUD | H | 4hrs | 10hrs | 10hrs|
| MongoDB | H | 2hrs | 3hrs | 3hrs|
| Deployment | H | 1hr | 1hr | 1hr|
| Total | H | 15hrs| 28hrs | 28hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Debugging | H | 10hrs | 8hrs | 8hrs|
| Connection to Front-end | H | 5hrs | 1hr | 1hr|
| Total | H | 10hrs| 9hrs | 9hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
const addItemToCart = async (req, res) => {
    try{
    const cart = await cartModel.findById(req.params.id)
    cart.product.push(req.body.productToAdd)
    await cart.save()
    const updatedCart = await cartModel.findById(req.params.id).populate("product")
    res.json(updatedCart)
    }catch(error){
        res.status(400).send(error)
    }
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: Failed to load resource: net::ERR_CONNECTION_REFUSED
main.js:26 Uncaught (in promise) TypeError: Failed to fetch

**RESOLUTION**: Fetching from wrong database and did not use dot accessor. 

## Previous Project Worksheet
 - [Readme's](https://github.com/jkeohan/fewd-class-repo/tree/master/final-project-worksheet/project-worksheet-examples)
 - [Best of class readme](https://github.com/jkeohan/fewd-class-repo/blob/master/final-project-worksheet/project-worksheet-examples/portfolio-gracie.md)
