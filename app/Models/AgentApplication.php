<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AgentApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nie',
        'modelo',
        'others',
        'reason',
        'status'
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
