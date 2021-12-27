<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\patients;
use App\Models\patientDetails;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;



class PatientController extends Controller
{

  //For Patient

  public function getpatients()
  {
    return response()->json(patients::all(), 200);
  }



  public function getpatientbyID($id)
  {
    $patient = patients::find($id); {
      if (is_null($patient)) {
        return response()->json(['message' => 'Patient Not Found'], 404);
      }

      return response()->json($patient::find($id), 200);
    }
  }


  public function updatePatient(Request $request, $id)
  {
    $patient = patients::find($id);
    if (is_null($patient)) {
      return response()->json(['message' => 'Patient Not Found'], 404);
    }
    $patient->update($request->all());
    return response($patient, 200);
  }



  public function deletePatient(Request $request, $id)
  {
    $patient = patients::find($id);
    if (is_null($patient)) {
      return response()->json(['message' => 'Patient Not Found'], 404);
    }
    $patient->delete();
    return response()->json(null, 204);
  }



  //For Patient Details


  public function getpatientDetails()
  {
    return response()->json(patientDetails::all(), 200);
  }



  public function getpatientDetailsbyID($id)
  {
    $patientdetails = patientDetails::find($id); {
      if (is_null($patientdetails)) {
        return response()->json(['message' => 'Patient Not Found'], 404);
      }

      return response()->json($patientdetails::find($id), 200);
    }
  }




  public function updatePatientDetails(Request $request, $id)
  {
    $patientdetails = patientDetails::find($id);
    if (is_null($patientdetails)) {
      return response()->json(['message' => 'Patient Not Found'], 404);
    }
    $patientdetails->update($request->all());
    return response($patientdetails, 200);
  }



  public function deletePatientDetails(Request $request, $id)
  {
    $patientdetails = patientDetails::find($id);
    if (is_null($patientdetails)) {
      return response()->json(['message' => 'Patient Not Found'], 404);
    }
    $patientdetails->delete();
    return response()->json(null, 204);
  }



  public function getPatientByPhone($phone)
  {
    try {
      $patient = DB::table('patients')->where('phone', $phone)->first();


      if (is_null($patient)) {
        return response()->json(['message' => 'Patient Not Found'], 404);
      }

      return $patient;
    } catch (Exception $exception) {

      return  response()->json(['message' => ($exception->getMessage())]);
    }
  }




  public function insertNewPatientWithDetails(Request $request, $id)
  {
    try {

      $rules = array(

        "name" => "required|min:1|max:30",
        "address" => "required|min:3|max:100",
        "phone" => "required|max:10",
        "age" => "required|max:3|min:1",
        "email" => "required|email:rfc,dns",
        "gender" => "required|max:6",
        "time" => "required",
        "date" => "required|date_format:Y-m-d",
        "description" => "required|max:400"

      );

      $validator = Validator::make($request->all(), $rules);

      if ($validator->fails()) {
        return response()->json($validator->errors(), 401);
      } else {
        $patient = patients::find($id);

        if (isset($patient)) {

          $PatientDetails = new patientDetails();

          $PatientDetails->patient_id = $patient->id;
          $PatientDetails->name = $request->name;
          $PatientDetails->address = $request->address;
          $PatientDetails->phone = $request->phone;
          $PatientDetails->age = $request->age;
          $PatientDetails->email = $request->email;
          $PatientDetails->gender = $request->gender;
          $PatientDetails->date = $request->date;
          $PatientDetails->time = $request->time;
          $PatientDetails->description = $request->description;

          $PatientDetails->save();

          return response()->json(['message' => 'Patient Details Added..!']);
        } else {

          DB::transaction(function () use ($request) {

            $Patients = new patients();

            $Patients->name = $request->name;
            $Patients->address = $request->address;
            $Patients->phone = $request->phone;
            $Patients->age = $request->age;
            $Patients->email = $request->email;
            $Patients->gender = $request->gender;

            $Patients->save();


            $PatientDetails = new patientDetails();

            $PatientDetails->patient_id = $Patients->id;
            $PatientDetails->name = $request->name;
            $PatientDetails->address = $request->address;
            $PatientDetails->phone = $request->phone;
            $PatientDetails->age = $request->age;
            $PatientDetails->email = $request->email;
            $PatientDetails->gender = $request->gender;
            $PatientDetails->date = $request->date;
            $PatientDetails->time = $request->time;
            $PatientDetails->description = $request->description;

            $PatientDetails->save();
          });
          return response()->json(['message' => 'Patient Details and new patient Added..!']);
        }
      }
    } catch (Exception $exception) {
      return  response()->json(['message' => ($exception->getMessage())]);
    }
  }


  public function getPatientDetailsByPhone($phone)
  {
    try {
      $patientDetails = DB::table('patient_details')->where('phone', '=', $phone)->get();

      if (is_null($patientDetails)) {
        return response()->json(['message' => 'Patients Not Found'], 404);
      }

      return $patientDetails;
    } catch (Exception $exception) {

      return  response()->json(['message' => ($exception->getMessage())]);
    }
  }










  public function insertNewPatientWithDetails2(Request $request, $id)
  {
    try {

      $rules = array(

        "name" => "required|min:1|max:30",
        "address" => "required|min:3|max:100",
        "phone" => "required|max:10",
        "age" => "required|max:3|min:1",
        "email" => "required|email:rfc,dns",
        "gender" => "required|max:6",
        "time" => "required",
        "date" => "required|date_format:Y-m-d",
        "description" => "required|max:400"

      );

      $validator = Validator::make($request->all(), $rules);

      if ($validator->fails()) {
        return response()->json($validator->errors(), 401);
      } else {
        $patient = patients::find($id);

        if (isset($patient)) {

          patientDetails::create([

            'patient_id' => $patient->id,
            'name' => $request['name'],
            'address' => $request['address'],
            'phone' => $request['phone'],
            'age' => $request['age'],
            'email' => $request['email'],
            'gender' => $request['gender'],
            'date' => $request['date'],
            'time' => $request['time'],
            'description' => $request['description']
          ]);

          return response()->json(['message' => 'Patient Details Added..!']);
        } else {

          DB::transaction(function () use ($request) {

            $patient = patients::create([

              'name' => $request['name'],
              'address' => $request['address'],
              'phone' => $request['phone'],
              'age' => $request['age'],
              'email' => $request['email'],
              'gender' => $request['gender']

            ]);

            patientDetails::create([

              'patient_id' => $patient->id,
              'name' => $request['name'],
              'address' => $request['address'],
              'phone' => $request['phone'],
              'age' => $request['age'],
              'email' => $request['email'],
              'gender' => $request['gender'],
              'date' => $request['date'],
              'time' => $request['time'],
              'description' => $request['description']
            ]);
          });
          return response()->json(['message' => 'Patient Details and new patient Added..!']);
        }
      }
    } catch (Exception $exception) {
      return  response()->json(['message' => ($exception->getMessage())]);
    }
  }
}
