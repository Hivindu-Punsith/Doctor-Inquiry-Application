<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patientDetails extends Model
{
    use HasFactory;

    protected $table = 'patient_details';
    
    public $timestamps=false;
    protected $fillable=['name','address','phone','age','email',
                        'gender','date','time','description'];
}
