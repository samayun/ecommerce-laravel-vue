<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddImageToProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->boolean('status')->default(1)->nullable();
            // $table->float('discount_price' , 8,2)->nullable();
            $table->boolean('featured')->default(0);
            $table->string('image')->nullable();
            // $table->decimal('weight', 8, 2)->nullable();
            // $table->string('color')->nullable();
            // $table->string('size')->nullable();
            $table->unsignedInteger('quantity')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            //
        });
    }
}
