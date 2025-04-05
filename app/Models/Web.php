<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Web extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'cv_id',
        'type',
        'url',
    ];

    // Define the relationship with the User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Define the relationship with the CV model
    public function cv()
    {
        return $this->belongsTo(CV::class);
    }
}
