<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\Models\patients;
use app\Models\patientDetails;
use App\Http\Controllers\PatientController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//GetAllPatients
Route::get('patients',[PatientController::class,'getpatients']);

//GetSpecificPatient
Route::get('patient/{id}',[PatientController::class,'getpatientbyID']);

//addNewPatient
Route::post('addPatient', 'App\Http\Controllers\PatientController@addPatient');

//UpdatePatient
Route::put('updatePatient/{id}',[PatientController::class,'updatePatient']);

//deletePatient
Route::delete('deletePatient/{id}',[PatientController::class,'deletePatient']);




//GetAllPatientsDetails
Route::get('patientDetails',[PatientController::class,'getpatientDetails']);

//GetSpecificPatientsDetails
Route::get('patientDetail/{id}',[PatientController::class,'getpatientDetailsbyID']);

//addNewPatientDetails
Route::post('addPatientDetails', 'App\Http\Controllers\PatientController@addPatientDetails');

//UpdatePatientDetails
Route::put('updatePatientDetails/{id}',[PatientController::class,'updatePatientDetails']);

//deletePatientdetails
Route::delete('deletePatientDetails/{id}',[PatientController::class,'deletePatientDetails']);



//check phone numer















