1. Write simple program for unique elements in array.

Url:localhost:3000/Api/Create/getUniqueNo,
Methode:POST
"array":[1,2,5,6,5,1,3,5,2,9,8,4,7]


2. Write a function that takes input two dates as string (in yyyy-mm-dd format) and calculates difference of dates between them. For simplicity purpose, assume you have 30 days for every month the second date is always after the first date.

Url:localhost:3000/Api/Create/getDate,
Methode:POST
"Date1":"2022-04-25",
"Date2":"2023-04-04"

3.Write simple program to find third largest element in array.

Url:localhost:3000/Api/Create/getThirdLargest,
Methode:POST
"inputArr":[77,55,66,22,11,102,1,3,4,5]

4. Write a program to move array elements to the left. The first element becomes the last element.

Url:localhost:3000/Api/Create/moveElementToLeft,
Methode:POST
"moveArr":[1,2,5,4,6,8,7,1,3]

5. Schedule period is defined as day of week in number (Monday – 1, Tuesday – 2, ... Sunday – 7), from hour (1 – 24) and end hour (1-24). There is a schedule period available and an array of previous schedules are provided. You need to validate whether the new schedule can be added into the array if the new schedule is not overlapping with the existing schedule or the end hour is after start hour.

Url:localhost:localhost:3000/Api/Create/scheduleValidation,
Methode:POST
"newSchedule":{"dayOfWeek":4,"fromHour":7,"toHour":10},
"previousSchedules":[{"dayOfWeek":1,"fromHour":7,"toHour":10},{"dayOfWeek":2,"fromHour":9,"toHour":18}]

6. You are provided with two array of data. You have to calculate the matching score. Matching score is calculated using the below formula and rounded off to whole number.

Url:localhost:localhost:3000/Api/Create/calculateMatchArr,
Methode:POST
"Arr1":[1,2,3,4],
"Arr2":[5, 6, 3, 2, 8]

7. Write backend API and simple unit test for Create campus management system.

Url:localhost:3000/Api/Register,
Methode:POST,

localhost:3000/Api/Login,
Methode:POST
\*Register and Login/Logout (User)

    "username":"Suresh",
    "password":"224872"

\*Campus

     1.Add Campus

         localhost:3000/Api/Campus/create,
         Methode:POST
         "name":"RVS",
         "status":"active"

     2.Get Campus

         localhost:localhost:3000/Api/Campus/get,
         Methode:GET

     3.Edit Campus

           localhost:3000/Api/Campus/edit/:id        //(Ex:-64f3574419ef50ae65ac556c),
           Methode:PUT
          "name":"Power",
          "status":"active"

     4.Delete Campus

           localhost:3000/Api/Campus/delete/:id        //(Ex:-64f3574419ef50ae65ac556c),
           Methode:DELETE

\*Building

     1.Add Building

         localhost:3000/Api/Building/create,
         Methode:POST
         "campusId":"64f3574419ef50ae65ac556c",       //refer by Campus module
         "name":"Building One",
         "status":"active"

     2.Get Campus

         localhost:3000/Api//Building/get,
         Methode:GET

     3.Edit Campus

           localhost:3000/Api/Building/edit/        //(Ex:-64f30a735c95957b685d92ca),
           Methode:PUT
          "campusId":"64f3088d8f7078fd8c2f638f",
          "name":"Building Two",
          "status":"active"

     4.Delete Campus

           localhost:3000/Api/Building/delete        //(Ex:-64f30a735c95957b685d92ca),
           Methode:DELETE
