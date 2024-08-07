<?php

namespace App\Models;

use Carbon\Carbon;
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
        'delivery_address',
        'description',
        'tax_percent',
        'tax_amount',
        'sub_total_amount',
        'total_amount',
        'invoice',
        'status'
    ];

    protected $appends = ["order_date", "invoice_url"];

    public function order_parts()
    {
        return $this->hasMany(Order_part::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class, "delivery_address");
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
    
    public function getOrderDateAttribute()
    {
        return Carbon::parse($this->created_at)->toDayDateTimeString();
    }

    public function getInvoiceUrlAttribute()
    {
        if ($this->invoice) {
            return url($this->invoice);
        }
        else {
            return "";
        }
    }
}
