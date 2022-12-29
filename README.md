## SETUP
- npm install
- first create .env file with JUNO_PATH and TARGET_PATH which are absolute or relative paths to juno resources/js/lang folder and /lang folder inside this project
- then run `npm run copy`, which will copy language files over here, so that we can use type:module in package.json
- then run `npm start` which will produce missing paths from individual languages compared to EN and useless paths, that are not present in EN version
