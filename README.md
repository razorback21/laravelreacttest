Installation instruction
1. Clone the repository
2. Run `composer install`
3. Run `npm install`
5. Create an sqlite database.
    - update the database connection in `.env` file
    - DB_CONNECTION=sqlite
    - DB_DATABASE=[path_to_your_database_file/database.sqlite] 
    - e.g. DB_DATABASE=/var/www/laravel8react/database/database.sqlite
    - Run `touch database/database.sqlite`
    - Run `php artisan migrate`
    - Run `php artisan db:seed`
6. Run `npm run dev`
7. Run `php artisan serve`
8. Go to `http://localhost:8000 or http://127.0.0.1:8000`