<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'brand_id',
        'name',
        'description',
        'path',
        'status'
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($product) {
            $product->product_parts()->delete();
        });
    }
    

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
    
    public function product_parts()
    {
        return $this->hasMany(Product_part::class);
    }

    // protected $appends = [
    //     'created_date'
    // ];

    // public function getCreatedDateAttribute()
    // {
    //     return Carbon::parse($this->attributes['created_at'])->toDayDateTimeString();
    // }
}
