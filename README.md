# How to use this project
1. Do a git clone on this repo
2. do npm install
3. after everything is done, run the command cp .env.example .env in the project directory that you have cloned
4. Do database setup first 
5. Do database setup first in the .env file and config.json file in the src/config folder
6. After all the setup is complete, run the migration command on cmd using the command: npx sequelize-cli db:migrate and also do the migration of the seeders npx sequelize-cli db:seed:all
7. make sure when running the table and seeder migration command, your command prompt is in the src folder