<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'order_number',
        'brand_id',
        'product_id',
        'description',
        'total_amount',
        'status'
    ];

    public function order_parts()
    {
        return $this->hasMany(Order_part::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function orderAssignments()
    {
        return $this->hasOne(Assignment::class);
    }
    
}
