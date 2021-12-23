<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patients extends Model
{
    use HasFactory;

    protected $table = 'patients';

    protected $fillable=['name','address','phone','age','email','gender'];
}
