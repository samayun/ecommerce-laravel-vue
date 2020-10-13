<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('comment')->nullable();
            $table->string('shipping_address')->nullable();
            $table->float('discount' , 8,2);
            $table->string('status' ,20)->nullable()->default('pending');
            $table->string('payment_type' ,20)->nullable()->default('cash');
            $table->float('total' ,8,2);
            $table->float('charges' ,8,2)->nullable()->default(0);
            $table->float('sub_total' ,8,2);
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');
            $table->timestamps();
        });
  
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
