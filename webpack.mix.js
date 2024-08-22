const mix = require('laravel-mix');
mix.react('resources/react/app.js', 'public/js')
.sass('resources/sass/app.scss', 'public/css');