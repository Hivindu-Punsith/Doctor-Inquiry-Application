<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\Models\patients;
use app\Models\patientDetails;
use App\Http\Controllers\PatientController;

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});


//GetAllPatients
Route::get('patients', [PatientController::class, 'getpatients']);

//GetSpecificPatient
Route::get('patient/{id}', [PatientController::class, 'getpatientbyID']);

//UpdatePatient
Route::put('updatePatient/{id}', [PatientController::class, 'updatePatient']);

//deletePatient
Route::delete('deletePatient/{id}', [PatientController::class, 'deletePatient']);



//GetAllPatientsDetails
Route::get('patientDetails', [PatientController::class, 'getpatientDetails']);

//GetSpecificPatientsDetails
Route::get('patientDetail/{id}', [PatientController::class, 'getpatientDetailsbyID']);

//UpdatePatientDetails
Route::put('updatePatientDetails/{id}', [PatientController::class, 'updatePatientDetails']);

//deletePatientdetails
Route::delete('deletePatientDetails/{id}', [PatientController::class, 'deletePatientDetails']);



//check phone numer
Route::get('patientsphone/{phone}', [PatientController::class, 'getPatientByPhone']);

//insertNewPatientWithDetails
Route::post('insertNewPatientWithDetails/{id}', 'App\Http\Controllers\PatientController@insertNewPatientWithDetails');

//getAllPatientDetailsByPhone
Route::get('getPatientDetailsByPhone/{phone}', [PatientController::class, 'getPatientDetailsByPhone']);


//register
Route::post('register', 'App\Http\Controllers\PatientController@register');

//login
Route::post('login', 'App\Http\Controllers\PatientController@login');


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', [PatientController::class, 'getUser']);
    Route::post('/logout', [PatientController::class, 'logout']);
    Route::post('/check-admin', [PatientController::class, 'checkAdmin']);
});



//insertNewPatientWithDetails
Route::post('insertNewPatientWithDetails2/{id}', 'App\Http\Controllers\PatientController@insertNewPatientWithDetails2');