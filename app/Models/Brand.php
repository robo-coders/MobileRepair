<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'path',
        'status'
    ];

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($brand) {
            $brand->products()->each(function ($product) {
                $product->product_parts()->delete();
            });

            $brand->products()->delete();
        });
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    // protected $appends = [
    //     'created_date'
    // ];

    // public function getCreatedDateAttribute()
    // {
    //     return Carbon::parse($this->attributes['created_at'])->toDayDateTimeString();
    // }
}
