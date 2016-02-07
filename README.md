Welcome to TakeMeTour's Job Quest
===

Thank you for your application. First, we would like to take a simple test on your JavaScript skill. 

Choose to do one (or both) of frontend and backend tasks. Please fork me and submit your repository at [WantToWork@takemetour.com](mailto:WantToWork@takemetour.com) by **Monday February 8th, 2016 23:59 GMT+7**. 

Frontend Task
---
![Designed page](https://raw.github.com/PanJ/job-quest/master/frontend/design.png)

- Given the [designed page](https://raw.github.com/PanJ/job-quest/master/frontend/design.png), please write HTML and CSS accordingly
- Font used is [Roboto](https://www.google.com/fonts#UsePlace:use/Collection:Roboto)
- Please take a look at API [https://www.takemetour.com/api/home](https://www.takemetour.com/api/home) and use data from the API to display the inspiration section using JavaScript

**Bonus points**

- Write the stylesheet in SASS
- Support mobile screen (responsive)
- Use Browserify or Webpack

**Question**

Please explain what is single-page application and how it work. Give examples of tools used to make SPAs.

*\<single-page application คือการแสดงผลหน้าเว็บไซต์ในรูปแบบต่างๆ ภายในหน้าเดียว โดยไม่จำเป็นต้อง Refresh page เมื่อมี Event ต่างๆ บนหน้าเว็บไซต์ เราสามารถทำ single-page application โดยใช้ AJAX มาช่วยได้ การทำงานของ AJAX คือมันจะโหลดข้อมูลมาแสดงผลตามตำแหน่งที่เราต้องการโดยไม่ต้อง Refresh page >*

Backend Task
---
- Develop a simple API to serve trip information
- API endpoints consists of
  - `GET /trips` list all trips (only trip `name` and `_id`)
  - `POST /trips` create new trip
  - `GET /trips/:id` get trip detail (all fields)
  - `PUT /trips/:id` update trip
  - `DELETE /trips/:id` delete trip
- Trip data consists of
  - `String` name
  - `Number` price
  - `String` description

**Bonus points**

- Use promise instead of async callback
- Use ES2015 syntax

**Question**

What is the difference between MongoDB and MySql?

*\<ความแตกต่างระหว่าง MangoDB กับ MySQL คือ MySQL จะต้องใช้ภาษา SQL ที่เป็นภาษามาตรฐานที่ใช้กันมานานแล้วในการจัดการกับ DB ส่วน MangoDB จะไม่ได้ใช้ภาษา SQL จัดการแต่จะใช้ภาษาเฉพาะของตัวมันเอง และ MangoDB เป็น NoSQL ซึ่งมีความเร็วสูงกว่า MySQL เป็นอย่างมากสามารถรองรับการเข้าถึงข้อมูลจำนวนมากได้ดีกว่า MySQL >*
