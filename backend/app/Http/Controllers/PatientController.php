<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\patients;
use App\Models\patientDetails;
use Illuminate\Support\Facades\Validator;


class PatientController extends Controller
{

//For Patient

    public function getpatients(){
        return response()->json(patients::all(),200);
    }



    public function getpatientbyID($id){
        $patient =patients::find($id);
        {
            if (is_null($patient)){
                return response()->json(['message'=>'Patient Not Found'],404);
            }
    
            return response()->json($patient::find($id),200);
        }
      }


    function addPatient(Request $request)
    {
  
      $rules=array(
        "name"=>"required",
        "address"=>"required",
        "phone"=>"required",
        "age"=>"required",
        "email"=>"required",
        "gender"=>"required",

      );
      $validator=Validator::make($request->all(),$rules);
      if($validator->fails())
      {
        return response()->json($validator->errors(),401);
      }
      else
      {
        $patient=  patients::create($request->all());
        return response($patient,201);
      }
        
    }

    public function updatePatient(Request $request,$id){
        $patient=patients::find($id);
        if(is_null($patient)){
          return response()->json(['message'=>'Patient Not Found'],404);
        }
        $patient-> update($request->all());
        return response($patient,200);
    }
  


    public function deletePatient(Request $request,$id){
      $patient=patients::find($id);
      if(is_null($patient)){
          return response()->json(['message'=>'Patient Not Found'],404);
        }
        $patient->delete();
        return response()->json(null,204);
    }





//For Patient Details


    public function getpatientDetails(){
        return response()->json(patientDetails::all(),200);
    }



    public function getpatientDetailsbyID($id){
        $patientdetails =patientDetails::find($id);
        {
            if (is_null($patientdetails)){
                return response()->json(['message'=>'Patient Not Found'],404);
            }
    
            return response()->json($patientdetails::find($id),200);
        }
      }


    function addPatientDetails(Request $request)
    {
  
      $rules=array(
        "patient_id"=>"required",
        "name"=>"required",
        "address"=>"required",
        "phone"=>"required",
        "age"=>"required",
        "email"=>"required",
        "gender"=>"required",
        "date"=>"required",
        "time"=>"required",
        "description"=>"required",

      );
      $validator=Validator::make($request->all(),$rules);
      if($validator->fails())
      {
        return response()->json($validator->errors(),401);
      }
      else
      {
        $patientdetails=  patientDetails::create($request->all());
        return response($patientdetails,201);
      }
        
    }

    public function updatePatientDetails(Request $request,$id){
        $patientdetails=patientDetails::find($id);
        if(is_null($patientdetails)){
          return response()->json(['message'=>'Patient Not Found'],404);
        }
        $patientdetails-> update($request->all());
        return response($patientdetails,200);
    }
  


    public function deletePatientDetails(Request $request,$id){
      $patientdetails=patientDetails::find($id);
      if(is_null($patientdetails)){
          return response()->json(['message'=>'Patient Not Found'],404);
        }
        $patientdetails->delete();
        return response()->json(null,204);
    }


}
