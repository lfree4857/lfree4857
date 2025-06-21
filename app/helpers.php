<?php

use App\Models\{
    Constants,
    LeadIndividualMapping
};


function __construct()
{
    $const = (new Constants)->getConstants();
}

function randomNumber()
{
    $digits = '';
    $length = 4;
    $numbers = range(1, 9);
    shuffle($numbers);
    for ($i = 0; $i < $length; $i++) {
        $digits .= $numbers[$i];
    }

    return $digits;
}

function checkAppliedId($leadId,$individualId){

        $checkAppliedId = LeadIndividualMapping::where('individual_id', $individualId)
        ->where('lead_id', $leadId)
        ->where('is_active', 1)
        ->where('individual_applied_id','!=',null)
        ->first();

        return !empty($checkAppliedId);

    }

function checkAllCosignerConsentGiven($request){

    $checkAllCosignerConsentGiven = LeadIndividualMapping::join('individual','individual.id','=','lead_individual_mapping.individualId')
    ->where('leadId', $request->leadId)
    ->where('lead_individual_mapping.isActive', 1)
    ->where('lead_individual_mapping.consentGiven', 0)
    ->where('lead_individual_mapping.individualType', "Cosigner")
    ->select('individualId','consentGiven')->get();

    return $checkAllCosignerConsentGiven->count() == 0;

}





?>
