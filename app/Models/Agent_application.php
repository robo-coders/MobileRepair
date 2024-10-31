<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agent_application extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nie',
        'modelo',
        'others',
        'reason',
        'status',
        'shop_name',
        'shop_address',
        'shop_landline'
    ];

    protected $appends = [
        "created_date",
        "updated_date"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getCreatedDateAttribute()
    {
        return Carbon::parse($this->created_at)->toFormattedDayDateString();
    }

    public function getUpdatedDateAttribute()
    {
        return Carbon::parse($this->updated_at)->toFormattedDayDateString();
    }
}
