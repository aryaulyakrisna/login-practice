# Run the API

- Create a new env file as shown in the .env.example file.

- Fill in all the required credentials:

  - PORT = 4000
  - DB_HOST = localhost
  - DB_NAME = db_login_practice
  - DB_USER = root
  - DB_PASSWORD = ""
  - JWT_SECRET = logipractice778989

- Optional, better to use a longer and more complex random string as JWT_SECRET value

- Install dependencies:

  ```
  npm i
  ```

- Run Apache and MySql, then import the db_login_practice.sql file

  - Existing user username = krisna, password = muehehe

- Start the API:

  ```
  npm run dev
  ```
