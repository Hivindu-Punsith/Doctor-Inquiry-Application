<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PatientController;



//UpdatePatient
Route::put('updatePatient/{id}', [PatientController::class, 'updatePatient']);
//deletePatient
Route::delete('deletePatient/{id}', [PatientController::class, 'deletePatient']);
//UpdatePatientDetails
Route::put('updatePatientDetails/{id}', [PatientController::class, 'updatePatientDetails']);
//deletePatientdetails
Route::delete('deletePatientDetails/{id}', [PatientController::class, 'deletePatientDetails']);


//Route::middleware('auth:api')->group(function () {

    //GetAllPatients
    Route::get('patients', [PatientController::class, 'getpatients']);
    //GetSpecificPatient
    Route::get('patient/{id}', [PatientController::class, 'getpatientbyID']);
    //GetAllPatientsDetails
    Route::get('patientDetails', [PatientController::class, 'getpatientDetails']);
    //GetSpecificPatientsDetails
    Route::get('patientDetail/{id}', [PatientController::class, 'getpatientDetailsbyID']);

    //check phone numer
    Route::get('patientsphone/{phone}', [PatientController::class, 'getPatientByPhone']);
    //insertNewPatientWithDetails
    Route::post('insertNewPatientWithDetails/{id}', 'App\Http\Controllers\PatientController@insertNewPatientWithDetails');
    //getAllPatientDetailsByPhone
    Route::get('getPatientDetailsByPhone/{phone}', [PatientController::class, 'getPatientDetailsByPhone']);

    //register
    Route::post('register', 'App\Http\Controllers\UserController@register');
    //login
    Route::post('login', 'App\Http\Controllers\UserController@login');


    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::get('/user', [UserController::class, 'getUser']);
        Route::post('/logout', [UserController::class, 'logout']);
        Route::post('/check-admin', [UserController::class, 'checkAdmin']);
    });
//});




//insertNewPatientWithDetails
Route::post('insertNewPatientWithDetails2/{id}', 'App\Http\Controllers\PatientController@insertNewPatientWithDetails2');
