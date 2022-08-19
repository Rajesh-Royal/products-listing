#Catalogs
* Catalog object
```
{
  Id: number
  Maker: string
  img: string
  Url: string
  Title: string
  Description: string
  Ratings: number[] | null
}
```
**GET /catalogs**
----
  Returns all Catalogs in the DB.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  data: [
           {<catalog_object>},
           {<catalog_object>},
           {<catalog_object>}
         ],
  message: string,
  status: number
}
```

**GET /catalogs/:catalogId**
----
  Returns the specified user.
* **URL Params**  
  *Required:* `catalogId=[number]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <catalog_object> }` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message : "Catalog Dosent exist.", status: 404, data: {} }`  
