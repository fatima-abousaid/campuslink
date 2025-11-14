<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    //  User → Announcements (relation: one-to-many)
    public function announcements()
    {
        return $this->hasMany(Announcement::class);
    }

    //  User → Comments (relation: one-to-many)
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
