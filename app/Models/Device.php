<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Device extends Model
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        "user_id",
        "deviceId",
        "memUsed",
        "diskFree",
        "diskTotal",
        "realDiskFree",
        "realDiskTotal",
        "model",
        "operatingSystem",
        "osVersion",
        "androidSDKVersion",
        "platform",
        "manufacturer",
        "isVirtual",
        "name",
        "webViewVersion",
        "version"
    ];
}
