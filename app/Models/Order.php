<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'brand_id',
        'product_id',
        'description',
        'total_amount',
        'status'
    ];
    
    protected $appends = [
        "created_date"
    ];
}
