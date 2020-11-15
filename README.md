#### Php artisan commands
``` console
    composer create-project --prefer-dist laravel/laravel ECommerce "8"
    composer require laravel/ui --dev
    php artisan ui vue --auth
    npm install admin-lte vue-router vuex @fortawesome/fontawesome-free moment vform view-design vue-i18n
    npm install
    npm run watch-poll
```

# Polymorphic Relationship

### One to Many (Images with Product, User , Brand, Category etc :smile:

> ### ` php artisan make:model Image -mc ` 

```php
//[...] database/migrations/2020_11_13_154946_create_images_table.php

    Schema::create('images', function (Blueprint $table) {
        $table->id();
        $table->morphs('imageable');
        // $table->unsignedBigInteger('imageable_id')->index();
        // $table->string('imageable_type');
        $table->timestamps();
    });

```

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function imageable()
    {
        return $this->morphTo();
    }
}
```
```php
class Product extends Model
{
    public function images()
    {
        return $this->morphMany('App\Models\Image', 'imageable');
        // imageable is method came from Image Model
    }
}
```
```php
class Post extends Model
{
    public function images()
    {
        return $this->morphMany('App\Models\Image', 'imageable');
        // imageable is method came from Image Model
    }
}
```

```php
class Brand extends Model
{
    public function images()
    {
        return $this->morphMany('App\Models\Image', 'imageable');
        // imageable is method came from Image Model
    }
}
```



