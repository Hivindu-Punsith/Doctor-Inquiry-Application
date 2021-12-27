<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patientDetails extends Model
{
    use HasFactory;

    protected $table = 'patient_details';

    protected $fillable = ['patient_id','name','address','phone','age','email','gender','date',
                            'time','description'];

}
