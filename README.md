# Электронный Магазин

## Сервер : Nest.js with Express +  MongoDB (Mongoose)
## Клиент : Angular (Server-side rendering)


## Описание
- Магазин с товарами и администрацией
- Typescript с декораторами, MongoDB и mongoose схемы, JWT Passport
- Настройка визуального оформления с помощью css

## Установка

```
$ npm install
```

## Запуск приложения

```
# разработка - запуск Бэкенда - port 4000
$ npm run start

# разработка - запуск Фронтенда - port 3000
$ npm run start:client

# watch mode server 
$ npm run start:dev

# Билд ssr, watch
$ npm run dev:ssr

# Билд ssr и serve
$ npm run build:ssr
$ npm run serve:ssr
```

## Настройка окружения для Бэкенда

- Переименуйте .env.example на .env

```bash
# BE HOST
SERVER_PORT=4000
SERVER_URL="http://localhost:4000"

# FE HOST
ORIGIN="http://localhost:3000"

# JWT settings
JWT_EXPIRATION="7d"
JWT_SECRET="выберитесвое"

COOKIE_KEY="выберитесвое"

# DB URI
MONGO_URI="mongodb://{user}:{password}@{host}:{port}/{databaseName}"

# Emails
SENDGRID_KEY="установите, если вы хотите получать уведомления о заказе или контактную форму https://sendgrid.com (ADMIN_EMAILS и пользователь получит уведомление)"

# Images
CLOUDINARY_NAME="установите имя из api cloudinary https://cloudinary.com (для загрузки изображений)"
CLOUDINARY_KEY="установите ключ из cloudinary api https://cloudinary.com (для загрузки изображений)"
CLOUDINARY_SECRET="установите секрет из api cloudinary https://cloudinary.com (для загрузки изображений)"

# Pay
STRIPE_PUBLISHABLE_KEY="установите для оплаты заказов картой со stripe https://stripe.com"
STRIPE_SECRETKEY="установите для оплаты заказов картой со stripe https://stripe.com"

# Yandex.Money
YA_CLIENT_ID=""
YA_SECRETKEY=""

# Google login
GOOGLE_CLIENT_ID="установите для активации входа через Google"
GOOGLE_CLIENT_SECRET="установите для активации входа через Google"

# Электронные письма администратора получают уведомления от sendgrid при отправке заказа или контакта
ADMIN_EMAILS="your@email.com, another@mail.com"

# Ключ сервера Recaptcha от google
RECAPTCHA_SERVER_KEY="RECAPTCHA_SERVER_KEY"

# Получить местоположение по IP - https://geolocation-db.com
GEO_LOCATION_API_KEY="GEO_LOCATION_API_KEY"

# FE ENV SEND FROM BE
FE_STRIPE_PUBLISHABLE_KEY="FE_STRIPE_PUBLISHABLE_KEY"
FE_TINYMCE_API_KEY="FE_TINYMCE_API_KEY"
FE_RECAPTCHA_CLIENT_KEY="FE_RECAPTCHA_CLIENT_KEY"
```
## Docker

```bash
# pull docker
docker pull pararel/eshop-mean:latest

# run docker with env file
docker run --env-file $PathToEnv --network=host pararel/eshop-mean:latest

# run docker with env set in cmd line
docker run --e MONGO_URI=mongodbUrl --e OTHER_ENV=otherEnvValue --network=host pararel/eshop-mean:latest

```
