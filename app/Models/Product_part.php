<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_part extends Model
{
    use HasFactory;

    protected $fillable = [
        'brand_id',
        'product_id',
        'name',
        'description',
        'customer_price',
        'agent_price',
        'status'
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    
}
