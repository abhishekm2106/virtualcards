# Live hosted link

https://virtualcards-abhishek.netlify.app/

## How to setup in your local

1) first clone this repo
2) the open terminal in root folder,then run command "npm install"
3) then run "npm start"

## Some things to keep in mind

When user clicks on your tab they can see cards belonging to them through owner_id 
(this owner id set to "1" by default,in real world application it would come from user Auth object)

All the data is comming from "data.js" under "./src" ,we can edit and add new data through that file (inconsistent data might break the application ans exception handling is not yet implemented),in an actual app it would be fetched from some API, but as this was a frontend project i have used static data.
