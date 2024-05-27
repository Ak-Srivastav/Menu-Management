# Menu Management

## 🧰:Languages and Tools:

![NodeJS](https://img.shields.io/badge/nodejs%20-%ffb400.svg?&style=for-the-badge&logo=nodeJs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/expressjs%20-%23FF6F00.svg?&style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongodb%20-%2320232a.svg?&style=for-the-badge&logo=mongodb&logoColor=white)

## How to run:

- Clone this repository or fork it.
  - To clone this repository type `git clone https://github.com/Ak-Srivastav/Menu-Management.git` on your command line
  - To fork this repository, click fork button of this repository then type `git clone https://github.com/<your username>/Menu-Management.git`
- Inside your Menu-Management folder, create a new file named `.env` which stores informations about server side such as `MONGO_URI`
  - or 
- Rename .envexample to .env after setting.
- Store your database URI inside `MONGO_URI` variable
- `Delete MONGO_URI from .env, if running using Docker`
- example:
  ```
  MONGO_URI = mongodb+srv://<username>:<password>@<collection_name>.<providedbymongodb>.mongodb.net/ (MongoDB Atlas)
  or 
  MONGO_URI = mongodb://127.0.0.1:27017/menu-management (MongoDB Compass)
  PORT = 3000
  ```
#Method 1  
- Install all dependencies
  - Server side: on the `Menu-Management` directory type `npm install`

- Run it on node js:
  - Server side: on the `Menu-Management` directory type `npm start`

#Method 2
- Run using docker
`docker-compose up`
- It'll run on PORT `6868` on your Local-System 

## Directory Structure
```
├───📁 api/
│   ├───📁 config/
│   │   └───📄 connectDB.js
│   ├───📁 controllers/
│   │   ├───📁 Category/
│   │   │   └───📄 categoryController.js
│   │   ├───📁 error/
│   │   │   └───📄 ApiError.js
│   │   ├───📁 Item/
│   │   │   └───📄 ItemController.js
│   │   ├───📁 response/
│   │   │   └───📄 ApiResponse.js
│   │   └───📁 SubCategory/
│   │       └───📄 subCategoryController.js
│   ├───📁 middlewares/
│   │   ├───📄 ApiErrorMiddleware.js
│   │   ├───📄 Async.js
│   │   └───📄 HandleNotFoundMiddleware.js
│   ├───📁 models/
│   │   ├───📄 Category.js
│   │   ├───📄 Item.js
│   │   └───📄 SubCategory.js
│   ├───📁 routes/
│   │   ├───📄 categoryRoute.js
│   │   ├───📄 itemRoute.js
│   │   └───📄 subcategoryRoute.js
│   └───📄 server.js
├───📄 .gitignore
├───📄 package-lock.json
├───📄 package.json
└───📄 README.md

```
## API Documentation

This table provides an overview of the available API endpoints for managing categories.

| Category | Method | Endpoint | Purpose |
|---|---|---|---|
| I. Create Category | POST | /api/category/create | To create a new category with provided details. |
| II. Get Single Category | GET | /api/category/get/:id | To retrieve a specific category using its unique identifier (id). |
| III. Get Category By Name | GET | /api/category/get?name=categorynamegoeshere | To search for categories based on a provided name using Regular Expression Matching (partial matches possible). |
| IV. Update Category | PUT | /api/category/update/:id | To modify details of an existing category identified by its id. |
| V. Delete Category | DELETE | /api/category/delete/:id | To remove a specific category from the system (requires valid id). |

**Note:**

* Replace `:id` in the endpoints with the actual category identifier for specific operations (GET Single Category, Update Category, Delete Category).
* Replace `name` in the `get?name` endpoints with the actual name for filtering Categories.

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <img src="https://github.com/Ak-Srivastav/Menu-Management/assets/106487556/5796f667-26a8-4e9b-b00a-ea00d5e29d26" width="49%" height="60%">
  <img src="https://github.com/Ak-Srivastav/Menu-Management/assets/106487556/5fda9ceb-5760-4ec5-b813-d40ac2ea3f68" width="49%" height="60%">
  <img src="https://github.com/Ak-Srivastav/Menu-Management/assets/106487556/fa98a1cf-9fa5-4575-af47-e5ba36e2a6d0" width="49%" height="60%">
  <img src="https://github.com/Ak-Srivastav/Menu-Management/assets/106487556/07285cc0-92a6-42f7-8b7f-771cd3e51f50" width="49%" height="60%">
</div>

## SubCategory API Documentation

This table provides an overview of the available API endpoints for managing subcategories.

| SubCategory | Method | Endpoint | Purpose |
|---|---|---|---|
| I. Create Sub-Category | POST | /api/sub-category/create | To create a new sub-category. |
| II. Get Single Sub-Category by id | GET | /api/sub-category/get/:id | To retrieve a specific sub-category using its unique identifier (id). |
| III. Get SubCategory by Name | GET | /api/sub-category/get?name=requiredname | To search for subcategories based on a provided name using Regular Expression Matching (partial matches possible). |
| IV. Get SubCategory Under Category | GET | /api/sub-category/getunder?name=nameofcategory | To fetch a list of subcategories belonging to a specific category (exact name match). |
| V. Update SubCategory | PUT | /api/sub-category/update/:id | To modify details of an existing sub-category identified by its id. |
| VI. Delete SubCategory | DELETE | /api/sub-category/delete/:id | To remove a specific sub-category from the system (requires valid id). |

**Note:**

* Replace `:id` in the endpoints with the actual sub-category identifier for specific operations (GET Single Sub-Category, Update Sub-Category, Delete SubCategory).
* Replace `nameofcategory` in the `getunder` endpoint with the actual category name for filtering subcategories.


## Items API Documentation

This table provides an overview of the available API endpoints for managing items.

| Item | Method | Endpoint | Purpose |
|---|---|---|---|
| I. Create Item | POST | /api/item/create | To create a new item. |
| II. Get Single Item by id | GET | /api/item/get/:id | To retrieve a specific item using its unique identifier (id). |
| III. Get Item by Name | GET | /api/item/get?name=requiredname | To search for items based on a provided name using Regular Expression Matching (partial matches possible). |
| IV. Get Items Under Category | GET | /api/item/get-under-category?name=category | To fetch a list of items belonging to a specific category (exact name match). |
| V. Get Items Under Sub-Category | GET | /api/item/get-under-sub-category?name=subcategory | To fetch a list of items belonging to a specific sub-category (exact name match). |
| VI. Update Item | PUT | /api/item/update/:id | To modify details of an existing item identified by its id. |
| VII. Delete Item | DELETE | /api/item/delete/:id | To remove a specific item from the system (requires valid id). |

**Note:**

* Replace `:id` in the endpoints with the actual item identifier for specific operations (GET Single Item by id, Update Item, Delete Item).
* Replace `name` in the `get?name` endpoints with the actual name for filtering items.
* Replace `category`, `subcategory` in the `get-under-category?name=category`, `get-under-subcategory?name=subcategory` endpoints with the actual category/subcategory name, for filtering items.
