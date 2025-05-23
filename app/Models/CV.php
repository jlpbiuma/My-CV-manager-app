<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CV extends Model
{
    use HasFactory;

    protected $table = 'cvs';

    protected $fillable = [
        'user_id',
        'name',
        'language',
        'preview_image',
        'last_updated',
        'status',
        'resume',
        'image_url',
        'template',
        'url',
    ];

    // Define the relationship with the User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
