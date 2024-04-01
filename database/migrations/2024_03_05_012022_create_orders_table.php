<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('brand_id');
            $table->foreignId('product_id');
            $table->text('description')->nullable();
            $table->decimal('total_amount', 10, 2);
            $table->enum('status', ['pending', 'assinged_towards_shop', 'delivered_to_shop', 'processing', 'ready_to_shipped', 'assinged_towards_client', 'delivered_to_client', 'completed', 'cancelled'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
