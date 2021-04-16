FROM php:8.0-cli

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends \
    apt-utils build-essential libncurses5-dev libxml2-dev libcurl4-gnutls-dev libzip-dev libedit-dev git curl zip unzip openssl

RUN docker-php-ext-install -j"$(nproc)" zip bcmath

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer