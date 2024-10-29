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
        'status',
        'type'
    ];

    protected $appends = ["image",  "created_date",];

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

    public function getImageAttribute()
    {
        if ($this->path) {
            return url($this->path);
        }

        return "https://ui-avatars.com/api/?name=". $this->name ."&color=FFFFFF&background=EC5624";
    }

    public function getCreatedDateAttribute()
    {
        return Carbon::parse($this->created_at)->toFormattedDayDateString();
    }
}
